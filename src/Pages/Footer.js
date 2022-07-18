import React from "react";

function Footer() {
  return (
    <>
      <div className="footer text-white bg-slate-900 pt-20 w-full ">
        <div>
          <div className="heading_left ">
            <span className="text-5xl font-bold ml-72   ">Let's start</span>
            <div className="line border-4 w-36 ml-72 mt-6   "></div>
            <br />
            <span className="ml-72 text-lg ">Create@esmagico.in</span>
          </div>
          <div className="right float-right mr-24 mb-20">
            <a className="mr-8 " href="/">
              twitter
            </a>
            <a className="mr-8  " href="/">
              Facebook
            </a>
            <div>
              <a className="mr-8 " href="/">
                Clients
              </a>
              <a className="mr-8 " href="/">
                Work
              </a>
              <a className="mr-8 " href="/">
                About
              </a>
            </div>
          </div>
        </div>
        <div>
          <span className="ml-72 ">501A, Pinnacle Corporation Park, BKC</span>
          <br />
          <span className="ml-72 ">Bandra East,Mumbai - 400051</span>
        </div>

        <div className="copy_right mt-10 text-center ml-96 pb-10">
          <span>©2022 Es Magico Experiences Pvt Ltd</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
