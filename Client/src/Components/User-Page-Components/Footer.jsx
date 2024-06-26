import React from "react";
import { Link } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white bg-black pt-20 px-3 font-serif">
      <div className="flex flex-col md:flex-row md:mx-auto md:justify-around ">
        <div className="basis-1/3">
          {" "}
          <p className="text-2xl mx-3 mb-3 md:underline">
            <span className="text-indigo-400 font-semi-bold text-6xl ">
              Ace{" "}
            </span>{" "}
            your tech journey now
          </p>
          <div className="w-full mx-2  flex">
          <label htmlFor="">
            <input
              type="email"
              placeholder="Your Email "
              className="w-96 m-1 p-4 rounded-l-3xl text-start bg-indigo-100  mr-0"
            />
          </label>
          <button className="p-3 rounded-r-3xl m-1 ml-0 bg-indigo-100 border-l-2 border-gray-700">
            <FaLongArrowAltRight className="text-2xl right-0 text-gray-600 "/>
            </button>
          
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-11.png"
            alt="sucess img"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-around ">
        <div className="">
          <img
            className="rounded-full w-44 "
            // src="https://tse2.mm.bing.net/th?id=OIP.0VFhxtUhtC1xJMqe4nmSBgHaE8&pid=Api&P=0&h=180g"
           
           src="Nerd Niche (1).gif"
            alt="logo"
          />
          <p className="w-60 mt-5 text-md text-indigo-300 md:w-full ">
            "Break the Binary Barrier: Forge Your Path with Our Dynamic
            Courses!"
          </p>
        </div>

        <div className="text-sm text-indigo-300 md:flex gap-10 md:text-md">
          <ul className="mx-auto">
            <li className="p-2 ">About</li>
            <li className="p-2">Docs</li>
            <li className="p-2">Updates</li>
          </ul>
          <ul className="">
            <li className="p-2">Terms of Use</li>
            <li className="p-2">Privacy Policy</li>
            <li className="p-2">Refund and Cancellation Policy</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col align-middle mt-10 bg-neutral-800">
        <p className="w-full text-center text-3xl text-indigo-300">
          Let's Chat!
        </p>
        <a className="w-full text-center text-md" href="#">
          codePathsaala.com
        </a>
        <div className="flex justify-around m-2">
          <SiInstagram className="text-4xl p-1" />
          <BsTelegram className="text-4xl p-1" />
          <BiLogoDiscordAlt className="text-4xl p-1" />
          <RiTwitterXLine className="text-4xl p-1" />
          <CiLinkedin className="text-4xl" />
        </div>
        <div className="w-full text-center p-1 mt-2 text-sm">Copyright © 2024 Sorting Code Pathsaala Pvt Ltd. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;

