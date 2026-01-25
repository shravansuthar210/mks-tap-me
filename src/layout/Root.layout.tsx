import { useState } from "react";
import { Outlet } from "react-router-dom";

// ----------------------------------------------------------------------

export default function RootLayout() {
  const [open, setOpen] = useState(false);
  const categories =[{ name: "Pizza", active: true, url: "" }]

  return (
    <div className=" h-[94vh] flex flex-col">
      <header className="shadow1 shadow-sm flex-none fixed top-0 right-0 z-10 h-[6vh] bg-[#040405] w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 " aria-label="Global">
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#f4732d]"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <h2 className="text-[#f4732d] text-lg">Menu</h2>
          </div>
        </nav>
      </header>
      <main className="grow flex relative mt-[6vh] flex-row  h-[88vh] ">
        <div className={`fixed ${!open && "hidden"} top-[6vh] left-0 z-10  h-full min-w-[40%] bg-[#020401] `}>
          <div
            // className=" divide-y relative  w-full overflow-y bg-white  py-1 "
            style={{
              overflowY: "scroll",
              position: "relative",
              height: "inherit",
              display: "block",
            }}
          >
            {categories.map((state) => (
              <div className={`p-2 ${state.active && "bg-[#333333]"} text-base`}>
                <p className="text-[#fefefe]">{state.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#020401]  w-full" onClick={() => setOpen(false)}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
