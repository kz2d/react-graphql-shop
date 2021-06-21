import React, { Component } from 'react';
import test from '../assets/test.png'
import styled,{css} from 'styled-components';
import { Container } from '../styled-components-folder/Container'
import Header from '../components/header';
import { Price } from '../styled-components-folder/Price';
import {PrimaryButton} from '../styled-components-folder/PrimaryButton'
import {COLORS} from '../assets/Constants'


class DescriptionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                
                <FlexRow style={{ padding: '80px 0 0 0' }}>
                    <FlexCol>
                        <SmallImg src={test}/>
                        <SmallImg src={test}/>
                        <SmallImg src={test}/>
                    </FlexCol>
                    <BigImg src={test}/>
                    <FlexCol style={{ width: '300px' }} >
                        <h3>Apollo</h3>
                        <h5>Running Short</h5>
                        <h4>SIZE:</h4>
                        <FlexRow style={{ padding: '8px 0 40px 0'}} >
                            <Button disabled>XS</Button>
                            <Button selected>S</Button>
                            <Button>M</Button>
                            <Button>L</Button>
                        </FlexRow>
                        <h4>PRICE:</h4>
                        <Price bold  style={{ padding: '24px 0'}}>$50.00</Price>
                        <PrimaryButton primary>ADD TO CART</PrimaryButton>
                        <p>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
                    </FlexCol>
                </FlexRow>
            </>
        );
    }
}

const FlexRow=styled.div`
    display:flex;
`



const FlexCol=styled.div`
    display:flex;
    flex-direction:column;

    h3{
font-weight: 600;
font-size: 30px;
    }
    h5{
        padding: 10px 0 43px 0;
font-weight: normal;
font-size: 30px;
    }
    h4{
        font-family: Roboto Condensed;
font-style: normal;
font-weight: bold;
font-size: 18px;
    }
    p{
        padding-top:40px;
        font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 159.96%;
    }
`

const SmallImg=styled.img`
  height:85px;
  width:85px;
  object-fit: cover;
  margin-bottom:32px;
`

const BigImg=styled.img`
  height:515px;
  width:515px;
  object-fit: cover;
  margin:0 90px 0 40px;
`

const Button=styled.span`
    border:1px solid ${COLORS.text};
    width:63px;
    height:45px;
    display:grid;
    place-content: center center;
    font-size: 14px;
    margin-right:8px;
    ${
        (props)=>props.disabled&&css`
            filter:opacity(50%);
        `
    }
    ${
        (props)=>props.selected&&css`
            background-color:${COLORS.text};
            color:${COLORS.background};
        `
    }
`

export default DescriptionPage;