import { useEffect, useState } from "react";

function App() {
  const [className, setClassName] = useState("rotate-0 opacity-0");
  const [className1, setClassName1] = useState("opacity-0 -bottom-5");
  const [className2, setClassName2] = useState("w-0");
  useEffect(() => {
    setClassName("rotate-[180deg] opacity-100");
    setClassName1("opacity-100 bottom-0");
    setClassName2("w-60");
    setTimeout(() => {
      window.location.href = "https://sportsx.app";
    }, 2500);
  }, []);
  return (
    <div className="w-full h-full flex flex-col relative items-center justify-center bg-black">
      <img
        className={`transition-all duration-[3000ms] ${className}`}
        src="https://cdn.prod.website-files.com/6682b42bbe8479d4352cf848/6682de3c3a4dc55585ae53a9_x_gruen_rgb_2x.png"
      />
      <p
        className={`relative pt-16 text-white text-4xl font-bold transition-all duration-500 ${className1}`}
      >
        SportsX
      </p>
      <div className="mt-8 w-60 h-2 bg-gray-800 flex items-center justify-start">
        <div
          className={`bg-white h-2 transition-all duration-[3000ms] ${className2}`}
        ></div>
      </div>
    </div>
  );
}

export default App;
