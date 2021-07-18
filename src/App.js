import MainPage from "./pages/main";
import DescriptionPage from "./pages/description";
import CartPage from "./pages/cart-page";
import { Container } from "./styled-components-folder/container";
import Header from "./components/header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { Component } from "react";
import styled from "styled-components";
import { MainContext } from "./services/context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Category: "",
      setCategory: this.setCategory,
      Cart: {},
      setCart: this.setCart,
      Currency: "USD",
      setCurrency: this.setCurrency,
      WhatToShow: "",
      setWhatToShow: this.setWhatToShow,
    };
  }

  setCategory = (action) => {
    this.setState({
      Category: action,
    });
  };

  setCart = (action) => {
    this.setState({ Cart: reducer(this.state.Cart, action) });

    function reducer(state, action) {
      action.num = action.num ? action.num : 1;

      switch (action.type) {
        case "add": {
          const obj = state;

          if (typeof obj[action.id] != "undefined") {
            obj[action.id].amount += action.num;
            return { ...obj };
          }

          obj[action.id] = {
            amount: action.num,
            name: action.name,
            price: action.price,
            gallery: action.gallery,
            attributes: JSON.parse(JSON.stringify(action.attributes)),
          };
          return { ...obj };
        }
        case "delete": {
          const obj = state;
          if (typeof obj[action.id] != "undefined") {
            obj[action.id].amount -= action.num;
            if (obj[action.id].amount <= 0) {
              delete obj[action.id];
            }
            return { ...obj };
          }

          return obj;
        }
        default:
          throw Error("Cart dont have this atribute" + action);
      }
    }
  };

  setCurrency = (action) => {
    this.setState({
      Currency: action,
    });
  };

  setWhatToShow = (action) => {
    this.setState({
      WhatToShow: action,
    });
  };

  render() {
    return (
      <MainContext.Provider value={this.state}>
        <Router>
          <Container>
            <Header />

            <Grey used={this.state.WhatToShow} onClick={()=>this.state.setWhatToShow('')}/>
            <Switch>
              <Route path="/cart">{withRouter(CartPage)}</Route>
              <Route path="/description/:itemID">
                {withRouter(DescriptionPage)}
              </Route>

              <Route path="/">{withRouter(MainPage)}</Route>
            </Switch>
          </Container>
        </Router>
      </MainContext.Provider>
    );
  }
}

const Grey = styled.div`
  display: ${(props) => (!props.used ? "none" : "block")};
  background-color: black;
  opacity: ${(props) => (props.used==="Currency" ? "0" : "80%")};
  z-index: 5;
  position: absolute;
  top: 80px;
  right: calc(600px - 50vw + 10px);
  bottom: 0;

  min-height: calc(100vh - 80px);
  width: 100vw;
  height: 100%;
  content: "";
  @media (max-width: 1200px) {
    right: 0;
    width: 100%;
  }
`;

export default App;
