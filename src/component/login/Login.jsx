import React,{useContext, useState} from 'react'
import '../signup/signup.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { productContext } from '../contextAPI/Context'

const Login = () => {
    const navigate = useNavigate()
    const { token,setToken } = useContext(productContext)
    const [email, setMail] = useState('')
    const [password, setPassword] = useState('')
  
    const url = "https://shoestop-backend-3.onrender.com/login"
 
    const changeMailHandler = (e) => {
        setMail(e.target.value)
    }
    const changePasswordHandler = (e) => {
        setPassword(e.target.value)
    }
  
    const submitHandler = () => {
    axios.post(url, { email, password })
      .then(res => {
          localStorage.setItem('token', res.data.token);
          console.log(res.data);
          setToken(res.data.token);
          navigate('/home');
      })
      .catch(error => {
          alert(error.response?.data?.error || error.response?.data?.message || error.message);
          console.log(error);
      });
}