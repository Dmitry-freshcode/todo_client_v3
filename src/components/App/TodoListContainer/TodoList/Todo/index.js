import React, { Component } from 'react'
import styles from './Todo.module.scss'
import {setStateTodo} from '../../../../../api'
import {deleteTodo} from '../../../../../store/actionCreater/todo'
import { format, parse } from 'date-fns'
import { connect } from "react-redux";
import classNames from 'classnames';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state={
            state: this.props.todo.state,
        }
        
      }
      setState = async () => {
        await setStateTodo(this.props.todo._id);
        //this.setState({state: !this.state.state});

    }

    render() {         
        const {_id,name , state , dueDate} = this.props.todo; 
        console.log(this.state)
        console.log(this.props.todo.state)
        return (
            <li className={styles.todo}>
                <div className={styles.data}>
                     {format(new Date(dueDate),'yyyy-MM-dd')}
                </div>
                <div className={styles.todName}>
                    {name}
                </div>
                <input type="checkbox" defaultChecked={state} onClick={this.setState}/>
                <div className={styles.delete} onClick={()=>this.props.deleteTodo(_id)}>
                    delete
                </div>
            </li>
           
        )
    }
}
function mapStateToProps(state){
    return {        
        //todos: state.todo,
     } 
  };
  const mapDispatchToProps =dispatch =>{
    return{
        //findAllTodo: (data)=>dispatch(findAllTodo(data)),
       deleteTodo: (data)=>dispatch(deleteTodo(data)),        
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Todo)
