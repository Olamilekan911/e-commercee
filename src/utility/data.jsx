import {FaHome,FaUser } from 'react-icons/fa'
import {CiShoppingTag } from 'react-icons/ci'
import {GiShoppingBag} from 'react-icons/gi'
export const NAVBAR_LINKS=[
{
    id:1,
    path:'/',
    label:'Home',
    icon:<FaHome />
},
{
    id:2,
    path:'/about',
    label:'About',
    icon:<FaUser />
},
{
    id:3,
    path:'/products',
    label:'Products',
    icon:<GiShoppingBag />
},
{
    id:2,
    path:'/order',
    label:'Order',
    icon:<CiShoppingTag />
},
]