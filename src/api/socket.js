import {store} from '../index';
import openSocket from 'socket.io-client';
import { findTodos } from '../store/actionCreater/todo'
import {logoutUser,autologinUser} from '../store/actionCreater/user'


const socket = openSocket('http://localhost:3000');    

export const subscribeToLogin = () => { 
  console.log("subscrible login"); 

  socket.on('login',()=>{
    socket.removeListener("login");
    console.log("login");
    store.dispatch(autologinUser())
  });

}
//socket.removeListener("login");
export const sendLogin =(event) =>{  
  socket.emit('login');
}

  export const subscribeToLogout = () => {  
    console.log("subscrible logout");

    socket.on('logout',()=>{
      socket.removeListener("logout");
      console.log("logout");
      store.dispatch(logoutUser())
    });

  }
 // socket.removeListener("logout");
export const sendLogout =() =>{   
    socket.emit('logout');   
  }

export const subscribeToReload = () => {  
    console.log("subscrible reload");
    socket.on('reload',()=>{console.log("reload");store.dispatch(findTodos())});
  }
  
export const sendReload =(event) =>{ 
  //console.log(event);
  console.log("send reload");
    socket.emit('reload');    
  }



