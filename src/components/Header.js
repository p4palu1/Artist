import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'; 
import { Route } from "react-router-dom"
import "../css/Header.css"



const Header = ({history}) => {
    return (
        <header>
            <Navbar bg="dark"  variant="dark" expand="lg" collapseOnSelect>
                
                    <Container>
                        <Navbar.Brand  href="/"><span className="h2 text-white">יוסף רולס</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="ms-auto" id="basic-navbar-nav">
                        <Nav className="ms-auto">
                                <>
                                    <Nav.Link href="/bio">
                                        <i className=""></i> 
                                        <span>קצת עליי</span>
                                    </Nav.Link>
                                    <Nav.Link href="/repertoire">
                                        <i className=""></i> 
                                        <span>עבודות שלי</span>
                                    </Nav.Link>
                                </>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                
            </Navbar>
        </header>
    )
}

export default Header;
