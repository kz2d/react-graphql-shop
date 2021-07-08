import React, { Component } from 'react';
import test from '../assets/test.png'
import styled,{css} from 'styled-components';
import { Container } from '../styled-components-folder/Container'
import Header from '../components/header';
import { Price } from '../styled-components-folder/Price';
import {PrimaryButton} from '../styled-components-folder/PrimaryButton'
import {COLORS, MoneyTypeSymbol} from '../assets/Constants'
import { useQuery } from '@apollo/client';
import {GET_ALL_ITEMS_BY_TYPE} from '../services/graphql/description'
import { useParams } from 'react-router';
import { useCurrencyState } from '../services/context/Currency';
import {useCartDispatch} from '../services/context/Cart'

const DescriptionPage =()=> {
    const { data, loading, error, refetch } = useQuery(GET_ALL_ITEMS_BY_TYPE,{
        variables: { title:""},
    })
    const {itemID}=useParams();
    const Currency=useCurrencyState()
    const setCart=useCartDispatch()
    
    if(loading)
        return <p>loading...</p>
    
    console.log(data)
    
    const product=data.category.products.find((element)=>{
        return element.name===itemID;
    })
    if(!product)
        return <p>loading...</p>

    console.log(product)
        return (
            <>
                <FlexRow style={{ padding: '80px 0 0 0' }}>
                    <FlexCol>
                        {product.gallery.slice(1,product.gallery.length-1).map((el)=>{
                            return <SmallImg src={el} key={el}/>
                        })}
                        
                    </FlexCol>
                    <BigImg src={product.gallery[0]}/>
                    <FlexCol style={{ width: '300px' }} >
                        <h3>{product.name}</h3>
                        <h5>{product.category}</h5>
                        <h4>SIZE:</h4>
                        <FlexRow style={{ padding: '8px 0 40px 0'}} >
                            <Button disabled>XS</Button>
                            <Button selected>S</Button>
                            <Button>M</Button>
                            <Button>L</Button>
                        </FlexRow>
                        <h4>PRICE:</h4>
                        <Price bold  style={{ padding: '24px 0'}}>{
                        MoneyTypeSymbol[Currency]+product.prices.find((e)=>Currency===e.currency ).amount
                        }</Price>
                        <PrimaryButton onClick={()=>{setCart({type:'add', name:product.name, img:product.gallery[0],price:product.prices})}} primary>ADD TO CART</PrimaryButton>
                        <FullDescription dangerouslySetInnerHTML={{ __html: product.description }}></FullDescription>
                    </FlexCol>
                </FlexRow>
            </>
        );
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
`

const FullDescription=styled.p`
  padding-top:40px;
        font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 159.96%;
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