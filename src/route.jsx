import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Userlayout from '../components/layouts/UserLayout';
import AuthLayout from '../components/layouts/AuthLayout';
import AdminDashBoard from '../components/admin/AdminDashBoard';
import React from 'react';
import Signup from '../components/auth/Signup';
import Dashboard from '../components/user/dashboard/Dashboard';
import Details from '../components/user/productdetails/Details';
import PaymentMethod from '../components/user/PaymentMethod';
import Userdetailsadmin from '../components/admin/Userdetailsadmin';
import Profiles from '../components/admin/Profiles';
import HotProduct from '../components/admin/HotProduct';
import Profile from '../components/user/Profile';
import Settings from '../components/user/Settings';


// Corrected import statements
const LogIn = React.lazy(() => import("../components/auth/Login"));
const AdminLayout = React.lazy(() => import("../components/layouts/AdminLayout"));

export const MainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Userlayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="details" element={<Details/>}/>
                <Route path="payment" element={<PaymentMethod/>}/>
                <Route path="userprofile" element={<Profile/>}/>
                <Route path="settings" element={<Settings/>}/>
                
                
            </Route>
            <Route path="admin" element={<AdminLayout/>}>
                <Route index element={<AdminDashBoard/>}/>
                <Route path="userdetailadmin" element={<Userdetailsadmin/>}/>
                <Route path="profiles" element={<Profiles/>}/>
                <Route path="hotproduct" element={<HotProduct/>}/>
                
            </Route>
            
            <Route path="/auth" element={<AuthLayout/>}>
                <Route path="login" element={<LogIn/>}/>
                <Route path="signup" element={<Signup/>}/>
            
            </Route>
            <Route path="/layout" element={<AdminLayout/>}>
                <Route path="dashboard" element={<AdminDashBoard/>}/>
            </Route>
        </Route>
    )
);