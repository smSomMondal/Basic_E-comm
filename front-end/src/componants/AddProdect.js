import React from 'react'


const AddProduct=()=>{
    

    const[name,setName]=React.useState('')
    const[price,setPrice]=React.useState('')
    const[category,setCatrgory]=React.useState('')
    const[company,setCompany]=React.useState('')
    const[error,setError]=React.useState(false)

    const addPro=async ()=>{

        if (!name || !price || !category || !company) {
            setError(true)
            return false
        }

        // let result=JSON.stringify({name,price,category,company})
        const userId=JSON.parse(localStorage.getItem('user'))._id
        console.log(userId);
        let result=await fetch("http://localhost:4000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type": "application/json"
            }
        })
        result= await result.json()
        console.warn(result);
    }


    return(
        <div className='addProduct'>
            <h1>ADD PRODUCT</h1>

            <input type='text' placeholder='enter prodect name'
            value={name} onChange={(e)=>{setName(e.target.value)}}/>{error && !name && <span>Enter valid name!!!</span>} 

            <input type='text' placeholder='enter prodect price'
            value={price} onChange={(e)=>{setPrice(e.target.value)}}/>{error && !price && <span>Enter valid price!!!</span>}

            <input type='text' placeholder='enter prodect category'
            value={category} onChange={(e)=>{setCatrgory(e.target.value)}}/>{error && !category && <span>Enter valid category!!!</span>}

            <input type='text' placeholder='enter prodect company'
            value={company} onChange={(e)=>{setCompany(e.target.value)}}/>{error && !company && <span>Enter valid company!!!</span>}


            <button onClick={addPro}>add product</button>
        </div>
    )
}


export default AddProduct