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
import { useState } from 'react';

function App() {
  const [cart,setcart]=useState({});
  const [Currency,setCurrency]=useState('USD');
console.log(cart)
  return (
    <Router>
    <Container>
      <Header Currency={{Currency,setCurrency}} 
      cart={{cart , setcart}} />
    
    
    <Switch>
          
          <Route path="/cart">
          <CartPage
          CurrencyNum={Currency} 
          cart={{cart , setcart}}/>
          </Route>
          <Route path="/description/:itemID">
            <DescriptionPage  CurrencyNum={Currency} 
            cart={{cart , setcart}}/>
          </Route>

          <Route path="/">
            <MainPage CurrencyNum={Currency} 
            cart={{cart , setcart}}/>
          </Route>
        </Switch>

        </Container>
    </Router>
  );
}

export default App;
