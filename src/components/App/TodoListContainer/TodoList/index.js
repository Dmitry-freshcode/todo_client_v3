import React, { Component } from 'react'
import Todo from './Todo';
import styles from './TodoList.module.scss'

export default class TodoList extends Component {
    render() {
        return (
            <ul className={styles.TodoList}>
                <Todo />
                <Todo />
                <Todo />
                <Todo />
            </ul>
        )
    }
}
