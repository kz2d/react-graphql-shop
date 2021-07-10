import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Price } from '../styled-components-folder/Price';
import { PrimaryButton } from '../styled-components-folder/PrimaryButton'
import { COLORS, MoneyTypeSymbol } from '../assets/Constants'
import { GET_ALL_ITEMS_BY_TYPE } from '../services/graphql/description'
import Query from '../services/graphql/component';
import { MainContext } from '../services/context'
import { teakeID } from '../services/CreateID';


class DescriptionPage extends Component {
    static contextType = MainContext

    constructor(props) {
        super(props)
        this.state = {
            product: {},
            attributes: {}
        }
    }

    render() {
        console.log(this.props)
        const { itemID } = this.props.match.params
        const Currency = this.context.Currency
        const setCart = this.context.setCart
        return (
            <Query Querry={GET_ALL_ITEMS_BY_TYPE} varr={{
                variables: { title: "" },
            }}
            >{
                    (data, loading) => {
                        if (loading)
                            return <p>loading...</p>

                        let product = data.category.products.find((el) => el.name === itemID)

                        if (!product)
                            return <p>loading...</p>

                        return (
                            <>
                                <FlexRow style={{ padding: '80px 0 0 0' }}>
                                    <FlexCol>
                                        {product.gallery.slice(1, product.gallery.length - 1).map((el) => {
                                            return <SmallImg src={el} key={el} />
                                        })}

                                    </FlexCol>
                                    <BigImg src={product.gallery[0]} />
                                    <FlexCol style={{ width: '300px' }} >
                                        <h3>{product.name}</h3>
                                        <h5>{product.category}</h5>

                                        {product.attributes.map((atr) => {
                                            let obj = this.state.attributes
                                            if (!obj[atr.name]) {
                                                obj[atr.name] = {
                                                    name: atr.name,
                                                    type: atr.type,
                                                    value: atr.items[0].value,
                                                    displayValue:atr.items[0].displayValue
                                                }
                                                this.setState({ attributes: { ...obj } })
                                                console.log(this.state)
                                            }
                                            return (<>
                                                <h4>{atr.name}:</h4>
                                                <FlexRow style={{ padding: '8px 0 40px 0' }} >

                                                    {
                                                        atr.type === 'text' && atr.items.map((val) =>
                                                            <Button onClick={() => {
                                                                let obj = this.state.attributes
                                                                obj[atr.name].value = val.value
                                                                this.setState({ attributes: { ...obj } })
                                                            }}
                                                                selected={this.state.attributes[atr.name].value === val.value}
                                                            >
                                                                {val.displayValue}
                                                            </Button>
                                                        )
                                                    }
                                                    {
                                                        atr.type === 'swatch' && atr.items.map((val) =>
                                                            <Button onClick={() => {
                                                                let obj = this.state.attributes
                                                                obj[atr.name].value = val.value
                                                                obj[atr.name].displayValue = val.displayValue
                                                                this.setState({ attributes: { ...obj } })
                                                            }} style={{borderColor:val.value}}
                                                                selected={this.state.attributes[atr.name].value === val.value}
                                                            >
                                                                {val.displayValue}
                                                            </Button>
                                                        )
                                                    }

                                                    
                                                </FlexRow>
                                            </>)
                                        }
                                        )
                                        }
                                        <h4>PRICE:</h4>
                                        <Price bold style={{ padding: '24px 0' }}>{
                                            MoneyTypeSymbol[Currency] + product.prices.find((e) => Currency === e.currency).amount
                                        }</Price>
                                        <PrimaryButton onClick={() => {
                                            setCart({
                                                type: 'add',
                                                id:teakeID({name:product.name, attributes:this.state.attributes}),
                                                name: product.name,
                                                img: product.gallery[0],
                                                price: product.prices,
                                                attributes:this.state.attributes
                                            })
                                        }} primary>ADD TO CART</PrimaryButton>
                                        <FullDescription dangerouslySetInnerHTML={{ __html: product.description }}></FullDescription>
                                    </FlexCol>
                                </FlexRow>
                            </>
                        )
                    }}
            </Query>
        )
    }

}

const FlexRow = styled.div`
    display:flex;
`



const FlexCol = styled.div`
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

const FullDescription = styled.p`
  padding-top:40px;
        font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 159.96%;
`

const SmallImg = styled.img`
  height:85px;
  width:85px;
  object-fit: cover;
  margin-bottom:32px;
`

const BigImg = styled.img`
  height:515px;
  width:515px;
  object-fit: cover;
  margin:0 90px 0 40px;
`

const Button = styled.span`
    border:1px solid ${COLORS.text};
    width:63px;
    height:45px;
    display:grid;
    place-content: center center;
    font-size: 14px;
    margin-right:8px;
    ${
    (props) => props.disabled && css`
            filter:opacity(50%);
        `
    }
    ${
    (props) => props.selected && css`
            background-color:${COLORS.text};
            color:${COLORS.background};
        `
    }
`

export default DescriptionPage;