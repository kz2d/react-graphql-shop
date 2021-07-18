import styled from "styled-components";
import { Price } from "../styled-components-folder/price";
import { ReactComponent as Cart } from "../assets/svg/cart.svg";
import { COLORS } from "../assets/Constants";
import { MoneyTypeSymbol } from "../assets/Constants";
import { Component } from "react";
import { MainContext } from "../services/context";
import { createID } from "../services/createID";

class MiddleItem extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);
    console.log(props);
    let obj = {};
    props.attributes.map(
      (atr) =>
        (obj[atr.name] = {
          name: atr.name,
          type: atr.type,
          value: atr.items[0].value,
          displayValue: atr.items[0].displayValue,
        })
    );
    this.state = {
      attributes: obj,
    };
  }
  render() {
    const { Currency, setCart } = this.context;

    if (!this.props.inStock)
      return (
        <ContainerNone>
          <Grey/>
          <Image src={this.props.gallery[0]} alt="kek" />
          <Stock>OUT OF STOCK</Stock>
          <NameOfItem>{this.props.name}</NameOfItem>
          <Price>
            {MoneyTypeSymbol[Currency] +
              this.props.prices.find((e) => Currency === e.currency).amount}
          </Price>
        </ContainerNone>
      );
    return (
      <Container
        onClick={() => {
          console.log(this.props)
          this.props.history.push("/description/"+this.props.name)
        }}
      >
          <Image src={this.props.gallery[0]} alt="kek" />
          <NameOfItem>{this.props.name}</NameOfItem>
          <Price>
            {MoneyTypeSymbol[Currency] +
              this.props.prices.find((e) => Currency === e.currency).amount}
          </Price>

          <CartCircle
            onClick={(e) => {
              e.stopPropagation();
              setCart({
                type: "add",
                id: createID({
                  name: this.props.name,
                  attributes: this.state.attributes,
                }),
                name: this.props.name,
                gallery: this.props.gallery,
                price: this.props.prices,
                attributes: this.state.attributes,
              });
            }}
          >
            <Cart />
          </CartCircle>
      </Container>
    );
  }
}

const Container = styled.div`
  text-align: left;
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: relative;
  /* transition:box-shadow 0.3s ease-in; */

  :hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    /* box-shadow: 3px 5px 13px 3px rgb(168, 172, 176, 89%);My feature */
  }
`;

const ContainerNone = styled.div`
  text-align: left;
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: relative;
  filter: opacity(100%);
`;

const Stock = styled.p`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  text-align: center;
  padding-top: 160px;
  color: #8d8f9a;
`;

const Image = styled.img`
  height: 330px;
  width: 330px;
  object-fit: cover;
  z-index: 0;
`;

const NameOfItem = styled.p`
  font-family: "Raleway";
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  padding: 15px 0 5px 0;
`;

const CartCircle = styled.div`
  position: absolute;
  background-color: ${COLORS.primary};
  border-radius: 50%;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
  cursor: pointer;
  top: 320px;
  right: 31px;
  padding: 16px 16px 12px 14px;

  svg {
    filter: brightness(100);
  }
`;

const Grey = styled.div`
  background-color: #8d8f9a;
  opacity: 10%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  content: "";
`;

export default MiddleItem;
