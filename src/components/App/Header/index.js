import React, { Component } from 'react'
import LoginForm from './LoginForm'
import AddForm from './AddForm'
import styles from './Header.module.scss'

export default class Header extends Component {
    render() {
        return (
        <div className={styles.header}>
               <LoginForm /> 
               {/* <AddForm />                 */}
        </div>        
        )
    }
}
