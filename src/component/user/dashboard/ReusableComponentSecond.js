import React from "react";
import { Card } from "antd";

const ReusableComponentSecond = ({ title, data }) => {
  return (
    <>
      <h1 className="my-3 text-2xl text-red-600 font-madimi">{title}</h1>
      <div className="grid gap-2 px-8 py-1 font-varela lg:grid-cols-4 md:grid-cols-2">
        {data?.map((item) => {
          return (
            <div key={item.id} className="my-3">
              <Card hoverable
                className="mx-auto text-white bg-black border-none max-w-52 font-varela">
                <div className="flex justify-start gap-3 py-2 ">
                  <img
                    src={item.image}
                    alt="img"
                    className="w-12 h-12 rounded-md"/>
                  <section>
                    <h1 className="text-lg text-red-600 ">{item.price}</h1>
                    <h2 className="font-bold ">{item.name}</h2>
                  </section>
                </div>
                <h1 className=" min-h-14">{item.discription}</h1>
                <button
                  className=" bg-lime-500 w-full rounded-md mt-1 py-1.5
              flex items-center justify-center"
                >
                  Add to Cart
                </button>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReusableComponentSecond;
