import React from 'react'
import { handiCrafts, hotproducts } from '../../utiles/Product'
import Carousel from './Carousel'
import LatestProduct from './LatestProduct'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../services/allProducts'
import { fetchCarousal } from '../../../services/allProducts'
import ReusableComponent from './ReusableComponent'
import ReusableComponentThird from './ResusableComponentThird'
import ReusableComponentSecond from './ReusableComponentSecond'

const Dashboard = () => {
  const dispatch=useDispatch();
  const {products}=useSelector((state)=>state.allproduct)
  const {data}=useSelector((state)=>state.carousalslice)
  
  React.useEffect(() => {
   dispatch (fetchData());
  }, [dispatch])

  React.useEffect(() => {
   dispatch (fetchCarousal());
  }, [dispatch])

  return (
    <div>
      
      <Carousel title={"Trending"} data={data.data}/>
      <LatestProduct title={"New Arrival"} data={handiCrafts}/>
      <ReusableComponent title={"Hot Products"} data={products.data.map((item)=>{
        return{
          ...item,
          qty:1
        }
      })} />
      <ReusableComponent title={"Handicrafts"} data={handiCrafts} /> 
      <ReusableComponentSecond title={"Trending"} data={hotproducts} /> 
      <ReusableComponentThird title={"Hot products"} data={hotproducts} /> 
      
    </div>
  )
}

export default Dashboard