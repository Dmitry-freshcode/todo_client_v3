import React, { Component } from 'react'
import styles from './AddForm.module.scss'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {logoutUser} from '../../../../store/actionCreater/user'
import {addTodo} from '../../../../store/actionCreater/todo'

class AddForm extends Component {
    constructor() {
        super();
        this.state = {
            text: '',      
            date:'',         
        };
      }

    dataSet = (event) =>{
        this.setState({ date: event.target.value });
    }
    textSet = (event) =>{
        this.setState({ text: event.target.value });
    }
    addTodo = (event) =>{
        event.preventDefault();
        this.props.addTodo({           
            name: this.state.text,            
            dueDate: this.state.date
        });
        this.setState({
            text: '',      
            date:'', 
        })
    }


    render() {        
        return (
        <div className={styles.addForm}>
            <div className={styles.greeting}>
                <p>Welcome , {this.props.username}</p>
                <button onClick={this.props.logoutUser}>Logout</button>                
            </div>
            <div className={styles.addTodo}>
                <input onChange={this.dataSet} type="date" value={this.state.date} className={styles.date}  name="start"  min="2020-01-01" max="2025-12-31"/>
                <input onChange={this.textSet} type="text" value={this.state.text} id="newTodo" placeholder="new todo"/> 
                <button disabled={!(this.state.text && this.state.date)} onClick={this.addTodo}>Add todo</button>
            </div>
        </div>            
        )
    }
}

AddForm.propTypes = {   
    username: PropTypes.string.isRequired,         
  }

function mapStateToProps( state){
    return {
        username: state.user.username,
     } 
  };
  const mapDispatchToProps =dispatch =>{
    return{
        logoutUser: ()=>dispatch(logoutUser()),
        addTodo: (data)=>dispatch(addTodo(data)),        
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(AddForm)
