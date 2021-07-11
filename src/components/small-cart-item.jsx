import styled, { css } from 'styled-components'
import { Price } from '../styled-components-folder/Price';
import Plus from './small/plus'
import Minus from './small/minus'
import { COLORS } from '../assets/Constants';
import { MoneyTypeSymbol } from '../assets/Constants';
import { Component } from 'react'
import { MainContext } from '../services/context'
import { teakeID } from '../services/CreateID';

class SmallItem extends Component {
    static contextType = MainContext

    render() {
        const Cart = this.context.Cart
        const setCart = this.context.setCart
        const Currency = this.context.Currency

        return (
            <FlexRow>

                <FlexColTwo>
                    <p>{this.props.item.name}</p>

                    <Price>{MoneyTypeSymbol[Currency] + Cart[teakeID(this.props.item)].price.find((e) =>
                        Currency === e.currency).amount}</Price>

                    <FlexRowTwo>
                        
                        {
                            Object.keys(this.props.item.attributes).map(
                                (key) => {
                                    let atr = this.props.item.attributes[key]
                                    if (atr.type === 'text')
                                        return (<SizeButton >
                                            {atr.displayValue}
                                        </SizeButton>)
                                    if (atr.type === 'swatch')
                                        return (<SizeButton style={{ borderColor: atr.value }}>
                                            {atr.displayValue}
                                        </SizeButton>)
                                }
                            )
                        }

                    </FlexRowTwo>
                </FlexColTwo>
                <FlexCol>
                    <Plus onClick={() => setCart({ id: teakeID(this.props.item), type: 'add' })} />
                    <i>{this.props.item.amount}</i>
                    <Minus onClick={() => setCart({ id: teakeID(this.props.item), type: 'delete' })} />
                </FlexCol>

                <Image src={this.props.item.img} alt="kek" />
            </FlexRow>
        );
    }
}

const FlexRow = styled.div`
    display:flex;
    padding-bottom:14px;
`

const FlexRowTwo = styled(FlexRow)`
    padding:0;
`

const FlexCol = styled.div`
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

const FlexColTwo = styled(FlexCol)`
    width:180px;
    padding-right:18px;

`

const SizeButton = styled.a`
    border:1px solid ${COLORS.text};
    min-width:24px;
    height:24px;
    display:grid;
    place-content: center center;
    font-size: 14px;
    margin-right:8px;
    padding: 0 10px;
    ${
    (props) => props.disabled && css`
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
