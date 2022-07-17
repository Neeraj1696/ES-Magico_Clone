import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar_main border-2 border-black-300 pb-4 fixed top-0 left-0 right-0 bg-white ">
      <div className="navbar">
        <div className="navbar_logo">
          <Link to="/">
            <img
              className="mt-6 ml-20 "
              width="162px"
              height="40px"
              src="https://static.wixstatic.com/media/911316_d5d4c22416444d0988601aa9f1453527~mv2.jpg/v1/crop/x_0,y_7,w_1977,h_549/fill/w_203,h_50,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Logo-1_edited.jpg"
              alt="Error"
            />
          </Link>
        </div>
        <div className="a mt-4 ">
          <Link className="mr-8 text-sm" to="/">
            WORK
          </Link>
          <Link className="mr-8 text-sm" to="/about">
            About
          </Link>
          <Link className="mr-8 text-sm" to="/finance">
            FINANCE
          </Link>
          <Link className="mr-8 text-sm" to="/marketing">
            MARKETING
          </Link>
        </div>
        <div className="info mt-3 text-sm text-slate-500">
          <span>Email:create@esmagico.in</span>
          <br />
          <a href="/home">Phone:(+91)940 7474 888 </a>
        </div>
        <button
          OnClick="/login"
          className="mr-10 border-2 border-black-300 p-3 rounded font-bold mt-3 bg-black-300 hover:bg-slate-200 ..."
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Navbar;
