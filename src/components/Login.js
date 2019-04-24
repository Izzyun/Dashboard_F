import React, { Component } from 'react';
import InputWithLabel from './InputWithLabel';

class Login extends Component {
  state = {
    login_id : '',
    login_pw : ''
  }

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);    
  }
  
  onChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    });
  }


  render() {
    return (
      <div className = "login-form">
        <form>
          <InputWithLabel              
            name="ID"
            id = "login_id"
            value = {this.state.login_id}
            onChange = {this.onChange}
          />
          <InputWithLabel              
            name="PW"
            id = "login_pw"
            value = {this.state.login_pw}
            onChange = {this.onChange}
          />
          <button onClick={() => {
            alert(this.state.login_id);
          }}>로그인</button>
        </form>
      </div>
      );
    }
  }
  
  export default Login;