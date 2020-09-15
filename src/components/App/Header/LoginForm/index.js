import React, { Component } from 'react'
import styles from './LoginForm.module.scss'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {loginUser,addUser} from '../../../../store/actionCreater/user'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username:'',      
          password:'',
          isValidPass: false,   
          isValidName: false,      
        };
      }

  addNewUser =(event) =>{
    event.preventDefault();
    this.setState({
      username: '',      
      password: '', 
    })
    this.props.addUser({username: this.state.username,password: this.state.password});  
  }

  userLogin = (event) =>{
    event.preventDefault();
    this.setState({
      username: '',      
      password: '', 
    })
    this.props.loginUser({username: this.state.username,password: this.state.password})    
  }

  changePassword = (event) => {    
    this.setState({
      password: event.target.value,
      isValidPass: this.validation(event.target.value),
    });
    
  };

  changeName = (event) => { 
    this.setState({
       username: event.target.value,
       isValidName: this.validation(event.target.value),
      });   
  };

  validation = (target) =>{     
   if(target.length>=4){
     return true
    }else{
      return false
    }
  };

    render() {        
      const {loginError,loginExError,userAddError} = this.props;
        return (
            <div className={styles.loginForm}>
                <label className={styles.login}>
                    Login
                    <input type="text" onChange={this.changeName} value={this.state.username} className={styles.passwordInput} placeholder="Login"/>
                </label>
                <label className={styles.password}>
                    Password
                    <input onChange={this.changePassword} value={this.state.password} type="password" className={styles.loginInput} placeholder="Password"/>
                </label>                
                <button disabled={!this.state.isValidPass || !this.state.isValidName}onClick={this.userLogin}>Login</button>
                <button disabled={!this.state.isValidPass || !this.state.isValidName}onClick={this.addNewUser}>Add</button>
                {loginError && <div className={styles.error}>WRONG PASSWORD OR USERNAME</div>}
                {loginExError && <div className={styles.error}>USERNAME IS EXIST</div>}
                {userAddError && <div className={styles.userAddError}>USERNAME WAS CREATED</div>}
            </div>                  
        )
    }
}

LoginForm.propTypes = {   
  loginError: PropTypes.bool,  
  loginExError: PropTypes.bool,
  userAddError: PropTypes.bool,      
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
    loginUser: (data)=>dispatch(loginUser(data)),
    addUser : (data)=>dispatch(addUser(data)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
