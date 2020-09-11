import axios from 'axios';
import {store} from '../index';

// export default axios.create({
//   baseURL: 'http://localhost:3000',
//   responseType: 'json',
// });

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

export const getProfile = async (token) =>{    
  try{
    const response = await API.get('/users/profile',{headers:{
      Authorization: `Bearer ${token}`
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

    const token = localStorage.getItem('access_token');
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
    const response = await API.get('/todo/find/all',
    {
      headers: {
          "Authorization": `Bearer ${data.payload.token}`
      } ,
       params:{ 
        username : data.payload.username,
      }        
    }    
    )
    
    return response; 
  }catch(e){       
    return e;
  }          
}



