import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">UNISTAY</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="RegistrationForm">List Accommodation</Nav.Link>
          <Nav.Link href="/Main2">Apartments</Nav.Link>
          <Nav.Link href="/SearchForm">Search Accomodation</Nav.Link>
          <Nav.Link href="/Map">TryOnMap</Nav.Link>
         </Nav>
        
   
        <form className="form-inline my-2 my-lg-0">
  <div className="input-group">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <div className="input-group-append">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </div>
  </div>
</form>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
