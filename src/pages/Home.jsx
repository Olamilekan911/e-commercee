import { useEffect, useState } from "react"
import ProductList from "../components/ProductList"

const Home = () => {
    const[data,setData] =useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
    
  return (
    <section className="home">
        <div className="container">
            <div className="text-center display-6">OUR PRODUCTS</div>
                <ProductList data={data}/>
        </div>
    </section>
  )
}

export default Home