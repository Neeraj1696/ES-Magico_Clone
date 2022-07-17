import React from "react";

function Slider() {
  return (
    <div className="">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://static.wixstatic.com/media/035244_49fa1767a96f459f8a97bf165f96784b~mv2_d_4676_4871_s_4_2.jpg/v1/fill/w_250,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/035244_49fa1767a96f459f8a97bf165f96784b~mv2_d_4676_4871_s_4_2.jpg"
              className="d-block  w-200px h-200px  ml-96"
              alt="1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://static.wixstatic.com/media/035244_8ea2789a36434fa5abddc1502b977886~mv2_d_4676_4871_s_4_2.jpg/v1/fill/w_250,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/035244_8ea2789a36434fa5abddc1502b977886~mv2_d_4676_4871_s_4_2.jpg"
              className="d-block  w-200px h-200px ml-96"
              alt="2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://static.wixstatic.com/media/452d2a57460043efb5a41575736c9809.jpg/v1/crop/x_0,y_0,w_825,h_826/fill/w_250,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/man%204.jpg"
              className="d-block w-200px h-200px  ml-96"
              alt="3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="font-bold color-black">Jay, Founder at 2SV</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
