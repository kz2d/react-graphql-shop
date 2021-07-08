import styled, { css } from 'styled-components'
import { Price } from '../styled-components-folder/Price';
import Plus from './small/plus'
import Minus from './small/minus'
import { COLORS } from '../assets/Constants';
import { MoneyTypeSymbol } from '../assets/Constants';
import { useCartState, useCartDispatch } from '../services/context/Cart';
import { useCurrencyState } from '../services/context/Currency';

const SmallItem = ({ item  }) => {
    const Cart=useCartState()
    const setCart=useCartDispatch()
    const Currency=useCurrencyState()
    

    return (
        <FlexRow>

            <FlexColTwo>
                <p>{item.Name}</p>

                <Price>{MoneyTypeSymbol[Currency]+Cart[item.name].price.find((e)=>
                            Currency===e.currency ).amount}</Price>

                <FlexRowTwo>
                    <SizeButton>S</SizeButton>
                    <SizeButton disabled>M</SizeButton>
                </FlexRowTwo>
            </FlexColTwo>
            <FlexCol>
                <Plus onClick={()=>setCart({name:item.name, type:'add'})}/>
                <i>{item.amount}</i>
                <Minus onClick={()=>setCart({name:item.name, type:'delete'})}/>
                </FlexCol>

            <Image src={item.img} alt="kek" />
        </FlexRow>
    );
}

const FlexRow=styled.div`
    display:flex;
    padding-top:14px;
`

const FlexRowTwo=styled(FlexRow)`
    padding:0;
`

const FlexCol=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
   
    p{
        font-weight: 300;
        line-height: 160%;
    }
    i{
        margin:auto;
        font-family: 'Raleway';
font-style: normal;
font-weight: 500;
line-height: 160%;
    }
`

const FlexColTwo=styled(FlexCol)`
    width:180px;
    padding-right:18px;

`

const SizeButton=styled.a`
    border:1px solid ${COLORS.text};
    width:24px;
    height:24px;
    display:grid;
    place-content: center center;
    font-size: 14px;
    margin-right:8px;
    ${
        (props)=>props.disabled&&css`
            filter:opacity(50%);
        `
    }
`

const Image = styled.img`
  height:137px;
  width:105px;
  object-fit: cover;
  padding-left:10px;
`

export default SmallItem;
