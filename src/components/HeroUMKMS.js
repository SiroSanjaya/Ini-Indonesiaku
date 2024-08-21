import React from "react";
import "../styles/Destinasi.css";
import data from "../data/umkm2.json";

const HeroUMKMS = (props) => {
  const umkm = data.umkms;
  return (
    <div>
      {" "}
      {umkm
        .filter((umkm) => umkm.id == props.umkmID)
        .map((filteredumkm) => (
          <div
            className="hero-section"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(70, 70, 70, 0.5)),url('/images/hero/${filteredumkm.hero}')`,
            }}
          >
            <div className="hero-text">
              <h1 className="header-text"> {filteredumkm.tag} </h1>{" "}
            </div>{" "}
          </div>
        ))}{" "}
    </div>
  );
};

export default HeroUMKMS;