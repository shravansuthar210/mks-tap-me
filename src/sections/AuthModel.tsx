import { loginAction } from "../action/auth.action";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AuthModel() {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.auth);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const onSubmit = () => {
    dispatch(loginAction({ phoneNumber }) as any);
  };
  return (
    <div className={`${data.phoneNumber && "hidden"} text-white fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-1`}>
      <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-black">
        <div className="w-full">
          <div className="m-8  max-w-[450px] mx-auto">
            <div className="mb-8">
              <h1 className="mb-4 text-xl font-extrabold">Provide your Mobile Number </h1>
              <div className="flex flex-col">
                <label className="text-white">Mobile Number </label>
                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  style={{
                    backgroundColor: "gray",
                    height: 35,
                  }}
                  className="rounded-md"
                  type="number"
                />
              </div>
              <p className="text-gray-600 pt-3">
                Ads dsadasd asd poipo ioip ipo ipo po i i po ytrytr ytt ytr ytr ytr yt uyt uyt uytuyt uytuyt u tuy tyutuy tuytuyt uyt u ljulououoi uoi
                uo uoi u oiu oi
              </p>
            </div>
            <div className="space-x-4 flex">
              <button onClick={onSubmit} className="p-3 bg-slate-700 rounded-full  text-white w-full font-semibold">
                Skip
              </button>
              <button onClick={onSubmit} className="p-3 bg-[#FF1F00] text-white  rounded-full w-full font-semibold">
                Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
