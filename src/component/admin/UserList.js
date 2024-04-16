import React from 'react'
import { Table } from 'antd';
import { fetchUser } from '../../services/allProducts';
import { useSelector,useDispatch } from 'react-redux';
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: ['name','firstname'],
    key: 'name',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];



const UserList = () => {
  const dispatch=useDispatch();
  const {users}=useSelector((state)=>state.alluser);
  console.log("user:",users);

  React.useEffect(() => {
    
    dispatch (fetchUser());
    
  }, [dispatch])
  return (
    <div>
      <h1>User List</h1>
      <Table dataSource={users.data} columns={columns} />;
    </div>
  )
}

export default UserList
