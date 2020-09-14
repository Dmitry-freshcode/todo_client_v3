import axios from 'axios';
import {store} from '../index';

// export default axios.create({
//   baseURL: 'http://localhost:3000',
//   responseType: 'json',
// });

// eslint-disable-next-line no-unused-vars


//const token = localStorage.getItem('access_token'); 

const API = axios.create({
   baseURL: 'http://localhost:3000',
   responseType: 'json',
   });

export const loginUser = async (data) =>{    
  try{
    const response = await API.post('/auth/login',{
      username: data.username,
      password: data.password      
    })      
    return response; 
  }
   catch(e){        
     return e.response.data;
 }          
}

export const addUser = async (data) =>{    
  try{
    const response = await API.post('/users/add',{
      username: data.username,
      password: data.password      
    }); 
    //console.log(response);
    return response; 
  }catch(e){       
    return e;
  }          
}

export const getProfile = async (data) =>{ 
  try{    
    const response = await API.get('/users/profile',{headers:{
      Authorization: `Bearer ${data}`
    }
  }); 
    //console.log(response);
    return response; 
  }catch(e){       
    return e;
  }          
}

export const addTodo = async (todo) =>{    
  try{
    const token = store.getState().token.access_token;
    //const token = localStorage.getItem('access_token');
    const response = await API.post('/todo/add',{
           name: todo.name,
           username: todo.username,           
           state: false,
           dueDate: todo.dueDate,
         },{headers:{
      Authorization: `Bearer ${token}`
  }
  }); 

    return response; 
  }catch(e){       
    return e;
  }          
}
export const getTodo = async (data) =>{   
  try{  
    const username = store.getState().user.username;
    const token = store.getState().token.access_token;
    const currentPage =  store.getState().todo.currentPage;
  

    console.log(username);
    console.log(token);
    console.log(currentPage);

    const response = await API.get('/todo/find/all',
    {
      headers: {
          "Authorization": `Bearer ${token}`
      } ,
       params:{ 
        username : username,
        page: currentPage || 1,
      }        
    }    
    )
    //console.log(response);
    return response; 
  }catch(e){  
    console.log(e);     
    return e;
  }          
}

export const setStateTodo = (id)  =>{
  const token = store.getState().token.access_token;
    API.patch('/todo/state/update',{
      _id:id
    },
    {
      headers: {'Authorization': `Bearer ${token}`}      
    });
}


export const deleteTodo = async(id) =>{ 
  const token = store.getState().token.access_token;         
    API.post('/todo/delete',{ _id:id},{      
        headers: {'Authorization': `Bearer ${token}`}
    });
}




