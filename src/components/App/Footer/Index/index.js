import React, { Component } from 'react'
import styles from './Index.module.scss'
import PropTypes from 'prop-types';
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

Index.propTypes = {   
    username: PropTypes.string.isRequired,        
}


function mapStateToProps(state){
    return {        
        username: state.user.username,        
     } 
  };
  const mapDispatchToProps =dispatch =>{
    return{
        editCurrentTodo: (data)=>dispatch(editCurrentTodo(data)),              
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Index)
