import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl  from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import NavItem from 'react-bootstrap/NavItem';
import Example from './Modal';
// import Login from './login';

class Header extends React.Component {
 
    render() {
       return (
         <section>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Work With Friends</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                  <Nav.Link href="#features">WWFS</Nav.Link>
                  
                     <NavDropdown title="Product" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Nail</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Lip & Cheek</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Face</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Sun</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Cleansing</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.6">Dental</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.7">Body & Hair</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.8">Acc</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.9">Set</NavDropdown.Item>
                        <NavDropdown.Item href="#action/4.0">Hello Kitty</NavDropdown.Item>
                        <NavDropdown.Item href="#action/4.1">XiYangYang</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                     </NavDropdown>
                  
                     <Nav.Link href="#pricing">Event</Nav.Link>
                     <Nav.Link href="#pricing">Story</Nav.Link>
                     <Nav.Link href="#pricing">Media</Nav.Link>
                     <Nav.Link href="#pricing">Review</Nav.Link>
                     <Nav.Link href="#pricing">Notice</Nav.Link>
                     <Nav.Link href="#pricing">Q & A</Nav.Link>
                     <Nav.Link href="#deets">커미니티</Nav.Link>
                     <Nav.Link eventKey={2} href="#memes"></Nav.Link>
                     <Example/>
                  </Nav>
                 
                  {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                  
                  {/* <Form inline>
                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                     <Button variant="outline-primary">Search</Button>
                  </Form> */}
                     <Nav.Link href="#pricing">
                        <span className="fa-stack fa-1x">
                           <i className="fas fa-square fa-stack-2x  fa-spin"></i>
                           <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                     </Nav.Link>
                        
                     
                     <span className="fa-stack fa-1x">
                        <i className="fas fa-square fa-stack-2x"></i>
                        <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
                     </span>
                     <span className="fa-stack fa-1x">
                        <i className="fas fa-square fa-stack-2x"></i>
                        <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
                     </span>
                     <span className="fa-stack fa-1x">
                        <i className="fas fa-square fa-stack-2x"></i>
                        <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                     </span>
                     <span className="fa-stack fa-1x">
                        <i className="fas fa-square fa-stack-2x"></i>
                        <i className="fab fa-weixin fa-stack-1x fa-inverse"></i>
                     </span>
                     <span className="fa-stack fa-1x">
                        <i className="fas fa-square fa-stack-2x"></i>
                        <i className="fab fa-qq fa-stack-1x fa-inverse"></i>
                     </span>
               <Nav>
               </Nav>
               
            </Navbar.Collapse>
            </Navbar>
          </section>
       );
    }
 }
 
 export default Header;