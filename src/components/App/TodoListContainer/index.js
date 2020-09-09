import React, { Component } from 'react'
import TodoList from './TodoList'
import styles from './TodoListContainer.module.scss'

export default class TodoListContainer extends Component {
    
    render() {
       
        return (
            <div className={styles.container}>
                <TodoList />                
            </div>
        )
    }
}
