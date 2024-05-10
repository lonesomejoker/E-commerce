import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchProduct } from "../../services/allProducts";
import { Button, Rate, Skeleton } from "antd";

const SearchProduct = () => {
  const params = useParams();
 // const location = useLocation();
  console.log("params", params);

  const dispatch = useDispatch();
  const { data:search, loading } = useSelector((state) => state.searchproduct);
  
  React.useEffect(() => {
    dispatch(fetchSearchProduct(`${params.id}`));
    // eslint-disable-next-line
  }, [params?.id]);

  console.log("datadasaadah", search?.data);
  return (
    <Skeleton loading={loading}>
      
      <div className=" md:flex px-10 max-w-xl justify-center py-4 font-varela mx-auto" >
        <div className=" w-1/2">
            <img src={search?.data?.image} className=" h-32 w-28" alt="gg" />
        </div>
        <div className=" w-1/2">
          <h1 className=" font-madimi text-violet-600">Name: {search?.data?.title}</h1>
          <h1 className=" text-green-500">Price: {search?.data?.price}</h1>
          <h1>{search?.data?.description}</h1>
          <h1>
            <Rate allowHalf value={search?.data?.rating.rate}
              className="text-[red]"
            />
          </h1>
        </div>
        
      </div>
      <div className=" flex justify-center">
      <Button className="bg-green-500 w-36 font-varela text-white rounded-sm">
      Add to Cart</Button>
      </div>
       
    </Skeleton>
  );
};
export default SearchProduct;
