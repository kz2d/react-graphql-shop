import React, { Component } from "react";
import styled from "styled-components";
import { MainContext } from "../services/context";
import CartItem from "../components/cart-item";

class CartPage extends Component {
  static contextType = MainContext;

  render() {
    const { Cart } = this.context;
    return (
      <>
        <Text>Cart</Text>

        {Object.keys(Cart).map((el) => {
          return <>
          <Divider/>
          <CartItem el={el} /></>;
        })}
      </>
    );
  }
}

const Divider=styled.div`
  background-color:
#E5E5E5;
height: 1px;
width:100%;
content:"";
margin-bottom:21px;
`
const Text = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 160%;
  padding: 80px 0 100px 0;
`;

export default CartPage;
