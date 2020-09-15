import React, { Component } from 'react'
import Header from './Header'
import TodoContainer from './TodoListContainer'
import Footer from './Footer'
import styles from './App.module.scss';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {autologinUser} from '../../store/actionCreater/user'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin:false,         
        };
      }

     componentDidMount(){
        this.props.autologinUser();    
        }
    render() {
             
        return (
            <div className={styles.container}>
                <Header />
                <TodoContainer /> 
                <Footer />               
            </div>
        )
    }
}

App.propTypes = {   
    token: PropTypes.string.isRequired,
}

function mapStateToProps( state){
    return {
        token : state.token.access_token
     } 
  };
  const mapDispatchToProps =dispatch =>{
    return{
        autologinUser: ()=>dispatch(autologinUser())        
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(App)