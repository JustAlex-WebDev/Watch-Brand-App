import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="main-div p-4 text-center flex flex-col gap-2 justify-center items-center">
        <div className="flex gap-4">
          <BsGithub size={15} className="cursor-pointer hover:text-green-900" />
          <SiGmail size={15} className="cursor-pointer hover:text-green-900" />
          <BsFacebook
            size={15}
            className="cursor-pointer hover:text-green-900"
          />
        </div>
        <h2>
          © <span className="text-lg">2023</span>{" "}
          <Link to="/" className="hover:text-green-900">
            Timeless
          </Link>
          , Inc. All Rights Reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
