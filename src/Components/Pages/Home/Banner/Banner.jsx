import React from "react";
import { FaGooglePlay } from "react-icons/fa6";
import { IoMdAppstore } from "react-icons/io";
import hero from '../../../../assets/hero.png'

const Banner = () => {
  return (
    <section className="mt-10">
      <section>
        {/* title part */}
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-5xl font-bold">
            We Build <br />
            <span className="text-purple-500">Productive</span> Apps
          </h1>
          <p className="text-sm text-gray-600">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
          <div className="flex gap-2 items-center justify-center">
            <a href="https://play.google.com/store/games?device=windows&pli=1" target="_blank" className="flex gap-2 items-center btn"><FaGooglePlay/> GooglePlay</a>
            <a href="https://apps.apple.com/us/iphone/apps" target="_blank" className="flex gap-2 items-center btn"> <IoMdAppstore/>APP Store</a>
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
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mt-7">

  <div className="text-white">
    <p>Total Downloads</p>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">29.6M</h1>
    <p>21% more than last month</p>
  </div>

  <div className="text-white">
    <p>Total Reviews</p>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">906K</h1>
    <p>46% more than last month</p>
  </div>

  <div className="text-white">
    <p>Active Apps</p>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">29.6M</h1>
    <p>31 More will Launch</p>
  </div>

</div>
   </div>
      </section>
    </section>
  );
};

export default Banner;
