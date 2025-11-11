import React from "react";
import { navigation } from "./constants";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-200">
      <div className="flex h-20 items-center justify-center px-10">
              <div className="w-[40%] flex">
                  <img width={70} src="src\assets\logo.png" alt="logo" className="my-auto pt-1.5" />
                  <h1 className="font-bold text-4xl my-auto">GateFlow</h1>
              </div>
        <nav className="fixed top-20 left-0 right-0 bottom-0 lg:static lg:flex w-[60%]">
          <div className="relative flex items-center justify-center m-auto">
            {navigation.map((item) => (
              <div>
                <a
                  href={item.url}
                  key={item.id}
                  className="block relative uppercase mx-3 px-3 py-6 font-semibold text-[1rem]"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;