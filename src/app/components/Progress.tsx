export default function Progress() {
  return (
    <div>
      <div className="flex items-start max-w-screen-lg w-full mx-auto mt-10">
        
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-3.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black fomt-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-blue-500"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-white ">
              Step:1 Choose Your Dish{""}
            </h6>
            <p className="text-xs text-white">Explore our delicious menu.</p>
          </div>
        </div>

       {/* SECOND DIV */}
       <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-3.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black fomt-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-blue-500"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-white ">
              Step:2 Customize Your Order
            </h6>
            <p className="text-xs text-white">Tailor Your Meal To Your Taste.</p>
          </div>
        </div>
  
      {/* THIRD DIV */}
      <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-3.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black fomt-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-blue-500"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-white ">
              Step:3 Place Your Order
            </h6>
            <p className="text-xs text-white">Ready To Eat? Proceed To Checkout And Complete Your Order.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
