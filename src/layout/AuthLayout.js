import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="bg-[url('https://th.bing.com/th/id/R.81adc7f4830cf38c560b53257e7de0d9?rik=by%2brzL6qQMmpHQ&pid=ImgRaw&r=0')] 
    min-h-screen object-cover">
      <h1 className=' font-madimi text-center text-violet-700'>Authentication</h1>
      <Outlet/>
    </div>
  )
}

export default AuthLayout
