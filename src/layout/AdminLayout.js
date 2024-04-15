import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { adminItems } from '../component/utiles/Product';
const { Header, Content, Sider } = Layout;

const AdminLayout= () => {
  return (
    <Layout className=' font-varela'>
      <Header className=' flex items-center bg-slate-900'>
        <h1 className=' text-white'>Login</h1>
      </Header>

      <Layout>
        <Sider className=' max-w-52 bg-gray-600'>
         <Menu mode="inline" className=' min-h-full bg-indigo-400 font-varela' 
         items={adminItems}/>
        </Sider>
          
          <Content className=' min-h-[500px] px-5 py-1'>
           <Outlet/>
          </Content>
      
      </Layout>
    </Layout>
  );
};
export default AdminLayout;