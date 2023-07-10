import React from "react";
import logo from "../../assets/logo.png";
import accelerate from "../../assets/accelerate.png";

const HeaderHenkaten = () => {
  return (
    <div>
      <header
        className="container-fluid header-bg bg-primary align-items-center"
        style={{ paddingTop: 10 }}
      >
        <div className="row">
          <div className="col text-start d-flex alig-items-center">
            <img src={logo} style={{ height: 30 }} alt="" className="my-3" />
            <span
              style={{ paddingTop: 0, paddingLeft: 20 }}
              className="text-white"
            ></span>
          </div>
          <div className="col text-center">
            <p className="text-white fs-5 fw-bold" style={{ padding: 0 }}>
              HENKATEN BOARD
            </p>
            <span className="text-white fw-bold fs-6" style={{ padding: 0 }}>
              AMAZING NUSAMETAL - NAVIGATE ACCELERATE TO RISE
            </span>
          </div>
          <div className="col text-end">
            <img
              src={accelerate}
              style={{ height: 50, width: 150, margin: 0 }}
              className="my-3"
              alt="Right "
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderHenkaten;
