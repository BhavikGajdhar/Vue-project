import axios from "axios";

const URL ='http://localhost:4500'

  export const getUserData = () => {
    return axios.get(URL+'/employee');
  };

  export const getLanguage = () => {
    return axios.get(URL+'/language');
  };
  export const deleteUserData=(id:number)=>{
    return axios.delete(URL+'/employee'+'/'+id);
  }

  // export const searchGetProductData = (value:any) => {
  //   return axios.get(`http://localhost:4500/products?q=${value}&name=${value}`);
  // };

  export const getUserDataByID=(id:number)=>{
      return axios.get(URL+'/employee'+'/'+id);
  }

  export const addUserData=(value:any)=>{
      return axios.post(URL+'/employee',value);
  }

  export const putUserData=(id:number,data:any)=>{
    return axios.put(URL+'/employee'+'/'+id,data);
  }