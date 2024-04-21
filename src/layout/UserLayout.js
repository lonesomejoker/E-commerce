import React, { useState } from "react";
import { Badge, Layout, Avatar, Drawer } from "antd";
import { Link, Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Order from "../component/user/Order";
import { useSelector, useDispatch } from "react-redux";
import { clearData } from "../Redux/Slices/AddtoCart";
const { Search } = Input;
const { Content, Footer } = Layout;

const UserLayout = () => {
  const iteminfo = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "AboutUs",
      link: "/aboutus",
    },
    {
      name: "ContactUS",
      link: "/contactus",
    },
  ];
  const authinfo = [
    {
      name: "Login",
      link: "/auth/login",
    },
    {
      name: "SignUp",
      link: "/auth/signup",
    },
  ];

  const [open, setOpen] = useState(false);
  const carditem = useSelector((state) => state.addtocard.data);
  const dispatch = useDispatch();

  const showDrawer = () => {
    if (carditem.length >= 1) setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            fontSize: 16,
            footerBg: "black",
          },
        },
      }}
    >
      <Layout className=" font-madimi">
          <div className="flex items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
          w-full fixed z-10 px-6">
            <img src="/lion.png" alt="lion" className="md:h-14 h-8" />

            <div className="gap-8 flex mx-auto">
              {iteminfo?.map((item, idx) => (
                <div key={idx}>
                  <Link to={item.link}>
                    <h1 >{item.name}</h1>
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex items-center md:max-w-70 ">
              <Search placeholder="input search text" />
              <div className=" px-4 flex items-center">
                <Badge count={carditem?.length}>
                  <Avatar
                    size={28}
                    icon={<ShoppingCartOutlined />}
                    onClick={showDrawer}
                  ></Avatar>
                </Badge>
                <h1 className=" mx-3" onClick={() => dispatch(clearData())}>
                  Clear{" "}
                </h1>
                <div>
                  {open && (
                    <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                      <Order />
                    </Drawer>
                  )}
                </div>
              </div>
            </div>
            
            <div className=" flex gap-2">
              {authinfo?.map((item, idx) => {
                return (
                  <div key={idx}>
                    <Link to={item.link}>
                      <h1 className=" bg-cyan-300 px-2 py-1 rounded">{item.name}</h1>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

        <Content className="min-h-[535px] pt-12">
          <Outlet />
        </Content>
        <Footer className="flex justify-center  text-blue-50">
          Shirish Shrestha ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
export default UserLayout;
