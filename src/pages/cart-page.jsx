import React, { Component } from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../assets/Constants";
import { Price } from "../styled-components-folder/Price";
import PriceConv from "../services/price-converter";
import { MainContext } from "../services/context";
import { createID } from "../services/createID";

class CartPage extends Component {
  static contextType = MainContext;

  item(el) {
    const Description = "Running Short";

    const { Cart, setCart, Currency } = this.context;
    return (
      <FlexRow key={el}>
        <FlexColTwo>
          <h2>{Cart[el].name}</h2>
          <p>{Description}</p>
          <Price bold>{PriceConv(Cart, Currency, el)}</Price>
          <FlexRowTwo>{this.itemIcons(el)}</FlexRowTwo>
        </FlexColTwo>
        <FlexCol>
          <Square
            onClick={() => setCart({ type: "add", id: createID(Cart[el]) })}
          >
            +
          </Square>
          <i>{Cart[el].amount}</i>
          <Square
            onClick={() => setCart({ type: "delete", id: createID(Cart[el]) })}
            minus
          >
            -
          </Square>
        </FlexCol>

        <Image src={Cart[el].img} alt="kek" />
      </FlexRow>
    );
  }

  itemIcons(el) {
    const { Cart } = this.context;
    return Object.keys(Cart[el].attributes).map((key) => {
      const atr = Cart[el].attributes[key];
      if (atr.type === "text")
        return (
          <SizeButton key={atr.name + atr.displayValue}>
            {atr.displayValue}
          </SizeButton>
        );
      if (atr.type === "swatch")
        return (
          <SizeButton
            style={{ borderColor: atr.value }}
            key={atr.name + atr.displayValue}
          >
            {atr.displayValue}
          </SizeButton>
        );
      return null;
    });
  }

  render() {
    const { Cart } = this.context;
    return (
      <>
        <Text>Category name</Text>

        {Object.keys(Cart).map((el) => {
          return this.item(el);
        })}
      </>
    );
  }
}

const Text = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 160%;
  padding: 80px 0 100px 0;
`;

const FlexRow = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const FlexRowTwo = styled(FlexRow)`
  padding: 0;
  margin: 0;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-weight: 600;
    font-size: 30px;
  }
  p {
    font-size: 30px;
  }
  i {
    margin: auto;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
  }
`;

const FlexColTwo = styled(FlexCol)`
  width: 900px;
  padding-right: 18px;
`;

const SizeButton = styled.a`
  border: 1px solid ${COLORS.text};
  width: 63px;
  height: 45px;
  display: grid;
  place-content: center center;
  font-size: 14px;
  margin-right: 8px;
  ${(props) =>
    props.disabled &&
    css`
      filter: opacity(50%);
    `}
  ${(props) =>
    props.isActive &&
    css`
      background-color: ${COLORS.text};
      color: ${COLORS.background};
    `}
`;

const Square = styled.div`
  height: 45px;
  width: 45px;
  display: grid;
  place-content: center center;
  border: 1px solid ${COLORS.text};
  font-size: 40px;
  cursor: pointer;
  ${({ minus }) =>
    minus &&
    css`
      padding-bottom: 5px;
    `}
`;

const Image = styled.img`
  height: 185px;
  width: 141px;
  object-fit: cover;
  margin-left: 12px;
`;

export default CartPage;
