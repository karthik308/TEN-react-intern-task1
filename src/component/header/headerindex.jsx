import React from "react";
import { Navbar } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './headerindex.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ContactsIcon from '@material-ui/icons/Contacts';
import SearchBar from "./searchbar";


function Header() {
    return (
        <div>
            <div className="navbar-container">
                <Navbar collapseOnSelect expand="lg" bg="" variant="">
                    <Container>
                        <div className='header-logo'>
                            <p>The</p>
                            <p>Entrepreneurship </p>
                            <p>Network</p>
                        </div>

                        {/* <Navbar.Brand className="me-auto" >Ten</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className='navbar-menu' id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#start" >Home</Nav.Link>
                                <Nav.Link href="https://www.entrepreneurshipnetwork.net/courses" >OnlineCourses</Nav.Link>
                                <Nav.Link href="https://www.entrepreneurshipnetwork.net/hiring">We'rHiring</Nav.Link>
                                <NavDropdown title="More" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="https://www.entrepreneurshipnetwork.net/blog">Blog</NavDropdown.Item>
                                    <NavDropdown.Divider /> <NavDropdown.Item href="https://www.entrepreneurshipnetwork.net/certification">Certification</NavDropdown.Item>
                                    <NavDropdown.Divider /> <NavDropdown.Item href="https://www.entrepreneurshipnetwork.net/forum">Forum</NavDropdown.Item>
                                    <NavDropdown.Divider /> <NavDropdown.Item href="https://www.entrepreneurshipnetwork.net/mentorship">Mentorship</NavDropdown.Item>
                                    <NavDropdown.Divider /> <NavDropdown.Item href="https://www.entrepreneurshipnetwork.net/alumni-team">Alumni Team</NavDropdown.Item>
                                    <NavDropdown.Divider /> <NavDropdown.Item href="https://www.entrepreneurshipnetwork.net/hackathon">Hackathon</NavDropdown.Item>
                                    <NavDropdown.Divider /> <NavDropdown.Item href="https://www.entrepreneurshipnetwork.net/social-media">SocialMedia</NavDropdown.Item>
                                    <NavDropdown.Divider /> <NavDropdown.Item href="https://www.entrepreneurshipnetwork.net/testimonials">Testimonial</NavDropdown.Item>

                                </NavDropdown>
                            </Nav>




                        </Navbar.Collapse>
                        <div className='navbar-btn-div'>
                            <button className='header-btn' onClick={() => {
                                window?.location?.assign('https://www.entrepreneurshipnetwork.net/cart-page')
                            }}> <ShoppingBasketIcon />cart</button>
                            <button className='header-btn' onClick={() => {
                                window?.location?.assign('https://www.entrepreneurshipnetwork.net/contact')
                            }}> <ContactsIcon />Contact</button>
                          <SearchBar/>
                        </div>

                        <img className='logo-img' src="https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_90,h_72,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp" alt="" />
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}
export default Header;