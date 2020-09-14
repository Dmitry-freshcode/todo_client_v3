import React, { Component } from 'react'
import styles from './Index.module.scss'
import classnames from 'classnames';
import { connect } from "react-redux";
import {editCurrentTodo} from '../../../../store/actionCreater/todo'



class Index extends Component {
    constructor(props){
        super(props);
        this.state={            
        }
    }


 
    loadPage = () => {        
        if (this.props.index!==this.props.current){            
            this.props.editCurrentTodo(this.props.index);
        }
    }

    render() {       
        const {index, current} = this.props;  
        let classNames = classnames(styles.index, { [styles.current]: index===current });        
        return (
            <li>
                <p className={classNames} onClick={this.loadPage}>{index}</p>
            </li>
        )
       
    }
}

function mapStateToProps(state){
    return {        
        username: state.user.username,
        // currentPage: state.todo.currentPage,
     } 
  };
  const mapDispatchToProps =dispatch =>{
    return{
        editCurrentTodo: (data)=>dispatch(editCurrentTodo(data)),
       // addTodo: (data)=>dispatch(addTodo(data)),        
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Index)