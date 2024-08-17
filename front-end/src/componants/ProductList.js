import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const ProductList = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:4000/products', {
            headers: {
                authorization: JSON.parse(localStorage.getItem('token'))
            }
        })
        result = await result.json()
        setProducts(result)
    }
    // console.warn(products);
    // console.log(JSON.parse(products));

    const delet=async(id)=>{
        let result=await fetch(`http://localhost:4000/product/${id}`,{
            method:"delete"
        })
        result=await result.json()
        console.warn(result);
        if(result){
            getProducts()
        }
    }

    return (
        <div className="divProList">
            <h1>Product List</h1>
            <ul className="proList">
                <li>SL. NO.</li>
                <li>NAME</li>
                <li>PRICE(INR)</li>
                <li>CATAGORY</li>
                <li>OPARATION</li>
            </ul>
            {
                products.map((item,index) =>
                    <ul className="proList" key={item._id}>
                        
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <>
                        <li><button onClick={()=>delet(item._id)}>delete</button>
                        <Link to={"/update/"+item._id}>update</Link></li></>
                    </ul>
                )
            }
        </div>

    )
}



export default ProductList;