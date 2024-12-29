import { CiCoffeeCup } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { FaBolt } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";


export default function Navbar() {
    return (
      <div>
        <div className="grid xl:grid-cols-1 grid-cols-1">
          <div className="p-5 ">
            <div className="py-3 px-3 rounded-xl border w-full">
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-1">
                  {/**LOGO*/}
                  <CiCoffeeCup className="w-6 h-6 text-yellow-300" />
                  <h1 className="text-3xl font-serif underline font-bold text-yellow-400">DelightSwirl</h1>
                </div>
  
                {/** Search Bar Container (Centered) */}
                <div className="flex justify-center flex-1">
                  <div style={{ position: "relative" }}>
                    <input 
                      className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                      placeholder="Search something here"
                    />
                    <IoSearch className="w-5 h-5 text-gray-500 absolute right-3 top-0 transform translate-y-1/2 hidden lg:block md:block"/>
                  </div>
                </div>
  
                <div className="flex justify-center items-center gap-4">
                  <FaBolt className="w-5 h-5 text-yellow-300 hidden lg:block md:block"/>
                  <p className="text-md text-white hidden lg:block md:block underline">Order Now And Get It With
                    <span className="text-white"> 15 minutes</span>
                  </p>
                  <TiShoppingCart className="inline-block w-8 h-8 rounded-full ring-2 relative hover:ring-white cursor-pointer text-gray-600"/>
                  <img src="/images/pic.jpg" alt="user avatar" className="inline-block w-8 h-8 rounded-full ring-2 hover:ring-white"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
