import styled from 'styled-components'
import {Price} from '../styled-components-folder/Price'
import { ReactComponent as Cart } from '../assets/svg/cart.svg'
import {COLORS } from '../assets/Constants'
import { Link } from 'react-router-dom'
import { MoneyTypeSymbol } from '../assets/Constants'
import { useCurrencyState } from '../services/context/Currency'
import { useCartDispatch } from '../services/context/Cart'

const MiddleItem = ({ImgURL, Name, InpPrice,isStock}) => {
    const Currency=useCurrencyState()
    const setCart=useCartDispatch()

  if(!isStock)
  return(
    <ContainerNone>
      <Grey/>
            <Image src={ImgURL} alt="kek" />
            <Stock>OUT OF STOCK</Stock>
            <NameOfItem>{Name}</NameOfItem>
            <Price>{
            MoneyTypeSymbol[Currency]+InpPrice.find((e)=>
                Currency===e.currency ).amount}</Price>
        </ContainerNone>
  )
    return (
        <Container>
          <Link to={'description/'+Name}>
            <Image src={ImgURL} alt="kek" />
            <NameOfItem>{Name}</NameOfItem>
            <Price>{MoneyTypeSymbol[Currency]+InpPrice.find((e)=>
                Currency===e.currency ).amount
            }</Price>
            </Link>

            <CartCircle onClick={()=>{
              setCart({type:'add', name:Name, img:ImgURL,price:InpPrice})
              }}>
              <Cart/>
            </CartCircle>
        </Container>
    );
}

const Container = styled.div`
  text-align: left;
   padding:16px; 
  display:flex;
  flex-direction:column;
  width:fit-content;
  position:relative;
  /* transition:box-shadow 0.3s ease-in; */

  :hover{
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    /* box-shadow: 3px 5px 13px 3px rgb(168, 172, 176, 89%);My feature */
  }
`

const ContainerNone = styled.div`
  text-align: left;
   padding:16px; 
  display:flex;
  flex-direction:column;
  width:fit-content;
  position:relative;
  filter:opacity(100%);
`

const Stock = styled.p`
  position:absolute;
  margin-left: auto;
  margin-right: auto;
  width:100%;
  text-align:center;
  padding-top:160px;
  color: #8D8F9A;
`

const Image = styled.img`
  height:330px;
  width:330px;
  object-fit: cover;
  z-index:0;
`

const NameOfItem = styled.p`
    font-family: 'Raleway';
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
    padding:15px 0 5px 0;
`

const CartCircle = styled.div`
  position:absolute;
  background-color:${COLORS.primary};
  border-radius:50%;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
  cursor:pointer;
  top:320px;
  right:31px;
  padding:16px 16px 12px 14px;

  svg{
    filter: brightness(100);
  }
`

const Grey = styled.div`
    background-color: #8D8F9A;
    opacity:10%;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:1;
    content:'';
`

export default MiddleItem;