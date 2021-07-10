import React, { Component } from 'react';
import MiddleItem from '../components/middle-size-item';
import styled from 'styled-components';
import {GET_ALL_ITEMS_BY_TYPE} from '../services/graphql/main'
import Query from '../services/graphql/component'
import {MainContext} from '../services/context'

class MainPage extends Component {
    static contextType=MainContext;

    
render(){
    return (
        <>
        <Text>Category name</Text>
        <Query Querry={GET_ALL_ITEMS_BY_TYPE} 
        varr={{variables:{title:this.context.Category}}}>{
            (data,loading)=>loading?
            <p>loading...</p>:
            <Grid>{console.log(data)}{
            data.category.products.map((value) => {
                return <MiddleItem ImgURL={value.gallery[0]}
                    Name={value.name}
                    InpPrice={value.prices}
                    isStock={value.inStock}
                     key={value.name}/>
            })}
            </Grid>
            }
            
        </Query>
        </>
    );}
}
export default MainPage;

const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));;
    grid-row-gap:100px;
    justify-content: space-between;
`

const Text = styled.div`
    font-family: Raleway;
font-style: normal;
font-weight: normal;
font-size: 42px;
line-height: 160%;
padding:80px 0 100px 0;
`
