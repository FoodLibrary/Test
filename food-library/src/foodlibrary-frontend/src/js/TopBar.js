import React, { Component, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from "reactstrap/es/Dropdown";
import { Form, FormControl} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Collapse from "react-bootstrap/Collapse";
import NavbarToggler from "reactstrap/es/NavbarToggler";
import ButtonDropdown from "reactstrap/es/ButtonDropdown";
const imageResources = require('../util/ImageResources.js');

export default class TopBar extends Component {
    render() {

        return (
            <Navbar expand="md">
                <button className={"categoryImgArea"}> <img src={imageResources.categoryImg} className={"categoryImgArea"}/> </button>
                <Navbar.Brand href="#home" className={"title"}> <img src={imageResources.logoImg} id={"logoImg"}/> <span id={"title"}> 음식도서관 </span> </Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" id={"searchArea"} />
                        <Button className={"searchButton"}><img src={imageResources.searchButtonImg} id={"searchButton"}/></Button>
                    </Form>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link> Login </Nav.Link>
                    <Nav.Link> MyPage </Nav.Link>
                </Nav>

            </Navbar>
        );
    }
}
