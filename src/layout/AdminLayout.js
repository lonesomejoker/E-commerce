import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { adminItems } from '../component/utiles/Product';
import { RiAdminLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { FiSettings } from 'react-icons/fi';


const { Header, Content, Sider } = Layout;

const AdminLayout= () => {
  const navigate=useNavigate();
  const handleRoute=(event)=>{
       navigate(`${event.key}`)
  }
  return (
    <Layout className=' font-varela'>
      <Header className=' flex items-center bg-slate-90 justify-between'>
        <h1 className=' text-white'>Login</h1>
        <section className=' flex gap-x-6 items-center text-white'>
         <h1 className=' flex items-center gap-x-1'><FiSettings/>Settings</h1>
         <RiAdminLine  size={20}/>
         <IoMdMenu  size={20}/>
        </section>
      </Header>

      <Layout>
        <Sider className=' max-w-52 bg-gray-600'>
         <Menu mode="inline" className=' min-h-full bg-indigo-400 font-varela' 
         items={adminItems} onClick={handleRoute}/>
        </Sider>
          
          <Content className=' min-h-[500px] px-5 py-1'>
           <Outlet/>
          </Content>
      
      </Layout>
    </Layout>
  );
};
export default AdminLayout;