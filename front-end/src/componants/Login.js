import react, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"




const Login = () => {

    const [email,setEmail]=react.useState('')
    const [password,setPassword]=react.useState('')
    const Navigate=useNavigate()
    useEffect(()=>{
        const oth=localStorage.getItem('user')
        if(oth){
            Navigate('/')
        }
    },[])

    const handelLoging=async()=>{
        console.warn(email,password);
        let result = await fetch('http://localhost:4000/login',{

            method:'post',
            body: JSON.stringify({email,password}),
            headers:{
                // "Accept":"application/json",
                'Content-Type':'application/json',
                // 'Content-Length': "",
            },

        })
        result=await result.json()
        console.log(result);
        
        if (result.name) {
            localStorage.setItem("user",JSON.stringify(result))
            
            Navigate('/')
        }
        else{
            alert("enter coeerct email or password")
        }
    }

    return (
        <div>
            <input className="inputBox" type="text"
                value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" />

            <input className="inputBox" type='password'
                value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="passWord" />

            <button type="button" onClick={handelLoging} >sign up</button>
        </div>
    )
}


export default Login