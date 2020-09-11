import React, { Component } from 'react'
import Header from './Header'
import TodoContainer from './TodoListContainer'
import Footer from './Footer'
import styles from './App.module.scss';
import { connect } from "react-redux";
import {autologinUser} from '../../store/actionCreater/user'
//import {setToken} from '../../store/actionCreater/index'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin:false,         
        };
      }

     componentDidMount(){
        this.props.autologinUser();
    //     const token = localStorage.getItem('access_token')  
    //     if(token) {this.props.setToken(token)}     
        }
    render() {
             
        return (
            <div className={styles.container}>
                <Header />
                {this.props.token && <p>login</p>}
                <TodoContainer /> 
                <Footer />               
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
        autologinUser: ()=>dispatch(autologinUser())
        //setToken: (token)=>dispatch(setToken(token)),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(App)