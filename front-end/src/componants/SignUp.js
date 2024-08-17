import React from "react";
import { useState ,useEffect} from "react";
import {useNavigate} from "react-router-dom"


const SignUp =() => {

    const Navigate=useNavigate()

    useEffect(()=>{
        const oth=localStorage.getItem('user')
        
        if(oth){
            Navigate('/')
        }
    })

    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()


   
    const collecData =async () => {
        console.warn(name,email,password);

        let result = await fetch('http://localhost:4000/regiester',{

            method:'post',
            body: JSON.stringify({name,email,password}),
            headers:{
                "Accept":"application/json",
                'Content-Type':'application/json',
                'Content-Length': "",
            },

        })
        result=await result.json()
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result))
        if (result) {
            navigate('/')
        }
        
    }
    return (
        <div className="signUP">
            <h1>register page</h1>

            <input className="inputBox" type="text"
                value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />

            <input className="inputBox" type="text"
                value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />

            <input className="inputBox" type='password'
                value={password} onChange={(e) => setPassword(e.target.value)} placeholder="passWord" />

            <button type="button" onClick={collecData}>sign up</button>
        </div>
    )
}


export default SignUp;