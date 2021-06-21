import React, { Component } from 'react';
import MiddleItem from '../components/middle-size-item';
import test from '../assets/test.png'
import styled, { css } from 'styled-components';
import { Container } from '../styled-components-folder/Container'
import Header from '../components/header';
import { COLORS } from '../assets/Constants'
import { Price } from '../styled-components-folder/Price';
import Plus from '../components/small/plus';
import Minus from '../components/small/minus';

const CartPage = () => {
    let { Name, Description, InpPrice, numberOf} = { 
        Name: 'Apollo',
         Description: 'Running Short',
          InpPrice: '$50.00',
           numberOf: 1,
         }

    return (
        <>


            <Text>Category name</Text>

            <FlexRow>

                <FlexColTwo>
                    <h2>{Name}</h2>
                    <p>{Description}</p>
                    <Price bold>{InpPrice}</Price>
                    <FlexRowTwo>
                        <SizeButton>S</SizeButton>
                        <SizeButton isActive>M</SizeButton>
                    </FlexRowTwo>
                </FlexColTwo>
                <FlexCol>
                    <Square >+</Square>
                    <i>{numberOf}</i>
                    <Square >-</Square>
                </FlexCol>

                <Image src={test} alt="kek" />
            </FlexRow>
        </>
    );

}


const Text = styled.div`
    font-family: Raleway;
font-style: normal;
font-weight: normal;
font-size: 42px;
line-height: 160%;
padding:80px 0 100px 0;
`

const FlexRow = styled.div`
    display:flex;
    margin-bottom:40px;
`

const FlexRowTwo = styled(FlexRow)`
    padding:0;
    margin:0;
`

const FlexCol = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
   
    h2{
        font-weight: 600;
        font-size: 30px;
    }
    p{
        font-size: 30px;
    }
    i{
        margin:auto;
        font-family: 'Raleway';
font-style: normal;
font-weight: 500;
line-height: 160%;
    }
`

const FlexColTwo = styled(FlexCol)`
    width:900px;
    padding-right:18px;

`

const SizeButton = styled.a`
    border:1px solid ${COLORS.text};
    width:63px;
    height:45px;
    display:grid;
    place-content: center center;
    font-size: 14px;
    margin-right:8px;
    ${(props) => props.disabled && css`
            filter:opacity(50%);
        `
    }
    ${(props) => props.isActive && css`
            background-color:${COLORS.text};
            color:${COLORS.background};
        `
    }
`

const Square = styled.div`
  height:45px;
  width:45px;
  display:grid;
    place-content: center center;
    border:1px solid ${COLORS.text}; 
    font-size:40px; 
`

const Image = styled.img`
  height:185px;
  width:141px;
  object-fit: cover;
  margin-left:12px;
`

export default CartPage;