import React from "react";
import { FaGooglePlay } from "react-icons/fa6";
import { IoMdAppstore } from "react-icons/io";
import hero from '../../../../assets/hero.png'

const Banner = () => {
  return (
    <section className="mt-10">
      <section>
        {/* title part */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            We Build <br />
            <span className="text-purple-500">Productive</span> Apps
          </h1>
          <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
          <div className="flex gap-2 items-center justify-center">
            <button className="flex gap-2 items-center btn"><FaGooglePlay/> GooglePlay</button>
            <button className="flex gap-2 items-center btn"> <IoMdAppstore/>APP Store</button>
          </div>
        </div>
        {/* banner img part */}

        <div>
           <img className="mx-auto mt-10" src={hero} alt="" />
        </div>
      </section>
      {/* card section */}
      <section className="bg-linear-to-tr from-[#632EE3] to-[#9F62F2] w-full p-10">
   <div>
    <h1 className="text-center text-3xl font-bold text-white">
        Trusted by Millions, Built for You
    </h1>
    <div>
        <div className="text-white">
            <p>Total Downloads</p>
            <h1 className="text-6xl font-bold ">29.6M</h1>
            <p>21% more than last month</p>
        </div>
        <div></div>
        <div></div>
    </div>
   </div>
      </section>
    </section>
  );
};

export default Banner;
