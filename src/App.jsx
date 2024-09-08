import React from "react";
import qr1 from "./assets/qr1.png";

const App = () => {
  return (
    <div className="flex justify-center items-center bg-[#D5E1EF] w-full h-screen">
      <div className="flex flex-col items-center justify-evenly w-96 h-[35rem] bg-white rounded-2xl">
        <div className="w-80 h-80 rounded-2xl bg-[#2B7DFA]">
          <img src={qr1} alt="" />
        </div>
        <p className="font-bold text-[1.4rem] text-center font-[Arial] w-72 ">
          Improve your front-end skills by building projects
        </p>
        <p className="font-[Arial] text-[#989AA0] text-center w-64 mb-6">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default App;
