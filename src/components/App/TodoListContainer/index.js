import React, { Component } from 'react'
import { connect } from "react-redux";
import TodoList from './TodoList'
import PropTypes from 'prop-types';
import styles from './TodoListContainer.module.scss';
import { subscribeToReload } from '../../../api/socket';
class TodoListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {          
        };
      }
      componentDidMount(){
        subscribeToReload();
      }
    
    render() {        
        const todos = this.props.todo.todos;          
       if(this.props.isLogin && todos){        
            return (
        <div className={styles.container}>
            <TodoList />                
        </div>
    )
    }
       return <></>;
    }
}

TodoListContainer.propTypes = {   
    todo: PropTypes.object,
    isLogin: PropTypes.bool,
}

function mapStateToProps(state){
    return {        
        isLogin: state.user.isLogin,
        todo: state.todo,
     } 
  };
  const mapDispatchToProps =dispatch =>{
    return{}
  }
  export default connect(mapStateToProps,mapDispatchToProps)(TodoListContainer)
