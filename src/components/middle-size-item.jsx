import styled from 'styled-components'
import {Price} from '../styled-components-folder/Price'
import { ReactComponent as Cart } from '../assets/svg/cart.svg'
import {COLORS } from '../assets/Constants'

const MiddleItem = ({ImgURL, Name, InpPrice}) => {
    return (
        <Container>
            <Image src={ImgURL} alt="kek" />
            <CartCurcle>
              <Cart/>
            </CartCurcle>
            <NameOfItem>{Name}</NameOfItem>
            <Price>{InpPrice}</Price>
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

const Image = styled.img`
  height:330px;
  width:330px;
  object-fit: cover;
`

const NameOfItem = styled.p`
    font-family: 'Raleway';
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
    padding:15px 0 5px 0;
`

const CartCurcle = styled.div`
  position:absolute;
  background-color:${COLORS.primary};
  border-radius:50%;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));

  top:320px;
  right:31px;
  padding:16px 16px 12px 14px;

  svg{
    filter: brightness(100);
  }
`

export default MiddleItem;