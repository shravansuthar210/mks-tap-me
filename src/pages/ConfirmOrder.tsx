import Button from "../components/form/Button";
import React from "react";
import ItemNumberButton from "../components/ItemNumberButton";
import { useNavigate } from "react-router-dom";

function ConfirmOrder() {
  const navigate = useNavigate();
  const [data, setData] = React.useState([
    {
      name: "sdf asdf sdaf sdaf sadf sadf sdf sadf, sdafsadf sdaf sadf sadf sdf sdf sd",
      feature: "Less spicy, Good in quantity. Without Capsicum.",
      quantity: 0,
    },
    {
      name: "sdf asdf sdaf sdaf sadf sadf sdf sadf, sdafsadf sdaf sadf sadf sdf sdf sd",
      feature: "Less spicy, Good in quantity. Without Capsicum.",
      quantity: 0,
    },
   
  ]);
  const updateQuantity = (index: any, action: any) => {
    let current = data[index];
    if (action >= 0) {
      current.quantity = action;

      let obj = [...data];
      obj[index] = current;
      setData(obj);
    }
  };
  const onCloseHandle = () => {
    navigate("/auth");
  };
  return (
    <div className="bg-[#040405] flex flex-col justify-between h-[94vh] text-[#efefef]">
      <header className="shadow1 flex fixed top-0 right-0 z-10 w-full   flex-row h-14  items-center p-2 space-x-2 ">
        <button onClick={onCloseHandle} className="close-button translate-y-1" aria-label="Close alert" type="button" data-close>
          <span
            aria-hidden="true"
            className="text-lg"
            style={{
              fontSize: 40,
            }}
          >
            &times;
          </span>
        </button>
        <h1 className="text-lg">Confirm Your Order</h1>
      </header>
      <div className="h-[95vh]  flex flex-col justify-between">
        <div className="divide-y mt-[6vh] mb-[6vh] grow overflow-y-auto">
          {data.map((state, index) => (
            <div key={index} className="py-3 px-2 flex justify-between">
              <div className="space-y-5">
                <div>
                  <h3 className=" italic">Order Item {index} :</h3>
                  <p className="text-md">{state.name}</p>
                </div>
                <div className="font-thin text-sm">{state.feature}</div>
              </div>
              <div className="flex content-center items-center ">
                <ItemNumberButton icon={<>&#45;</>} onClick={() => updateQuantity(index, state.quantity - 1)} />
                <span
                  className="px-2"
                  style={{
                    fontSize: 25,
                  }}
                >
                  {state.quantity}
                </span>
                <ItemNumberButton icon={<>&#43;</>} onClick={() => updateQuantity(index, state.quantity + 1)} />
              </div>
            </div>
          ))}
        </div>
        <div className="p-2 fixed bottom-0 right-0 w-full space-x-1 ">
          <Button width={"100%"} text="Order" />
        </div>
      </div>
    </div>
  );
}

export default ConfirmOrder;
