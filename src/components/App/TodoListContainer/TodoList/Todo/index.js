import React, { Component } from 'react'
import styles from './Todo.module.scss'

export default class Todo extends Component {
    constructor(props) {
        super(props);
        
      }
    render() { 
        //const { date}
        return (
            <li className={styles.todo}>
                <div className={styles.data}>
                     2020-02-02
                </div>
                <div className={styles.todName}>
                    Test Name 1
                </div>
                <input type="checkbox"/>
                <div className={styles.delete}>
                    delete
                </div>
            </li>
           
        )
    }
}
