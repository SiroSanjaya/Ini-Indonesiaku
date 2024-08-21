import React from "react";

import ImageHero from "../assets/images/img-hero.jpg";
import ImageHero_ from "../assets/images/img-hero-frame.jpg";
import '../assets/scss/style.scss';


export default function Hero(props) {
  

  return (
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Enjoy your Holiday <br />
              With Best <br/>Staycasion
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{lineHeight:"170%"}}
            >
              Kami merekomendasikan staycasion terbaik untuk anda untuk membuat 
              pengalaman liburan anda yang indah bersama keluarga dan orang terdekat
            </p>
          </div>

          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
  );
}
