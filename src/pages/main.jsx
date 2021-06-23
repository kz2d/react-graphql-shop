import React, { Component } from 'react';
import MiddleItem from '../components/middle-size-item';
import test from '../assets/test.png'
import styled from 'styled-components';
import { Container } from '../styled-components-folder/Container'
import Header from '../components/header';

class MainPage extends Component {

    render(){
        return (
            <>
                
                <Text>Category name</Text>
                    <Grid>

                        {[1, 2, 3, 4, 5, 6].map((value, index) => {
                            return <MiddleItem ImgURL={test}
                                Name="Apollo Running Short"
                                InpPrice="$50.00" />
                        })}
                    </Grid>
            </>
        );
                    };
}

const Grid = styled.div`
    display:grid;
    grid-template-columns: auto auto auto;
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

export default MainPage;