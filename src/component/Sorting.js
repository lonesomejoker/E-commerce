import React from "react";
import { fetchSort } from "../services/allProducts";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Select, Skeleton } from "antd";
import ReusableComponent from "./user/dashboard/ReusableComponent";

const Sorting = () => {
  const dispatch = useDispatch();
  const { data: sortdata,loading } = useSelector((state) => state.sortslice);
  console.log("dt",sortdata.data);

  const options = [
    {
      value: "desc",
      label: "Desc",
    },
    {
      value: "rating",
      label: "Rating",
    },
    {
      value: "price",
      label: "Price",
    },
  ];

  const handleChange = (value, option) => {
    dispatch(fetchSort(value));
    console.log("sd", value, option);
  };
  return (
    <div>
     <Skeleton loading={loading}>
      <h1>this is sorting</h1>
      <Select className=" w-36"
        mode="tags"
        placeholder="Tags Mode"
        onSelect={handleChange}
        options={options}
        allowClear={true}
      />
    
       <ReusableComponent data={sortdata.data}/>
     
      </Skeleton>
    </div>
  );
};

export default Sorting;
