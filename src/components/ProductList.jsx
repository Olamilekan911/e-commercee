import { Link } from "react-router-dom"
import Product from "../pages/Product"

const ProductList = ({data}) => { 
    return (
      <div className="row gy-3">
         {
        data.map((data)=> (
            <div className="col-md-3" key={data.id}>
            <Link to={`Product/${data.id}`} className="text-decoration-none">
            <div className="card" >
            <img src={data.image} height={250} alt="" className="card-img"/>
            <div className="card-body"></div>
            <h4>{data.title.substring(0, 15)}</h4>
            <p className="lead">{data.description.substring(0, 30)}</p>
            <p className="lead">{data.price}</p>
            </div>
            </Link>
            </div>
          ))
       }
      </div>
  
  )
}

export default ProductList