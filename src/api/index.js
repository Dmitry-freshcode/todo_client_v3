import axios from 'axios';

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
    }); 
 
    console.log(response.data);
    return response; 
  }catch(e){    
    return {error:401}
  }
          
}

export const addUser = async (data) =>{    
  try{

    const response = await API.post('/users/add',{
      username: data.username,
      password: data.password      
    }); 
    console.log(response);
    return response; 
  }catch(e){       
    return e;
  }
          
}


