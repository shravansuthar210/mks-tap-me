// import { useState } from "react";
import ViewOrderBtn from "../components/ViewOrderBtn";

function AuthPages() {
  const product=[
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
    {
      name: "Canat",
      isNew: true,
      description: "blah blah blah blah",
    },
  ]
  return (
    <div className="relative h-full overflow-y  w-full">
      <div
        className=" w-full  grid grid-cols-2 justify-center p-1 gap-2"
        style={{
          overflowY: "scroll",
          position: "relative",
          height: "inherit",
        }}
      >
        {product.map((eachProduct, index) => (
          <div className="relative overflow-hidden rounded-md h-40  bg-yellow-200">
            <img
              alt=""
              style={{
                height: 200,
                maxWidth: 210,
              }}
              className="w-full h-full"
              src="https://www.slingacademy.com/wp-content/uploads/2022/10/night-sky.jpeg"
            />

            <div className="absolute  text-[#fefefe] bottom-0 p-4">
              <div className=" space-x-1">
                {eachProduct.isNew ? <span className="bg-[#f4732d] text-sm font-normal rounded-sm text-center p-1">New</span> : <></>}
                <span className="text-lg">{eachProduct.name + " " + index}</span>
              </div>
              <p className="mt-1">{eachProduct.description}</p>
            </div>
          </div>
        ))}
      </div>
      <ViewOrderBtn />
    </div>
  );
}

export default AuthPages;
