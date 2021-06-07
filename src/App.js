import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Data from './data.js';
import Product from './component/Product/Product';
import Detail from './component/Detail/Detail';
import Cart from './component/Cart/Cart';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup'

import './App.scss';

export let lestContext = React.createContext();

function App() {

  let [shoes, setShoes] = useState(Data);
  let [lest, setLest] = useState([10, 11, 12, 15, 2, 4, 6])

  return (
    <div className="App">

      <Navbar bg="light" expand="lg" id="navContainer">
        <Navbar.Brand className="brand"><Link to="/" className="Link">Shoe Shop 👟</Link></Navbar.Brand>
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
              We hope you to enjoy here</p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <div className="container">

            <lestContext.Provider value={lest}>
              <div className="row">  
                {
                  shoes.map((a, i) => {
                    return (
                      <Product shoes={shoes[i]} i={i} key={i} />
                    )
                  })
                }
              </div>
            </lestContext.Provider>

            <button className="btn btn-primary" onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  console.log(result.data)
                  setShoes([...shoes, ...result.data])
                })
                .catch(() => {
                  console.log('failure')
                })

            }}>더보기</button>
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
    </div >
  );
}

export default App;
