import React from "react";
import Footer from "./Footer";

import Products from "./Products";
import Productsmultipage from "./Productsmultipage";
import Navbar from "./Navbar";
import About from "./About";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home ml-80 mt-60 ">
        <div className="home_componets">
          <div className="heading">
            <h1 className="text-5xl text-cyan-800">
              Product <strong>Incubator</strong>
            </h1>

            <h1 className="text-5xl mt-3 text-cyan-800">
              Innovation <strong>Enabler</strong>
            </h1>
            <div>
              <h4 className="text-2xl mt-20">Design Create Market & Grow</h4>
            </div>
          </div>

          <div className="video">
            <iframe
              className="border-none mt-48"
              width="900px"
              height="500px"
              src="https://video.wixstatic.com/video/911316_1f89a5eaa1cf407e884a5ddc1f207ea5/1080p/mp4/file.mp4"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
          <Products />
        </div>
      </div>
      <Productsmultipage />
      <About />
      <Footer />
    </>
  );
}

export default Home;
