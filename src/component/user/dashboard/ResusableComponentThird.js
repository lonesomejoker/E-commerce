import React from "react";
import { Card } from "antd";
import Avatar from "antd/es/avatar/avatar";

const ReusableComponentThird = ({ title, data }) => {
  return (
    <>
      <h1 className="my-3 text-2xl text-red-600 font-madimi">{title}</h1>
      <div className="grid gap-2 px-8 py-1 font-varela lg:grid-cols-4 md:grid-cols-2">
        {data?.map((item) => {
          return (
            <div key={item.id} className="my-3">
              <Card
                hoverable
                className="mx-auto bg-gray-300 border-none max-w-72 font-varela"
              >
                <div className="text-center ">
                  <Avatar
                    src={item.image}
                    alt="img"
                    className="w-24 h-24 mx-auto mb-6 "
                  />
                  <h1 className="py-2 text-lg text-red-600 ">{item.name}</h1>
                  <h2 className="font-bold min-h-14">{item.discription}</h2>
                </div>
                <button
                  className=" bg-black text-white w-full rounded-sm py-1.5
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

export default ReusableComponentThird;