import React from 'react';
//  import $ from 'jquery';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

class StateExample extends React.Component {

    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/');
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

render(){
    
    return (

        <section>
            <hr/>
            {/* footer 회사소개 이용약과 개인정보취급방췸 이용안내 제휴문의 */}
            <Container className="container-footer secondary bg-dark" variant="dark" fluid={true}>
                <Nav activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
                    <Nav.Item>
                        <Nav.Link href="/home" className="footer_link_style">회사소개</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" className="footer_link_style">이용약관</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className="footer_link_style">개인정보취급방침</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className="footer_link_style">이용안내</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className="footer_link_style">제휴문의</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                        Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
               
                <Jumbotron fluid>
                    <Container fluid className="footer-font">
                        <Row>
                            <Col md={3}><p>COMPANY: (주)워크브즈프란즈 <br/>OWNER: 유란  BUSINESS LICENSE: 243-87-00762</p>
                                {/* <a href="#">사업자정보확인</a> */}
                                <p>MALL-ORDER LICENSE : 제2017-서울금천-0804호</p>
                                <p>
                                    ADDRESS : 08513 서울특별시 금천구 벚꽃로 234 (가산동) 에이스하이엔드타워6차 410호 (주)워크브즈프란즈
                                
                                </p>
                                <p>TEL : 1600-6697FAX : 02-6299-5115</p>
                                <p>CPO : 김두환 (master@puttisu.com)CONTACT US :  master@puttisu.com</p>
                                <p>COPYRIGHT © 뿌띠슈 ALL RIGHTS RESERVED. HOSTING CAFE24 | DESIGNED By DFLOOR</p>
                            </Col>
                            <Col md={2}>
                                <div>
                                    <span className="fa-stack fa-4x phoneicon">
                                        {/* <i class="fas fa-phone-volume"></i> */}
                                        <i className="fas fa-phone-volume fa-spin fa-stack-2x"></i>
                                        <i className="fab fa-phone-volume fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <h1 className="phone">1600-6697</h1>
                                </div>
                                <p>월요일-금요일 am 10:00 ~ pm 5:00 / 점심 pm 12:00 ~ pm 1:00 (토요일.일요일.공휴일 휴무)</p>
                            </Col>
                            <Col md={2}>
                                <p>ACCOUNT INFO : 541-045095-01-028 <br/>기업예금주:(주)워크브즈프란즈</p>
                                <h6>교환 · 반품지 주소:</h6>
                                <p>서울특별시 금천구 벚꽃로 234, 에이스하이엔드타워6차 410호 <br/>자세한 교환·반품절차 안내는 문의란 및 공지사항을 참고해주세요</p>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        인터넷뱅킹 바로가기
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="https://www.kbstar.com">국민은행</Dropdown.Item>
                                        <Dropdown.Item href="https://www.citibank.co.kr/">씨티은행</Dropdown.Item>
                                        <Dropdown.Item href="https://www.shinhan.com">신한은행</Dropdown.Item>
                                        <Dropdown.Item href="https://www.ibk.co.kr/">기업은행</Dropdown.Item>
                                        <Dropdown.Item href="https://www.wooribank.com">우리은행</Dropdown.Item>
                                        <Dropdown.Item href="https://www.kebhana.com">하나은행</Dropdown.Item>
                                        <Dropdown.Item href="https://open.standardchartered.co.kr/">제일은행</Dropdown.Item>
                                        <Dropdown.Item href="https://www.kdb.co.kr">산업은행</Dropdown.Item>
                                        <Dropdown.Item href="https://www.pusanbank.co.kr">부산은행</Dropdown.Item>
                                        <Dropdown.Item href="https://www.kyongnambank.co.kr">경남은행</Dropdown.Item>
                                        <Dropdown.Item href="https://www.chejubank.co.kr">제주은행</Dropdown.Item>
                                        <Dropdown.Item href="https://www.kjbank.com">광주은행</Dropdown.Item>
                                        <Dropdown.Item href="https://www.daegubank.co.kr">대구은행</Dropdown.Item>
                                        <Dropdown.Item href="https://www.jbbank.co.kr">전북은행</Dropdown.Item>
                                        <Dropdown.Item href="https://www.suhyup-bank.com">수협은행</Dropdown.Item>
                                        <Dropdown.Item href="https://banking.nonghyup.com">농협</Dropdown.Item>
                                        <Dropdown.Item href="https://www.epostbank.go.kr">우체국</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col md={2} className="favorite_menu_font">
                                FAVORITE MENU
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link href="#">로그인 / 회원가입</Nav.Link>
                                    <Nav.Link eventKey="link-1">관심상품</Nav.Link>
                                    <Nav.Link eventKey="link-2">장바구니</Nav.Link>
                                    <Nav.Link eventKey="link-2">주문조회</Nav.Link>
                                    <Nav.Link eventKey="link-2">마이페이지</Nav.Link>
                                    <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                                </Nav>
                            </Col>
                            <Col md={3}>
                                <Row>
                                    <Col><h1>Fluid jumbotron</h1></Col>
                                </Row>
                                <Row>
                                    <Col>COPYRIGHT © 뿌띠슈 ALL</Col>
                                    <Col>RIGHTS RESERVED. HOSTING CAFE24 |</Col>
                                    <Col>COPYRIGHT © 뿌띠슈 ALL</Col>  
                                </Row>
                                <Row>
                                    <div className="fa-3x">
                                        <i className="fas fa-spinner fa-spin"></i>
                                        <i className="fas fa-circle-notch fa-spin"></i>
                                        <i className="fas fa-sync fa-spin"></i>
                                        <i className="fas fa-cog fa-spin"></i>
                                        <i className="fas fa-spinner fa-pulse"></i>
                                        <i className="fas fa-stroopwafel fa-spin"></i>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-weixin fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-qq fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-google fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-weibo fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-youtube fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-line fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-apple-pay fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-google-plus fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-renren fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-amazon fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-ebay fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-paypal fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-cc-visa fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-cc-mastercard fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span className="fa-stack fa-2x">
                                            <i className="fas fa-square fa-stack-2x"></i>
                                            <i className="fab fa-500px fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container>
                <div>
                {this.state.posts.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.content}</span>
                    </div>
                ))}
                </div>
        </Container>
        </section>

    );
}

}
 
 export default StateExample;