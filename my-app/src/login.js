import React from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Login(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repeatpassword, setRepeatPassword] = React.useState("");
    const [gender, setGender] = React.useState("");

    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
   
    return (
      <div className="Login">
        <span className="fa-stack fa-2x" style={{color: 'Dodgerblue'}}>
            <i className="fas fa-square fa-stack-2x"></i>
            <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
        </span>
        <span className="fa-stack fa-2x"  style={{color: '#3e5b99'}}>
            <i className="fas fa-square fa-stack-2x"></i>
            <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
        </span>
        <span className="fa-stack fa-2x" style={{color: '#d82f80'}}>
            <i className="fas fa-square fa-stack-2x"></i>
            <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
        </span>
        <span className="fa-stack fa-2x" style={{color: '#650b4c'}}>
            <i className="fas fa-square fa-stack-2x"></i>
            <i className="fab fa-github fa-stack-1x fa-inverse"></i>
        </span>
        <span className="fa-stack fa-2x" style={{color: '#4ec034'}}>
            <i className="fas fa-square fa-stack-2x"></i>
            <i className="fab fa-weixin fa-stack-1x fa-inverse"></i>
        </span>
        <span className="fa-stack fa-2x">
            <i className="fas fa-square fa-stack-2x"></i>
            <i className="fab fa-qq fa-stack-1x fa-inverse"></i>
        </span>
        <span className="fa-stack fa-2x" style={{color: '#ea4335'}}>
            <i className="fas fa-square fa-stack-2x"></i>
            <i className="fab fa-google fa-stack-1x fa-inverse"></i>
        </span>
        <span className="fa-stack fa-2x" style={{color: 'red'}}>
            <i className="fas fa-square fa-stack-2x"></i>
            <i className="fab fa-weibo fa-stack-1x fa-inverse"></i>
        </span>
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bssize="large">
            <FormLabel>Email *</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormLabel>Password *</FormLabel>
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password" autoComplete="on"
            />
          </FormGroup>
          <FormGroup controlId="RepeatPassword" bssize="large" className="change_to_register">
            <FormLabel>RepeatPassword *</FormLabel>
            <FormControl
              value={password}
              onChange={e => setRepeatPassword(e.target.value)}
              type="password" autoComplete="on"
            />
          </FormGroup>
          <FormGroup controlId="age" bssize="large" className="change_to_register">
            <FormLabel>age</FormLabel>
            <FormControl
              value={repeatpassword}
              onChange={e => setPassword(e.target.value)}
              type="text" autoComplete="on"
            />
          </FormGroup>
          <FormGroup controlId="gender" bssize="large" className="change_to_register">
            <FormLabel>gender</FormLabel>
            <FormControl
              value={gender}
              onChange={e => setGender(e.target.value)}
              type="text" autoComplete="on"
            />
          </FormGroup>
          <Button block bssize="large" disabled={!validateForm()} type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }

  export default Login;