import React, { Component } from 'react'
import styles from './LoginForm.module.scss'
//import API from '../../../../api';
import { connect } from "react-redux";
//import {setToken} from '../../../../store/actionCreater/'
import {loginUser,addUser} from '../../../../store/actionCreater/user'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username:'',      
          password:'',         
        };
      }

  addNewUser =(event) =>{
    event.preventDefault();
    this.props.addUser({username: this.state.username,password: this.state.password});
    this.setState({
      username: '',      
      password:'', 
    })
  }
  userLogin = (event) =>{
    event.preventDefault();
    this.setState({
      username:'',      
      password:'', 
    })
    this.props.loginUser({username: this.state.username,password: this.state.password})
    
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
                    <input onChange={this.changePassword} value={this.state.password} type="password" className={styles.loginInput}/>
                </label>                
                <button disabled={!(this.state.username && this.state.password)}onClick={this.userLogin}>Login</button>
                <button disabled={!(this.state.username && this.state.password)}onClick={this.addNewUser}>Add</button>
                {this.props.loginError && <div className={styles.error}>WRONG PASSWORD OR USERNAME</div>}
                {this.props.loginExError && <div className={styles.error}>USERNAME IS EXIST</div>}
                {this.props.userAddError && <div className={styles.userAddError}>USERNAME WAS CREATED</div>}
            </div>                  
        )
    }
}


function mapStateToProps(state){
  return {
    loginError: state.errors.loginError,
    loginExError: state.errors.loginExError,
    userAddError: state.errors.userAddError
   } 
};
const mapDispatchToProps =dispatch =>{
  return{
    //setToken: (token)=>dispatch(setToken(token)),
    loginUser: (data)=>dispatch(loginUser(data)),
    addUser : (data)=>dispatch(addUser(data)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
