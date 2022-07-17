import React from "react";
import Navbar from "./Navbar";
import TapAndPlayIcon from "@material-ui/icons/TapAndPlay";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import StayPrimaryPortraitIcon from "@material-ui/icons/StayPrimaryPortrait";
import Footer from "./Footer";

function Marketing() {
  return (
    <>
      <Navbar />
      <div className="marketing mb-96">
        <div className="">
          <div className="pt-60 text-center pl-60 pr-60 text-xl">
            <div>
              <p className="pb-10">
                We are a team of passionate and dedicated professionals helping
                ventures <strong> start </strong> and <strong>grow.</strong>
              </p>
            </div>

            <div className="">
              <p className="">
                We are focused on providing solutions for businesses to engage
                with their users and acquire more–Social Media Marketing, SEO
                solutions, SEM, content strategy, PR, affiliate or any other
                form of digital marketing or offline activations which helps
                them expand and scale.
              </p>
            </div>
          </div>
          <div className="bg-black flex mt-40  ">
            <div className="cart  w-96 h-80 bg-black text-white justify-center text-center ">
              <TapAndPlayIcon className="mt-20   " />

              <h1 className="text-2xl font-bold pb-7 pt-5">SOCIAL MEDIA</h1>
              <span className="text-center  ">
                Content Strategy Content Design Social Media Marketing Lead
                Generation
              </span>
            </div>
            <div className="cart  w-96 h-80 bg-slate-500 justify-center text-center ">
              <RepeatOneIcon className="mt-20   " />

              <h1 className="text-2xl font-bold pb-7 pt-5">TECHNICAL SEO</h1>
              <span className="text-center  ">
                Migration & Website Re-design Structure Optimisation Performance
                Optimisation Link Audit
              </span>
            </div>
            <div className="cart  w-96 h-80  bg-black text-white justify-center text-center ">
              <StayPrimaryPortraitIcon className="mt-20   " />

              <h1 className="text-2xl font-bold pb-7 pt-5 ">PR</h1>
              <span className="text-center  ">
                Publications Influencer Marketing Blogs Organic Reach
              </span>
            </div>
            <div className="cart  w-96 h-80 bg-slate-500 justify-center text-center ">
              <SportsSoccerIcon className="mt-20   " />

              <h1 className="text-2xl font-bold pb-7 pt-5">EVENTS</h1>
              <span className="text-center   ">
                Activations Brand Integrations Sponsored Events​ Community
                Outreach
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <h1 className="text-2xl font-bold text-center mt-20">Clients</h1>
        </div>
        <div className="container flex space-x-40 justify-center mt-60  ">
          <div>
            <img
              src="https://static.wixstatic.com/media/528500_c78472072e45455193abcd052800bdd8~mv2.png/v1/fill/w_165,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bodog-logo-transp_png_auto%3Dcompress%2Cform.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/528500_1b2d3e2cb4ec420bbac85937e5f2baf6~mv2.png/v1/fill/w_189,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Carlsberg-Logo.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-52"
              src="https://5.imimg.com/data5/SELLER/Default/2021/2/OL/QC/CU/93953128/fuse-48-gm-500x500.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Marketing;
