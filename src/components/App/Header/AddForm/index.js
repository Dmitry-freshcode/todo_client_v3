import React, { Component } from 'react'
import styles from './AddForm.module.scss'
import { connect } from "react-redux";
import {logoutUser} from '../../../../store/actionCreater/user'
import {deleteToken} from '../../../../store/actionCreater/index'

class AddForm extends Component {

    logoutUser= () => {
        localStorage.removeItem('access_token');
        this.props.deleteToken();
    }

    render() {
        return (
        <div className={styles.addForm}>
            <div className={styles.greeting}>
                <p>Welcome , UserLogin</p>
                <button onClick={this.props.logoutUser}>Logout</button>                
            </div>
            <div className={styles.addTodo}>
                <input type="date" className={styles.date}  name="start"  min="2020-01-01" max="2025-12-31"/>
                <input type="text" id="newTodo"/> 
                <button>Add todo</button>
            </div>
        </div>            
        )
    }
}


function mapStateToProps( state){
    return { } 
  };
  const mapDispatchToProps =dispatch =>{
    return{
        logoutUser: ()=>dispatch(logoutUser()),
        //deleteToken: (token)=>dispatch(deleteToken(token)),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(AddForm)
