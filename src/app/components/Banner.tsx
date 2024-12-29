import Offer from "./Offer";
import Home from "./Menu";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-blue-300 min-h-screen font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-30">
        <img
          src="/images/bg.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>
    <Home/>
    <Offer/>
    </div>
  );
}
