import React, { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'


const UpdateProduct=()=>{
    

    const[name,setName]=React.useState('')
    const[price,setPrice]=React.useState('')
    const[category,setCatrgory]=React.useState('')
    const[company,setCompany]=React.useState('')
    const navig=useNavigate()
    const param=useParams();
    useEffect(()=>{
        getDetails()
    },[])


    const getDetails= async()=>{
        console.log(param);
        if(param.id==":id"){
            alert("no id has been chosen")
            navig('/')
        }
        let result=await fetch(`http://localhost:4000/product/${param.id}`,{
            method:'get',
            headers:{
                "Content-Type": "application/json"
            }
        })
        result=await result.json()
        // console.log(result);
        setName(result.name)
        setPrice(result.price)
        setCatrgory(result.category)
        setCompany(result.company)


    }

    const updateProduct=async ()=>{
        // console.log(name,price,category,company)
        let result=await fetch(`http://localhost:4000/product/${param.id}`,{
            method:'put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                "Content-Type": "application/json"
            }
        })
        result=await result.json()
        console.log(result);
        navig('/')
    }


    return(
        <div className='addProduct'>
            <h1>UPDATE PRODUCT</h1>

            <input type='text' placeholder='enter prodect name'
            value={name} onChange={(e)=>{setName(e.target.value)}}/>

            <input type='text' placeholder='enter prodect price'
            value={price} onChange={(e)=>{setPrice(e.target.value)}}/>

            <input type='text' placeholder='enter prodect category'
            value={category} onChange={(e)=>{setCatrgory(e.target.value)}}/>

            <input type='text' placeholder='enter prodect company'
            value={company} onChange={(e)=>{setCompany(e.target.value)}}/>


            <button onClick={updateProduct}>update product</button>
        </div>
    )
}


export default UpdateProduct