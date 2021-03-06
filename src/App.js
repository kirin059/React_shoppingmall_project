import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import Data from './data.js';
import Product from './Components/Product/Product';
import Detail from './Components/Detail/Detail';
import Cart from './Components/Carts/Cart';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import LastProduct from './Components/LastProduct/LastProduct.js';

import './App.scss';


export const lestContext = React.createContext();

function App() {

  const [shoes, setShoes] = useState(Data);
  const [lest, setLest] = useState([10, 11, 12, 15, 2, 4, 6])

  return (
    <div className="App">

      <Navbar bg="light" expand="lg" id="navContainer">
        <Navbar.Brand className="brand"><Link to="/" className="Link">Shoes Shop 👟</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail/0">Detail</Nav.Link>
            <Nav.Link as={Link} to="/Cart">Cart</Nav.Link>
            <NavDropdown title="My Page" id="basic-nav-dropdown">
              <NavDropdown.Item> <Link to="/login" className="Link">Log In </Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/signup" className="Link"> Sign up </Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>  
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% Season OFF</h1>
            <p>
              This site offer a biggest sale product in the Korea.
              We hope you to enjoy here! <br />
            You can choose what you like && take it with free delivery.</p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <div className="container">
            <lestContext.Provider value={lest}>
              <div className="row">  
                <Product />      
              </div>
            </lestContext.Provider>
          </div>
        </Route>
        <Route path="/detail/:id">
          <lestContext.Provider value={lest}>
            <Detail shoes={shoes} lest={lest} setLest={setLest} />
          </lestContext.Provider>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/:id"> 
          <div></div>
        </Route>
      </Switch>
      <LastProduct />
    </div >
  );
}

export default App;
