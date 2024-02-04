import { useNavigate } from "react-router-dom";


function Pages() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-full h-full flex-1 grow">
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => {
            navigate("/auth");
          }}
          className={`bg-[#f4732d] text-[#efefef] rounded-md font-normal w-[25rem] h-[3rem]`}
        >
          Go to Menu
        </button>
        <button className={`bg-[#f4732d] text-[#efefef] rounded-md font-normal w-[25rem] h-[3rem]`}>Pay bill</button>
      </div>
    </div>
  );
}

export default Pages;
