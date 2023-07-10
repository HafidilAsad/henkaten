import React from "react";
import {
  PicCenterOutlined,
  UserSwitchOutlined,
  ShopOutlined,
  ToolOutlined,
  ImportOutlined,
} from "@ant-design/icons";

import axios from "axios";
import { useState, useEffect } from "react";

const TableHenkaten = () => {
  //pemanggilan henkaten today
  const [henkatenToday, setHenkatenToday] = useState([]);

  useEffect(() => {
    getHenkatenToday();
  }, []);

  const getHenkatenToday = async () => {
    try {
      const response = await axios.get("http://localhost:5000/henkatens");
      setHenkatenToday(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <table className="table">
        <thead className=" " style={{ background: "" }}>
          <tr className="align-items-center justify-content-center ">
            <th
              scope="col"
              className=" text-white  align-items-center justify-content-center text-center "
            >
              <div
                className=" align-items-center  justify-content-center text-center bg-primary shadow"
                style={{ borderRadius: "10% 30% 50% 70%", height: "7vh" }}
              >
                <p className="py-3"> HENKATEN </p>
              </div>
            </th>
            <th
              scope="col"
              className=" text-white  align-items-center justify-content-center text-center "
            >
              <div
                className=" align-items-center  justify-content-center text-center bg-primary shadow"
                style={{ borderRadius: "10% 30% 50% 70%", height: "7vh" }}
              >
                <p className="py-3"> PLAN </p>
              </div>
            </th>
            <th
              scope="col"
              className=" text-white  align-items-center justify-content-center text-center "
            >
              <div
                className=" align-items-center  justify-content-center text-center bg-primary shadow"
                style={{ borderRadius: "10% 30% 50% 70%", height: "7vh" }}
              >
                <p className="py-3"> UNPLAN </p>
              </div>
            </th>
            <th
              scope="col"
              className=" text-white  align-items-center justify-content-center text-center "
            >
              <div
                className=" align-items-center  justify-content-center text-center bg-primary shadow"
                style={{ borderRadius: "10% 30% 50% 70%", height: "7vh" }}
              >
                <p className="py-3"> LINE </p>
              </div>
            </th>
            <th
              scope="col"
              className=" text-white  align-items-center justify-content-center text-center "
            >
              <div
                className=" align-items-center  justify-content-center text-center bg-primary shadow"
                style={{
                  borderRadius: "10% 30% 50% 70%",
                  height: "7vh",
                  maxWidth: "110px",
                }}
              >
                <p className="py-1"> HENKATEN DESCRIPTION </p>
              </div>
            </th>
            <th
              scope="col"
              className=" text-white  align-items-center justify-content-center text-center "
            >
              <div
                className=" align-items-center  justify-content-center text-center bg-primary shadow"
                style={{
                  borderRadius: "10% 30% 50% 70%",
                  height: "7vh",
                  maxWidth: "120px",
                }}
              >
                <p className="py-1">COUNTER MEASURE </p>
              </div>
            </th>
            <th
              scope="col"
              className=" text-white  align-items-center justify-content-center text-center "
            >
              <div
                className=" align-items-center  justify-content-center text-center bg-primary shadow"
                style={{ borderRadius: "10% 30% 50% 70%", height: "7vh" }}
              >
                <p
                  className="py-3 mx-1 text-center  align-items-center  justify-content-center"
                  style={{ width: "4vh" }}
                >
                  {" "}
                  PIC{" "}
                </p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              scope="row"
              className="text-center bg-danger text-white"
              style={{ borderRadius: "10px" }}
            >
              <div className="d-flex ">
                <UserSwitchOutlined />
                <span className="mx-2">MAN</span>
              </div>
            </th>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr>
          {/* <tr>
            <th
              scope="row"
              className="text-center bg-warning text-white justify-content-center align-items-center"
              style={{ borderRadius: "10px" }}
            >
              <div className="d-flex">
                <PicCenterOutlined />
                <span className="mx-2  justify-content-center align-items-center">
                  MACHINE
                </span>
              </div>
            </th>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr> */}
          <tr>
            {henkatenToday
              .filter(({ id }) => id === 1)
              .map((item) => (
                <React.Fragment>
                  <th
                    key={item.id}
                    scope="row"
                    className="text-center bg-warning text-white justify-content-center align-items-center"
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="d-flex">
                      <PicCenterOutlined />
                      <span className="mx-2  justify-content-center align-items-center">
                        MACHINE
                      </span>
                    </div>
                  </th>
                  <td className="text-center fw-bold">{item.plan}</td>
                  <td className="text-center fw-bold">{item.unplan}</td>
                  <td className="text-center fw-bold">{item.place}</td>
                  <td className="text-center fw-bold">{item.description}</td>
                  <td className="text-center fw-bold">{item.countermeasure}</td>
                  <td className="text-center fw-bold">{item.pic}</td>
                </React.Fragment>
              ))}
          </tr>
          <tr>
            <th
              scope="row"
              className="text-center bg-primary text-white "
              style={{ borderRadius: "10px" }}
            >
              <div className="d-flex ">
                <ShopOutlined />
                <span className="mx-2">MATERIAL</span>
              </div>
            </th>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr>
          <tr>
            <th
              scope="row"
              className="text-center bg-success text-white"
              style={{ borderRadius: "10px" }}
            >
              <div className="d-flex  ">
                <ToolOutlined />
                <span className="mx-2">METHOD</span>
              </div>
            </th>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableHenkaten;
