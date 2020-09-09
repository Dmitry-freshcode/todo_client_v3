import React, { Component } from 'react'
import styles from './AddForm.module.scss'

export default class AddForm extends Component {
    render() {
        return (
        <div className={styles.addForm}>
            <div className={styles.greeting}>
                <p>Welcome , UserLogin</p>
                <button>Logout</button>                
            </div>
            <div className={styles.addTodo}>
                <input type="date" className={styles.date} name="rip-start" value="" min="2020-01-01" max="2025-12-31"/>
                <input type="text" id="newTodo"/> 
            </div>
        </div>            
        )
    }
}

