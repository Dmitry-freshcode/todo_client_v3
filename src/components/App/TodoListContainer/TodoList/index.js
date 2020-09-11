import React, { Component } from 'react'
import Todo from './Todo';
import styles from './TodoList.module.scss'
import { connect } from "react-redux";
import {findAllTodo} from '../../../../store/actionCreater/todo'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : this.props.todo,        
        };
      }
      mapsTodos=(todo,index)=>{
        return <Todo key={index} todo={todo}/>
      } 


    render() {
        console.log(this.state.todos);
        const maps=[];
        const todos = this.state.todos;
        if (this.props.todo.length>0){
            maps = todos.map(this.mapsTodos);
            console.log(maps);
            console.log(todos);
        }
        //console.log(maps);
        return (
            <ul className={styles.TodoList}>
                {todos.length && maps}
                <Todo />
                <Todo />
                <Todo />
                <Todo />
            </ul>
        )
    }
}

function mapStateToProps( state){
    return {        
        todo: state.todo,
     } 
  };
  const mapDispatchToProps =dispatch =>{
    return{
        //findAllTodo: (data)=>dispatch(findAllTodo(data)),
       // addTodo: (data)=>dispatch(addTodo(data)),        
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
