import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ViewOrderBtn = () => {
  const navigation = useNavigate();
  const [cartLength, setCartLength] = React.useState(5);
  const onClick = () => {
    navigation("/confirmOrder");
  };
  return (
    <button
      onClick={onClick}
      className={`p-2 ${cartLength === 0 && "hidden"} bg-[#f4732d] text-[#fefefe] absolute bottom-5 right-5 rounded-md divide-x-2  font-semibold`}
    >
      <span className="p-1">{cartLength} Items</span>
      <span className="p-1">VIEW ORDER</span>
    </button>
  );
};

export default ViewOrderBtn;
