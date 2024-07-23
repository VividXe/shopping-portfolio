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
    <div className="bg-black">
      <div className="flex items-center justify-between p-10 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-10">
          <a href="/home" className="text-4xl font-mono">
            DHK
          </a>
          <div className="hidden md:flex lg:flex">
            <div className="flex items-center gap-4">
              {accounts.map((account) => (
                <div
                  className="hover:text-gray-200 cursor-pointer"
                  key={account.key}
                >
                  <a href={account.name}>{account.name}</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block lg:block">
          <div className="flex items-center gap-4">
            <a
              href="/about"
              className="hover:text-gray-200 cursor-pointer"
            >
              ABOUT
            </a>
            <a
              href="/contact"
              className="hover:text-gray-200 cursor-pointer"
            >
              CONTACT US
            </a>
            <a
              href="/wallet"
              className="hover:text-gray-200 cursor-pointer"
            >
              $0.00
            </a>
            <button>
              <GiShoppingBag className="hover:text-gray-200 cursor-pointer" />
            </button>
            <button>
              <FaUser className="hover:text-gray-200 cursor-pointer" />
            </button>
          </div>
        </div>

        <IoMenuSharp
          onClick={toggleDropdown}
          className="block relative md:hidden lg:hidden text-2xl "
        />

        <div className="absolute block md:hidden lg:hidden text-white w-full">
          {isOpen && (
            <div className="absolute mt-5 w-[75%] bg-[#277eb0] rounded-lg shadow-lg">
              <div className="flex flex-col items-center text-center gap-4">
                {accounts.map((account) => (
                  <div
                    className="px-4 w-full py-2 text-sm hover:bg-[#619bbd]"
                    key={account.key}
                  >
                    <a href={account.name}>{account.name}</a>
                  </div>
                ))}
              </div>

              <nav className="pt-5 md:p-0 lg:p-0">
                <div className="flex flex-col items-center text-center gap-4">
                  <a
                    href="/about"
                    className="px-4 w-full py-2 text-sm hover:bg-[#619bbd]"
                  >
                    ABOUT
                  </a>
                  <a
                    href="/contact"
                    className="px-4 w-full py-2 text-sm hover:bg-[#619bbd]"
                  >
                    CONTACT US
                  </a>
                  <a
                    href="/wallet"
                    className="px-4 w-full py-2 text-sm hover:bg-[#619bbd]"
                  >
                    $0.00
                  </a>
                  <button>
                    <GiShoppingBag className="px-4 w-full py-2 text-sm hover:bg-[#619bbd] flex justify-center" />
                  </button>
                  <button>
                    <FaUser className="px-4 w-full py-2 text-sm hover:bg-[#619bbd] flex justify-center" />
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
