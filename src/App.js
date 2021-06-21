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

function App() {
  return (
    <Router>
    <Container>
      <Header/>
    
    
    <Switch>
          
          <Route path="/cart">
          <CartPage/>
          </Route>
          <Route path="/description/:itemID">
            <DescriptionPage />
          </Route>

          <Route path="/">
            <MainPage />
          </Route>
        </Switch>

        </Container>
    </Router>
  );
}

export default App;
