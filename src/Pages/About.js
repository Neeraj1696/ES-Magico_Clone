import React from "react";

function About() {
  return (
    <div className="about bg-black text-white pl-52 pr-20 ">
      <div className="about_heading">
        <div className="container     ">
          <h1 className="title text-5xl font-bold pt-28 ml-20 ">About</h1>
          <div className="line border-4 w-36 ml-20 mt-6"></div>
          <h3 className="title text-2xl font-bold mt-9 ml-20">Who We are</h3>
          <p className="font-weight text-xl  mt-9 ml-20 ">
            We started like you did: a potent mixture of passion and work ethic,
            combined with the insight to recognize a problem and envision a
            solution. In our case, we saw a lack of transparency and efficiency
            in digital agencies. Too many design and development companies
            slapped a shiny coat a paint on a poorly made product, then bailed,
            leaving their clients high and dry.
          </p>
          <p className="font-weight text-xl mt-9 ml-20 ">
            Because while our business cards might say we’re designers,
            engineers, marketers, and developers, really we all have the same
            job title: enablers.
            <strong>
              We will take care of technology, product, marketing or strategy–
            </strong>
            <i> filling the missing part of your puzzle.</i> While you focus
            solely on business. Every website we design, every app we build, and
            every solution we create set you off for the next big phase in your
            venture's growth.
          </p>
          <p className="font-weight text-xl mt-9 ml-20 pb-10 ">
            It’s no surprise that our web design clients are often the same
            companies who hired us for UI/UX projects, because who can explain
            the product better than the people who designed it? We’re a tech
            company that believes a great website should efficiently convert
            visitors to customers while providing a delightful experience that’s
            true to the brand. Good UX leads to higher conversion rates. That’s
            why we have UX designers collaborate with web designers on all
            website projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
