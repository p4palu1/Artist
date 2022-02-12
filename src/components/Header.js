import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'; 
import { Route } from "react-router-dom"
import "../css/Header.css"



const Header = ({history}) => {
    return (
        <header>
            <Navbar bg="dark"  variant="dark" expand="lg" collapseOnSelect>
                
                    <Container>
                        <Navbar.Brand  href="/"><span className="h2 text-white">Yosef rolls, painter</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="ms-auto" id="basic-navbar-nav">
                        <Nav className="ms-auto">
                                <>
                                    <Nav.Link href="/bio">
                                        <i className=""></i> 
                                        <span>ביוגרפיה</span>
                                    </Nav.Link>
                                    <Nav.Link href="/gallery/oil">
                                        <i className=""></i> 
                                        <span>ציורי נוף-שמן</span>
                                    </Nav.Link>
                                    <Nav.Link href="/gallery/bw">
                                        <i className=""></i> 
                                        <span>ציורי נוף-רישומים</span>
                                    </Nav.Link>
                                    <Nav.Link href="/gallery/body">
                                        <i className=""></i> 
                                        <span>ציורי גוף</span>
                                    </Nav.Link>
                                    <Nav.Link href="/talks">
                                        <i className=""></i> 
                                        <span>שיחות עם יוסף רולס</span>
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
