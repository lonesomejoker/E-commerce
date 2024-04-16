import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import React from "react";
// import Home from "../component/user/Home";
import Aboutus from "../component/user/Aboutus";
import Contactus from "../component/user/Contactus";
import SignUp from "../component/user/SignUp";
import LogIn from "../component/user/LogIn";
import Detail from "../component/user/Detail";
import Cart from "../component/user/dashboard/Cart";
import OrderNow from "../component/user/dashboard/OrderNow";
import AuthLayout from "../layout/AuthLayout";
import Profile from "../component/admin/Profile";
import HotProduct from "../component/admin/HotProduct";
import UserList from "../component/admin/UserList";
import AppStore from "../component/admin/AppStore";

const AdminDashboard =React.lazy(()=>import('../component/admin/AdminDashboard'))
const PageNotFound =React.lazy(()=>import("../component/PageNotFound"))
const UserLayout =React.lazy(()=>import("../layout/UserLayout"))
const DashBoard =React.lazy(()=>import("../component/user/dashboard/DashBoard"))
const AdminLayout =React.lazy(()=>import("../layout/AdminLayout"))

export const MainRouter=createBrowserRouter (
    createRoutesFromElements(
<Route>
      
<Route path="/" element={<UserLayout/>}>
<Route index element={<DashBoard/>}/>
{/* <Route path="home" element={<Home/>}/>  */}
<Route path="aboutus" element={<Aboutus/>}/> 
<Route path="contactus" element={<Contactus/>}/>
<Route path="detail" element={<Detail/>}/>
<Route path="cart" element={<Cart/>}/>
<Route path="ordernow" element={<OrderNow/>}/>
</Route>

<Route path="/admin" element={<AdminLayout/>}>
<Route path="dashboard" element={<AdminDashboard/>}/> 
<Route path="profile" element={<Profile/>}/> 
<Route path="hotproduct" element={<HotProduct/>}/> 
<Route path="userlist" element={<UserList/>}/> 
<Route path="appstore" element={<AppStore/>}/> 
</Route>


<Route path="/auth" element={<AuthLayout/>}>
<Route path="login" element={<LogIn/>}/> 
<Route path="signup" element={<SignUp/>}/> 
</Route>

 
<Route path="*" element={<PageNotFound/>} />

</Route>
    )
)