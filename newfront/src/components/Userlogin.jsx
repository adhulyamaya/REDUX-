import React from 'react'
import {changePassword,changeUsername} from "../feautures/loginslice"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axiosInstance from '../axios/axios';
import { useNavigate } from 'react-router-dom';


const Userlogin = () => {
    const dispatch=useDispatch()
    const login=useSelector((state)=>state.login)
    const navigate =useNavigate()

    const loginSubmit=()=>{
      const datas={
        username:login.value.username,
        password:login.value.password
      }

      axiosInstance.post('login/',datas)
      .then((res)=>{
        console.log(res)
        if (res.data.message == "success")
        navigate('../home')

      })
    }
   


  return (
    <div>
        <input  placeholder='username' onChange={(e)=>dispatch(changeUsername(e.target.value))}/>    
        <input placeholder='password' type="password" onChange={(e)=>dispatch(changePassword(e.target.value))} />
       <button onClick={loginSubmit}>Login</button>
      
    </div>
  )
}

export default Userlogin

