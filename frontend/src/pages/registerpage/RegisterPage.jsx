import React, { useState } from 'react'
import {Link} from "react-router-dom"
const RegisterPage = () => {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const register = async(e)=>{
        try {
            
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div>
        Register baby
    </div>
  )
}

export default RegisterPage