import React, { Component} from 'react';
import styled from 'styled-components';
import { Logo } from '../styled-components-folder/logo';
import { Container } from '../styled-components-folder/Container';
import { COLORS, MoneyTypeSymbol } from '../assets/Constants'
import { ReactComponent as BottomArrow } from '../assets/svg/bottom-arrow.svg'
import { ReactComponent as CartSVG } from '../assets/svg/cart.svg'
import SmallItem from './small-cart-item';
import { PrimaryButton } from '../styled-components-folder/PrimaryButton';
import { GET_ALL_CURRENCY } from '../services/graphql/header';
import {MainContext} from '../services/context'
import Query from '../services/graphql/component'
import {withRouter} from 'react-router-dom'

class Header extends Component {
    static contextType=MainContext;
    

    Link(href){
        console.log(this.props)
          this.context.setOpend('')
          this.props.history.push(href)
    }
    
    render(){
        console.log(this.context)
        let sum=0;
        const WhatToShow = this.context.Opend
        const setWhatToShow = this.context.setOpend
        const Currency = this.context.Currency
        const setCurrency = this.context.setCurrency
        const Cart=this.context.Cart
        const Category=this.context.Category
        const setCategory=this.context.setCategory

    return ( 
        <Query Querry={GET_ALL_CURRENCY}>{(data,loading)=>
        <ContainerHead>
            <Left>
                <LeftItem onClick={()=>{setCategory('')}} selected={Category===''}>
                    <span>ALL</span>

                </LeftItem>
                <LeftItem onClick={()=>{setCategory('clothes')}} selected={Category==='clothes'}>
                    <span>Clothes</span>

                </LeftItem>
                <LeftItem onClick={()=>{setCategory('tech')}} selected={Category==='tech'}>
                    <span>Tech</span>

                </LeftItem>


            </Left>
            <LogoWraper>
                
                <Logo onClick={()=>{this.Link('/')}} />
            </LogoWraper>
            <Right>
                <DolarSign onClick={()=>setWhatToShow(WhatToShow==='Currency'?'':'Currency')}>
                    <span>$</span>
                    <BottomArrow style={{transform:WhatToShow==='Currency'&&'rotate3d(1, 0, 0, 180deg)'}}/>
                    <ul style={{opacity:WhatToShow==='Currency'?'100%':'0', display:WhatToShow==='Currency'?'':'none'}}>
                        {/* <li>$ USD</li>
                        <li>€ EUR</li>
                        <li>¥ JPY</li> */}
                        {loading?<li></li>:data.currencies.map((cur)=>
                        <li key={cur} onClick={()=>setCurrency(cur)}>
                            {MoneyTypeSymbol[cur]+' '+ cur}
                            </li>)}
                    </ul>
                </DolarSign>
                <CartSign >
                    
                    <CartWraper onClick={()=>setWhatToShow(WhatToShow==='Cart'?'':'Cart')}>
                    <CartSVG />
                    <Number>{Object.keys(Cart).length}</Number>
                    </CartWraper>
                    <SmallCart 
                     style={{opacity:WhatToShow==='Cart'?'100%':'0', display:WhatToShow==='Cart'?'':'none'}}>
                        <h2>My Bag</h2>, 2 items
                        {Object.keys(Cart).map((el)=>{
                            let specialPrice=Cart[el].price.find((e)=>
                            Currency===e.currency ).amount;
                            sum+=Cart[el].amount*specialPrice

                            return <SmallItem item={Cart[el]}
                            key={el}/>
                        })}
                        
                        <TotalPrice>
                            <p>Total</p>
                            <span>{MoneyTypeSymbol[Currency]+Math.round(sum*100)/100}</span>
                        </TotalPrice>
                        
                        <ButtonBar>
                            <PrimaryButton onClick={()=>this.Link('/cart')}><span>View bag</span></PrimaryButton>
                            <PrimaryButton onClick={()=>this.Link('/cart')} primary><span>View bag</span></PrimaryButton>
                            
                        </ButtonBar>
                        
                    </SmallCart>
                </CartSign>
            </Right>
        </ContainerHead>
    }
        </Query>
    );}
}

const ContainerHead = styled(Container)`
height: 80px;
display:flex;
align-items:center;
justify-content:space-between
`

const Left = styled.div`
display:flex;
height:100%;
`

const LeftItem = styled.div`
    height:100%;
    width:97px;
    display:grid;
    align-items: center;     
    justify-items: center;
    border-bottom: ${props => props.selected ? '2px' : 0} solid ${COLORS.primary};
    span{
        color:${props => props.selected ? COLORS.primary : COLORS.text};
        font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 120%;
    }
`



const Right = styled.div`
display:flex;
width:120px;
justify-content:space-between;
`

const DolarSign = styled.div`
display:flex;
align-items:center;
position:relative;
svg{
    transition: all 0.4s ease-out;
    
}
    span{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
        padding:0 12px;
    }
    ul{
        transition: opacity 0.7s ease-out;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        /* align-items:center; */
        z-index:100;
        padding:20px;
        position:absolute;
        height:170px;
        top:40px;
        right:0;
        width:130px;
        list-style:none;
        background-color:${COLORS.background};

        font-weight: 500;
        font-size: 18px;

        filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
    }
`

const CartSign = styled.div`
    display:flex;
    align-items:center;
        span{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 160%;
            padding:0 12px;
        }
    position:relative;
`
const SmallCart = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    top:40px;
    background-color:${COLORS.background};
    padding:10px;
    right:0;
    z-index:10;
    min-width:329px;
    transition:opacity 0.5s ease-out;

    h2{
        display:contents;
    }
`


const TotalPrice = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 52px 0 35px 0;
    p{
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
    }
    span{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 160%;
    }
    
`


const LogoWraper = styled.div`
// display:flex;
// align-items:center;
// justify-content:center;
   position:absolute;
   margin:auto;
    right:calc(50% - 20px);
    z-index:2;
`

const ButtonBar = styled.div`
display:flex;
justify-content:space-between;
`

const CartWraper = styled.div`
position:relative;
margin-top:10px;
`

const Number = styled.div`
position:absolute;
background-color:${COLORS.text};
color:${COLORS.background};
padding:3px 6px 2px 6px;
border-radius:50%;
top:-45%;
right:-50%;


font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;
`

export default withRouter( Header);