import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import './App.css'
import { DISHES } from "./shared/dishes";

function App() {
  const dishes = DISHES;
  return (
    <div className='grid wide'>
      <Navbar dark color='primary'>
        <div className="container">
          <NavbarBrand href='/' className="text">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes}/>
    </div>
  );
}

export default App;
