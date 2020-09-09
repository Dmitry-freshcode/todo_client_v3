import React, { Component } from 'react'
import styles from './LoginForm.module.scss'
import API from '../../../../api';
import { connect } from "react-redux";
import {setToken} from '../../../../store/actionCreater.js'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',      
          password:'',         
        };
      }


  createUser = async () =>{
    this.setState({userError:false});
    await API.post('/users/',{
      username: this.state.username,
      password: this.state.password
    });
    this.setState({ createdUser: this.state.username ,username:'', password:''});    
  }

  loginUser = async () => {    
    const response = await API.post('/auth/login/',{
      username: this.state.username,
      password: this.state.password
    }).catch(function (error) {
      console.log(error);      
    });
    const token = response.data.access_token;
    localStorage.setItem('access_token',token);
    this.props.setToken(token)
    
  };

  logoutUser = () =>{
    localStorage.removeItem('access_token');
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  changeName = (event) => {    
    this.setState({ username: event.target.value });
  };
    render() {
        return (
            <div className={styles.loginForm}>
                <label className={styles.login}>
                    Login
                    <input type="text" onChange={this.changeName} value={this.state.username} className={styles.passwordInput}/>
                </label>
                <label className={styles.password}>
                    Password
                    <input onChange={this.changePassword} value={this.state.password} type="text" className={styles.loginInput}/>
                </label>
                <button id="loginUser" onClick={this.loginUser}>Login</button>
                <button id="addUser" onClick={this.logoutUser}>Add</button>
            </div>                  
        )
    }
}


function mapStateToProps( state){
  return { } 
};
const mapDispatchToProps =dispatch =>{
  return{
    setToken: (token)=>dispatch(setToken(token)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
