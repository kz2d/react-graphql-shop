import {gql} from '@apollo/client'

export const GET_ALL_CURRENCY = gql`
    query {
        currencies
    }    
`

export const GET_ALL_ITEMS_BY_TYPE = gql`
    query category($title: String!){
        category(input:{
    title:$title
  }) {
    products {
      name
      inStock
      gallery
      description
      category
      attributes{
        id
        name
        type
        items{
          displayValue
          value
          id
        }
      }
      prices{
        currency
        amount
      }
    }
        }
    }    
`