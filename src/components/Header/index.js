import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const hStyle = {
    textShadow: "1px 1px 1px #000000",
    fontSize: "4vw",
    paddingTop: "60px",
    color: "white",
};

function Header() {
    return (
        <div style={ hStyle }>
            <Navbar style={{ backgroundColor: "#9867C5" }}collapseOnSelect fixed="top" expand="lg" variant="dark">
                <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link style={{ color: "white" }} href="/">About</Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default withRouter(Header);