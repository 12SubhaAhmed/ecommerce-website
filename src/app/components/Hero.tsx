import Image from "next/image";

export default function Carousal() {
  return (
    <div>
      <section className="bg-gradient-to-r from-pink-600 to-blue-300">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            {/* FIRST */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-pink-600 to-blue-300 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/images/shakes.jpg"
                  alt="desert"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-pink-900/25 to-blue-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Classic Desert
                </h3>
              </a>
            </div>

            {/* SECOND */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-pink-600 to-blue-300">
              <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 mb-3 pb-4 pt-40 flex-grow">
              <Image
                  src="/images/shake.webp"
                  alt="shakes"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-pink-900/25 to-blue-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Shakes
                </h3>
              </a>

               {/* THIRD */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <a className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <Image src="/images/cake.jpg" alt="cake"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                <div className="absolute inset-0 bg-gradient-to-b from-pink-900/25 to-blue-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  cakes
                </h3>
              </a>
           {/* FORTH */}

              <a href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-2 pt-40">
                <Image src="/images/ice.jpg" alt="icecreams"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                <div className="absolute inset-0 bg-gradient-to-b from-pink-900/25 to-blue-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Ice Creams
                </h3>

              </a>
            </div>
            </div>

          {/* FIFTH */}
         <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-pink-600 to-blue-300 h-auto md:h-full flex flex-col">
         <a href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                <Image src="/images/desert.webp" alt="icecreams"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                <div className="absolute inset-0 bg-gradient-to-b from-pink-900/25 to-blue-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Ice Yogurt
                </h3>

              </a>
          </div>           
          </div>
        </div>
      </section>
    </div>
  );
}
