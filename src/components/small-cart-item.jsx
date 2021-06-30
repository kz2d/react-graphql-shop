import styled, { css } from 'styled-components'
import { Price } from '../styled-components-folder/Price';
import test from '../assets/test.png'
import Plus from './small/plus'
import Minus from './small/minus'
import { COLORS } from '../assets/Constants';
import { MoneyTypeSymbol } from '../assets/Constants';

const SmallItem = ({ ImgURL, Name, InpPrice, numberOf, cart,CurrencyNum }) => {
    

    function AddDelete(num){
        let obj=cart.cart
        obj[Name].amount+=num;
        if (obj[Name].amount<=0){
            delete obj[Name]
        }
        cart.setcart({...obj})
        console.log(cart.cart)
    }

    return (
        <FlexRow>

            <FlexColTwo>
                <p>{Name}</p>
                <Price>{InpPrice}</Price>
                <FlexRowTwo>
                    <SizeButton>S</SizeButton>
                    <SizeButton disabled>M</SizeButton>
                </FlexRowTwo>
            </FlexColTwo>
            <FlexCol>
                <Plus onClick={()=>AddDelete(+1)}/>
                <i>{numberOf}</i>
                <Minus onClick={()=>AddDelete(-1)}/>
                </FlexCol>

            <Image src={ImgURL} alt="kek" />
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
