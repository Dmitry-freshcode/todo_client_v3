import React, { Component } from 'react'
import Header from './Header'
import TodoContainer from './TodoListContainer'
import Footer from './Footer'
import styles from './App.module.scss';
import { connect } from "react-redux";
import {setToken} from '../../store/actionCreater.js'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin:false,         
        };
      }

     componentDidMount(){
        const token = localStorage.getItem('access_token')        
        this.props.setToken(token)}
    render() {
             
        return (
            <div className={styles.container}>
                <Header />
                {this.props.token && <p>login</p>}
                {/* <TodoContainer />  */}
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
        setToken: (token)=>dispatch(setToken(token)),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(App)