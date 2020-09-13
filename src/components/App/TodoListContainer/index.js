import React, { Component } from 'react'
import { connect } from "react-redux";
import TodoList from './TodoList'
import styles from './TodoListContainer.module.scss'
class TodoListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {          
        };
      }
    
    render() {
        
        const todos= Object.values(this.props.todos);
        //console.log(this.props.isLogin)
       if(this.props.isLogin && todos.length>0){
            return (
        <div className={styles.container}>
            <TodoList />                
        </div>
    )
    }
       return <></>;
    }
}

function mapStateToProps(state){
    return {        
        isLogin: state.user.isLogin,
        todos: state.todo,
     } 
  };
  const mapDispatchToProps =dispatch =>{
    return{
        //findAllTodo: (data)=>dispatch(findAllTodo(data)),
       // addTodo: (data)=>dispatch(addTodo(data)),        
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(TodoListContainer)
