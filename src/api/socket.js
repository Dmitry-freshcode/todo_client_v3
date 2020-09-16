import {store} from '../index';
import openSocket from 'socket.io-client';
import { findTodos } from '../store/actionCreater/todo'


const socket = openSocket('http://localhost:3000');    

export const subscribeToReload = () => {  
    socket.on('reload',()=>{store.dispatch(findTodos())});
  }
  
export const sendReload =() =>{  
    socket.emit('reload');
  }