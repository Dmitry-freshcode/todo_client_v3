import React, { Component } from 'react'
import Todo from './Todo';
import styles from './TodoList.module.scss'
import { connect } from "react-redux";


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
        const todos= this.props.todos.todos;
        const maps = todos.map((todo,i) => <Todo key={todo._id} todo={todo}/>);       
        return (
            <ul className={styles.TodoList}>
                { maps}               
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {        
        todos: state.todo,
     } 
  };
  const mapDispatchToProps =dispatch =>{
    return{}
  }
  export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
