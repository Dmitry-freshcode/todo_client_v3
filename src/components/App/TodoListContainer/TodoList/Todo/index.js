import React, { Component } from 'react'
import styles from './Todo.module.scss'
import {setStateTodo} from '../../../../../api'
import {deleteTodo} from '../../../../../store/actionCreater/todo'
import { format} from 'date-fns'
import { connect } from "react-redux";
//import classNames from 'classnames';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state={
            state: this.props.todo.state,
        }        
      }

      setState = async () => {
        await setStateTodo(this.props.todo._id);
        }

    render() {         
        const {_id,name , state , dueDate} = this.props.todo;      
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
    return {} 
  };
  const mapDispatchToProps =dispatch =>{
    return{        
       deleteTodo: (data)=>dispatch(deleteTodo(data)),        
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Todo)
