import MainPage from './pages/main';
import DescriptionPage from './pages/description'
import CartPage from './pages/CartPage';
import { Container } from './styled-components-folder/Container';
import Header from './components/header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useState , useContext} from 'react';
import styled from 'styled-components'
import {useOpendState, useOpendDispatch} from './services/context/WhatWindowIsOpen.js'

function App() {
    const isGrey = useOpendState();
    const [Category, setCategory]=useState('')
    return (
        <Router>
            <Container>
                <Header category={{Category, setCategory}}/>

                <Grey disabled={isGrey}/>
                    <Switch>

                        <Route path="/cart">
                            <CartPage />
                        </Route>
                        <Route path="/description/:itemID">
                            <DescriptionPage  />
                        </Route>

                        <Route path="/">
                            <MainPage category={{Category, setCategory}}/>
                        </Route>
                    </Switch>
                
            </Container>
        </Router>
    );
}

const Grey = styled.div`
    display:${(props)=>!props.disabled?'none':'block'};
    background-color: black;
    opacity:80%;
    z-index:5;
    position: absolute;
    top: 80px;
    right: calc(600px - 50vw + 10px);
    bottom: 0;

    width: 100vw; /* or whatever */
    height:100%;
    content:'';
     @media (max-width: 1200px) {
        right:0;
        width:100%;
    }
`

export default App;
