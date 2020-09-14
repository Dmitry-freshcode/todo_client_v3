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
        
        const todos = this.props.todo.todos;
        // console.log(this.props.todo.todos);
          
       if(this.props.isLogin && todos){
        //console.log(todos);  
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
        todo: state.todo,
     } 
  };
  const mapDispatchToProps =dispatch =>{
    return{
        //findAllTodo: (data)=>dispatch(findAllTodo(data)),
       // addTodo: (data)=>dispatch(addTodo(data)),        
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(TodoListContainer)
