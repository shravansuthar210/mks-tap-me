import React from "react";

const Button = ({ width = "100px", text = "Hello world" }) => {
  const variant = {
    primary: "bg-[#f4732d] text-[#efefef] ",
  };
  return (
    <button
      className={`${variant["primary"]} h-8 rounded-md font-normal`}
      style={{
        width,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
