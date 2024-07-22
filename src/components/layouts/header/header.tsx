"use client";
import { FaUser } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { Navigation } from "@/@types";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
const accounts = [
  {
    key: Navigation.EVERYTHING,
    name: "EVERYTHING",
  },
  {
    key: Navigation.MEN,
    name: "MEN",
  },
  {
    key: Navigation.WOMEN,
    name: "WOMEN",
  },
  {
    key: Navigation.ACCESSORIES,
    name: "ACCESSORIES",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between bg-[#2B7FAF] p-10">
      <div className="flex items-center gap-10">
        <div>
          <h1 className="text-4xl font-mono">DHK</h1>
        </div>

        <div className="hidden md:flex lg:flex">
          <nav>
            <ul className="flex items-center gap-4 ">
              {accounts.map((account) => (
                <li
                  className="hover:text-gray-200 cursor-pointer"
                  key={account.key}
                >
                  <p>{account.name}</p>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="hidden md:block lg:block">
        <nav>
          <ul className="flex items-center gap-4">
            <li className="hover:text-gray-200 cursor-pointer">
              ABOUT
            </li>
            <li className="hover:text-gray-200 cursor-pointer">
              CONTACT US
            </li>
            <li className="hover:text-gray-200 cursor-pointer">
              $0.00
            </li>
            <li className="hover:text-gray-200 cursor-pointer">
              <GiShoppingBag />
            </li>
            <li className="hover:text-gray-200 cursor-pointer">
              <FaUser />
            </li>
          </ul>
        </nav>
      </div>

      <IoMenuSharp
        onClick={toggleDropdown}
        className="block relative md:hidden lg:hidden text-2xl "
      />

      <div className="absolute block md:hidden lg:hidden text-white w-full">
        {isOpen && (
          <div className="absolute left-0 mt-5 w-[80%] sm:w-[600px] bg-[#277eb0] rounded-lg shadow-lg z-10 ">
            <nav>
              <ul className="flex flex-col items-center text-center gap-4">
                {accounts.map((account) => (
                  <li
                    className="px-4 w-full py-2 text-sm hover:bg-[#619bbd]"
                    key={account.key}
                  >
                    <p>{account.name}</p>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className=" pt-5 md:p-0 lg:p-0">
              <ul className="flex flex-col items-center text-center gap-4">
                <li className="px-4 w-full py-2 text-sm hover:bg-[#619bbd]">
                  ABOUT
                </li>
                <li className="px-4 w-full py-2 text-sm hover:bg-[#619bbd]">
                  CONTACT US
                </li>
                <li className="px-4 w-full py-2 text-sm hover:bg-[#619bbd]">
                  $0.00
                </li>
                <li className="px-4 w-full py-2 text-sm hover:bg-[#619bbd] flex justify-center">
                  <GiShoppingBag />
                </li>
                <li className="px-4 w-full py-2 text-sm hover:bg-[#619bbd] flex justify-center">
                  <FaUser />
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
