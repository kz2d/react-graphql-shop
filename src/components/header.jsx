import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo } from '../styled-components-folder/logo';
import { Container } from '../styled-components-folder/Container';
import { COLORS } from '../assets/Constants'
import { ReactComponent as BottomArrow } from '../assets/svg/bottom-arrow.svg'
import { ReactComponent as Cart } from '../assets/svg/cart.svg'
import SmallItem from './small-cart-item';
import { PrimaryButton } from '../styled-components-folder/PrimaryButton';
import { useQuery } from '@apollo/client';
import { GET_ALL_CURRENCY } from '../services/graphql/header';

const Header = () => {
    const [CartShow, setCartShow] = useState(false);
    const [CurencyShow, setCurencyShow] = useState(false);
    const {data, loading, error, refetch} = useQuery(GET_ALL_CURRENCY)
    
    return ( 
        <>  
                 <Grey onClick={e=>setCartShow(false)} style={{opacity:CartShow?'80%':'0', display:CartShow?'':'none'}}/>

        <ContainerHead>
            <Left>
                <LeftItem selected>
                    <span>Women</span>

                </LeftItem>
                <LeftItem>
                    <span>Women</span>

                </LeftItem>
                <LeftItem>
                    <span>Women</span>

                </LeftItem>


            </Left>
            <LogoWraper>
                <Logo />
            </LogoWraper>
            <Right>
                <DolarSign onClick={()=>setCurencyShow(!CurencyShow)}>
                    <span>$</span>
                    <BottomArrow style={{transform:CurencyShow&&'rotate3d(1, 0, 0, 180deg)'}}/>
                    <ul style={{opacity:CurencyShow?'100%':'0', display:CurencyShow?'':'none'}}>
                        {/* <li>$ USD</li>
                        <li>€ EUR</li>
                        <li>¥ JPY</li> */}
                        {loading?<li></li>:data.currencies.map((cur)=><li>{cur}</li>)}
                    </ul>
                </DolarSign>
                <CartSign >
                    
                    <CartWraper onClick={()=>setCartShow(!CartShow)}>
                    <Cart />
                    <Number>2</Number>
                    </CartWraper>
                    <SmallCart 
                     style={{opacity:CartShow?'100%':'0', display:CartShow?'':'none'}}>
                        My Bag, 2 items
                        <SmallItem
                            ImgURL='test.png'
                            InpPrice='$50.00'
                            Name="Jupiter Wayfarer"
                            numberOf='2'
                        />
                        <TotalPrice>
                            <p>Total</p>
                            <span>$100.00</span>
                        </TotalPrice>
                        <ButtonBar>
                            <PrimaryButton><span>View bag</span></PrimaryButton>
                            <PrimaryButton primary><span>View bag</span></PrimaryButton>
                        </ButtonBar>
                    </SmallCart>
                </CartSign>
            </Right>
        </ContainerHead>
        </>
    );
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
        padding:20px;
        position:absolute;
        height:170px;
        top:40px;
        right:0;
        width:90px;
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
    transition:opacity 0.5s ease-out;
`
const Grey = styled.div`
    background-color: black;
    opacity:80%;
    position:absolute;
    top:80px;
    left:0;
    right:0;
    height:calc(100vh - 80px);
    z-index:5;
    content:'';
    width: 100%; margin: 0; padding: 0;
    transition: opacity 1s ease-out;
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
display:flex;
align-items:center;
justify-content:center;
   position:absolute;
    right:0;
    left:0;
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

export default Header;