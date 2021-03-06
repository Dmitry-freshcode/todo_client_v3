import React, { Component } from 'react'
import styles from './Todo.module.scss'
import PropTypes from 'prop-types';
import {setStateTodo} from '../../../../../api'
import {deleteTodo} from '../../../../../store/actionCreater/todo'
import { format} from 'date-fns'
import { connect } from "react-redux";
import {sendReload} from '../../../../../api/socket'


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state={
            state: this.props.todo.state,
        }        
      }

      setState = async () => {
          try{
            await setStateTodo(this.props.todo._id);
            await sendReload();
          }catch (e){
                console.log(e);
          }
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
                <input type="checkbox" checked={state} onChange={this.setState}/>
                <div className={styles.delete} onClick={()=>this.props.deleteTodo(_id)}>
                    delete
                </div>
            </li>
           
        )
    }
}

Todo.propTypes = {   
    todo: PropTypes.object.isRequired,    
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
