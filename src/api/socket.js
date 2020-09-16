import {store} from '../index';
import openSocket from 'socket.io-client';
import { findTodos } from '../store/actionCreater/todo'
import { logoutUser,autologinUser } from '../store/actionCreater/user'


const socket = openSocket('http://localhost:3000');    

export const subscribeToReload = () => {  
    socket.on('reload',()=>{store.dispatch(findTodos())});
  }
  
export const sendReload =() =>{  
    socket.emit('reload');
  }

export const subscribeToLogout = () => {  
    socket.on('logout',()=>{store.dispatch(logoutUser())});
  }

export const sendLogout =() =>{  
    socket.emit('logout');
    socket.removeListener("logout");
  }

  export const subscribeToLogin = () => {  
    socket.on('login',()=>{store.dispatch(autologinUser())});
    
  }

  export const sendLogin =() =>{  
    socket.emit('login');
    
  }