import React from "react";
import logo from "../../assets/logo.png";

const HeaderKpi = () => {
  return (
    <div>
      <header
        className="bg-primary text-white text-center fs-2 fw-bold container-fluid "
        style={{ height: "10vh" }}
      >
        <div className="row">
          <div className="col text-start d-flex align-items-center justify-content-center"></div>
        </div>
        <p className="py-2"> KECELAKAAN KERJA TAHUN 2023</p>
      </header>
    </div>
  );
};

export default HeaderKpi;
