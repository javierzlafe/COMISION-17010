import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

export const NavBar = () => {
    return (
        <Navbar className="">
        <Navbar.Brand href="#home">Panaderia la eficaz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">inicio</Nav.Link>
            <Nav.Link href="#link">productos</Nav.Link>
            <NavDropdown title="empresa" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">contacto</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">envios</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">nosotros</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
</Navbar>
    )
}
