import { Component } from "react";
import { MainContext } from "../services/context";
import { Price } from "../styled-components-folder/price";
import PriceConv from "../services/price-converter";
import { createID } from "../services/createID";

import styled, { css } from "styled-components";
import { COLORS } from "../assets/Constants";
import {
  RightArrow,
  LeftArrow,
} from "../styled-components-folder/right-left-arrows";

class CartItem extends Component {
  static contextType = MainContext;

  constructor(props) {
    super(props);
    this.state = {
      imgNum: 0,
    };
  }

  itemIcons(el) {
    const { Cart } = this.context;
    return Object.keys(Cart[el].attributes).map((key) => {
      const atr = Cart[el].attributes[key];
      if (atr.type === "text")
        return (<>
          <NameOfAttribute>{atr.name}:</NameOfAttribute>
          <SizeButton key={atr.name + atr.displayValue}>
            {atr.displayValue}
          </SizeButton>
          </>
        );
      if (atr.type === "swatch")
        return (<>
          <NameOfAttribute>{atr.name}:</NameOfAttribute>
          <SizeButton
            style={{ borderColor: atr.value }}
            key={atr.name + atr.displayValue}
          >
            {atr.displayValue}
          </SizeButton></>
        );
      return null;
    });
  }

  render() {
    const Description = "Running Short";
    const { el } = this.props;

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
        <ImageWrapper >
          <LeftArrow 
            onClick={() =>
              this.setState({
                imgNum: (this.state.imgNum - 1+Cart[el].gallery.length) % Cart[el].gallery.length
              })
            }
          />
          <Image src={Cart[el].gallery[this.state.imgNum]} alt="kek" />
          <RightArrow
            onClick={() =>{
                console.log('ll')
              this.setState({
                imgNum: (this.state.imgNum + 1) % Cart[el].gallery.length,
              })}
            }
          />
        </ImageWrapper>
      </FlexRow>
    );
  }
}

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

const NameOfAttribute = styled.div`
  font-weight: 600;
    font-size: 20px;
    padding-right:10px;
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
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  height: 185px;
  width: 141px;
  margin-left: 12px;
  position: relative;
`;

export default CartItem;
