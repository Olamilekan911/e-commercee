import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Product = () => {
    const {id}=useParams()
    const [data,setData] =useState('')
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
  return (
   <section id="singleProduct">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={data.image} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <h4>Summary Description</h4>
                <div className="card">
                    <li className="d-flex justify-content-between">
                        <span>Name:</span> <strong>{data.title}</strong>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>Description:</span> <strong>{data.description}</strong>
                    </li>
                    <li className="d-flex justify-content-between">
                        <span>Price:</span> <strong>{data.price}</strong>
                    </li>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Product