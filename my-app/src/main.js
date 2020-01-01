import React from 'react';
//  import $ from 'jquery';
// import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
// import axios from 'axios';
class Main extends React.Component {
 
render(){
    const ctn ={
        margin: "50px auto" 
    }
    const jum = {
        width: "390px",
        padding:" 35 0 35 0"
    }
    const imgHeight ={

        height:"525px"
    }
    return (

        <section>
            {/* <Container className="container-footer" fluid={true}>
               <Row>
                  <Col>1 of 2</Col>
                  <Col>2 of 2</Col>
               </Row>
            </Container> */}

            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/image/1.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/image/2.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/image/3.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/image/4.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/image/3.png"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container style={ctn} fluid>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                    <Jumbotron style={jum} fluid>
                        <Container>
                            <h1>BRAND STORY</h1>
                           
                        </Container>
                    </Jumbotron>
                    </Col>
                    <Col md="auto">
                    <Jumbotron style={jum} fluid>
                        <Container>
                            <h1>EVENT</h1>
                           
                        </Container>
                    </Jumbotron>
                    </Col>
                    <Col md="auto">
                    <Jumbotron style={jum} fluid>
                        <Container>
                            <h1>REDVIEW</h1>
                            
                        </Container>
                    </Jumbotron>
                    </Col>
                    <Col md="auto">
                    <Jumbotron style={jum} fluid>
                        <Container>
                            <h1>STORYE</h1>
                           
                        </Container>
                    </Jumbotron>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col md={3}>
                        <Row>
                            <Image src="/image/3.png" fluid />
                        </Row>
                        <Row>
                            <Image src="/image/3.png" fluid />
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Carousel>
                            <Carousel.Item>
                                <img style={imgHeight}
                                className=" w-100"
                                src="/image/3.png"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Image src="/image/3.png" fluid />
                        </Row>
                        <Row>
                            <Image src="/image/3.png" fluid />
                        </Row>
                    </Col>

                </Row>

            </Container>
        </section>

    );
}

    }
 
 export default Main;