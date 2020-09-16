import React, { Component } from 'react'
import LoginForm from './LoginForm'
import AddForm from './AddForm'
import styles from './Header.module.scss'
import { connect } from "react-redux";
import {subscribeToLogin} from '../../../api/socket'

class Header extends Component {

    componentDidMount(){
        subscribeToLogin();
    }
    render() {
        const token = this.props.token;
        return (
        <div className={styles.header}>
               {token ? <AddForm /> :<LoginForm />}               
        </div>        
        )
    }
}
function mapStateToProps( state){
    return {
        token : state.token.access_token
     } 
  };
  const mapDispatchToProps =dispatch =>{
    return{        
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Header)