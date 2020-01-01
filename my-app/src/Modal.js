import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Login from './login';
import Nav from 'react-bootstrap/Nav';
import $ from 'jquery';

  function handleSubmit(event) {
      event.preventDefault();
    }

  function showRegisterForm(){ // 회원가입 보여준 시작
    $('#contained-modal-title-vcenter').html('Register with');
    $('.change_to_register').fadeIn('fast');
    $('#account_singup').fadeOut('fast',function(){
      $('#account_login').fadeIn('fast');
  });
  }
  function showLoginForm(){
    $('#contained-modal-title-vcenter').html('Login with');
    $('.change_to_register').fadeOut('fast');
    $('#account_login').fadeOut('fast',function(){
      $('#account_singup').fadeIn('fast');
  });
}// 회원가입 끝

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Login With
            </Modal.Title>
            <Modal.Title id="contained-modal-title-vcenter" style={{display:'none'}}>
              Register with
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Login With</h4>
            <Login/>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
        <Modal.Footer id="account_singup">    
          <Nav.Link href="#" onClick={showRegisterForm} >Looking to create an account?</Nav.Link>
          <Nav.Link href="#">아이디 찾기</Nav.Link>
          <Nav.Link href="#">비밀번호 찾기</Nav.Link>
          <Button onClick={props.onHide}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Save Changes</Button>
        </Modal.Footer>
        <Modal.Footer id="account_login" style={{display:'none'}}>    
          <Nav.Link href="#" onClick={showLoginForm} >Already have an account? Login</Nav.Link>
          <Nav.Link href="#">아이디 찾기</Nav.Link>
          <Nav.Link href="#">비밀번호 찾기</Nav.Link>
          <Button onClick={props.onHide}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Save Changes</Button>
        </Modal.Footer>

      </Modal>
    );
  }
  
  function Example() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
  
      <div className="App">
      
          <ButtonToolbar>
            <Button variant="dark" onClick={() => setModalShow(true)}>
              Login/Sighup
            </Button>
  
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
        </ButtonToolbar>
 
      </div>
      
    );
  }
  export default Example;