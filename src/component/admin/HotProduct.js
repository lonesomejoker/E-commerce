import { Form } from "antd";
import React from "react";
import { AntdInput, AntdUploader, SaveButton } from "../common";
import { useDispatch } from "react-redux";
import { hotProductAction } from "../../services/HotProduct";
import DynamicHead from "./DynamicHead";


const HotProduct = () => {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    console.log("val:", values);
    await hotProductAction(values)(dispatch).unwrap();
  };
  const [isHotProduct, setisHotProduct] = React.useState([
    {
      title: null,
      price: null,
      category: null,
      image: null,
      sn: 0,
    },
  ]);

  const handleAdd = () => {
    const data = {
      title: null,
      price: null,
      category: null,
      image: null,
      sn: isHotProduct.length,
    };
    setisHotProduct([...isHotProduct, ...[data]]);
  };

  const handleDel = (id) => {
    const deletedata = isHotProduct.filter((item) => item.sn !== id);
    setisHotProduct(deletedata);
  };
  return (
    <div>
      <section className=" flex justify-between py-3">
      <DynamicHead name="Add New Products" />
      <SaveButton name={`Add`} onClick={handleAdd} className="bg-green-400 font-varela text-white" />
      </section>
      <div>
        <Form layout="vertical" onFinish={onFinish}>
          {isHotProduct.map((item, idx) => {
            return (
               <div key={idx} className=" border-b-2 border-emerald-400 my-6">
              <div className=" grid grid-cols-2">
                <div>
                  <AntdInput required name={["price", item.sn]} label={`Price`} type={`number`}/>
                </div>
                <div>
                  <AntdInput required
                    name={["description", item.sn]}
                    label={`Description`}
                  />
                </div>
                <div>
                  <AntdInput required name={["category", item.sn]} label={`Category`} />
                </div>
                <div>
                  <AntdUploader required
                    name={[`image`, item.sn]}
                    label={`Image`}
                    
                    />
                </div>
                <div>
                  <SaveButton
                    name="save"
                    htmlType="submit"
                    className=" bg-emerald-300 w-2/6 font-varela"
                  />
                </div>
               
              </div>
              <SaveButton name="delete" className=" bg-red-500 my-3 text-white font-varela"
                  onClick={()=>handleDel(item.sn)}
                />
              </div>
            );
          })}
        </Form>
      </div>
    </div>
  );
};

export default HotProduct;
