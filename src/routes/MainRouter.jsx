import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
    
}

from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Order from '../pages/Order'
import Products from '../pages/Products'
import Product from '../pages/Product'


const MainRouter = () => {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            </Route>
        )
    )
  return (
    <RouterProvider router={routes}/>
    
  )
}

export default MainRouter