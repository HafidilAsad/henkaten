import {
  MenuFoldOutlined,
  PicRightOutlined,
  DashboardOutlined,
  VerticalAlignBottomOutlined,
  BorderInnerOutlined,
  LineChartOutlined,
  FormOutlined,
  LogoutOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Modal, theme } from "antd";
import { useState } from "react";
import { MenuUnfoldOutlined, DiffOutlined } from "@ant-design/icons";
import logo from "../../assets/astracopy.png";
import LayouCasting from "../../assets/LayoutCasting.jpg";
import Pps from "../../assets/pps2.jpg";
import SkillMap from "../../assets/SkillMap.jpg";
import FormAttendance from "../../assets/FormAttendance.jpg";
import PpsModal from "../modalCard";
import ModalAttendance from "../modalAttandence";
import accelerate from "../../assets/amazing.png";
import { useNavigate } from "react-router-dom";
import Clock from "../clock";
import CurrentDate from "../currentDate";
import TableHenkaten from "../tableHenkaten";
import FixTime from "../../assets/FixTime.jpg";
import PointCheck from "../../assets/PointCheck.jpg";
import ModalHenkatenToday from "../modalHenkatenToday";
import DraggableDot from "../dragableDot";
import fotoade from "../../assets/paksuyud.jpg";

import "../sideBar/index.css";

const { Header, Sider, Content } = Layout;
const Sidebar = () => {
  const LogoutIcon = () => (
    <LogoutOutlined style={{ transform: "rotateY(180deg)" }} />
  );
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //Fnction Menu
  const [activeKey, setActiveKey] = useState("1");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleMenuClick = (e) => {
    setActiveKey(e.key);
  };
  // -------------------------------------------------------------------------------------------
  const [showModal, setShowModal] = useState(false);

  // Function to handle image click
  const handleImageClick = () => {
    setShowModal(true);
  };

  // Function to hide the modal
  const hideModal = () => {
    setShowModal(false);
  };
  // -------------------------------------------------------------------------------------------
  const [showModal2, setShowModal2] = useState(false);

  // Function to handle image click
  const handleImageClick2 = () => {
    setShowModal2(true);
  };

  // Function to hide the modal
  const hideModal2 = () => {
    setShowModal2(false);
  };
  // -------------------------------------------------------------------------------------------
  const [showModal3, setShowModal3] = useState(false);

  // Function to handle image click
  const handleImageClick3 = () => {
    setShowModal3(true);
  };

  // Function to hide the modal
  const hideModal3 = () => {
    setShowModal3(false);
  };
  // -------------------------------------------------------------------------------------------
  const [showModal4, setShowModal4] = useState(false);

  // Function to handle image click
  const handleImageClick4 = () => {
    setShowModal4(true);
  };

  // Function to hide the modal
  const hideModal4 = () => {
    setShowModal4(false);
  };
  // -------------------------------------------------------------------------------------------
  const [showModal5, setShowModal5] = useState(false);

  // Function to handle image click
  const handleImageClick5 = () => {
    setShowModal5(true);
  };

  // Function to hide the modal
  const hideModal5 = () => {
    setShowModal5(false);
  };
  // -------------------------------------------------------------------------------------------
  const [showModalHenkaten, setShowModalHenkaten] = useState(false);

  // Function to handle image click
  const handleImageClickHenkaten = () => {
    setShowModalHenkaten(true);
  };

  // Function to hide the modal
  const hideModalHenkaten = () => {
    setShowModalHenkaten(false);
  };

  let contentComponent = null;

  //   if (activeKey === "1") {
  //     contentComponent = <ContentSdb />;
  //   } else if (activeKey === "3") {
  //     contentComponent = <ContentReport />;
  //   } else if (activeKey === "2") {
  //     contentComponent = <ContentDetail />;
  //   } else if (activeKey === "4") {
  //     contentComponent = <ContentListMaintenance />;
  //   } else if (activeKey === "5") {
  //     contentComponent = <ContentChart />;
  //   } else if (activeKey === "6") {
  //     contentComponent = <ContentTonage />;
  //   } else if (activeKey === "7") {
  //     handleLogout();
  //   }

  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "HENKATEN BOARD",
    },
    {
      key: "2",
      icon: <PicRightOutlined />,
      label: "MISSION BOARD",
    },
    {
      key: "3",
      icon: <VerticalAlignBottomOutlined />,
      label: "MAIN KPI",
    },
    {
      key: "4",
      icon: <BorderInnerOutlined />,
      label: "SUB KPI",
    },
    {
      key: "5",
      icon: <LineChartOutlined />,
      label: "PROSES KPI PATROL TS",
    },
    {
      key: "6",
      icon: <FormOutlined />,
      label: "Input Tonage",
    },
    {
      key: "7",
      icon: <LogoutIcon />,
      label: "Logout",
    },
  ];

  return (
    <Layout style={{ width: "100%", height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsedWidth="0"
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[activeKey]}
          onClick={handleMenuClick}
          items={menuItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
          }))}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 0,
            background: "blue",
            height: "10vh",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                marginLeft: "10px",
                color: "white", // Adjust the margin as per your requirement
              }}
            />

            <img
              src={logo}
              alt=""
              style={{
                width: 200, // Adjust the width as per your requirement
                height: 60, // Adjust the height as per your requirement
                marginLeft: "16px",
              }}
            />
          </div>
          <div style={{ textAlign: "center", paddingTop: 50 }} className="">
            <h3 className="fw-bold fs-1  text-white">HENKATEN BOARD</h3>
            <p className=" text-white" style={{ marginTop: "-40px" }}>
              AMAZING NUSAMETAL - NAVIGATE ACCELERATE TO RISE
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "25px",
            }}
          >
            <img
              src={accelerate}
              alt=""
              style={{
                width: 200, // Adjust the width as per your requirement
                height: 60, // Adjust the height as per your requirement
              }}
            />
          </div>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div
            className="d-flex justify-content-end fw-bold"
            style={{ marginTop: "-17px" }}
          >
            <div
              className=" bg-white fs-5 d-flex  align-items-center justify-content-center shadow"
              style={{ width: "300px" }}
            >
              Date :
              <span className="px-1">
                <CurrentDate />
              </span>
            </div>
          </div>
          <div className="">
            <div className="row my-1" style={{ marginLeft: "-1vh" }}>
              <div className="col">
                <div
                  className=" fs-4 fw-bold  text-white align-items-center justify-content-center text-center bg-primary py-2"
                  style={{
                    borderTopRightRadius: "90px",
                  }}
                  onClick={handleImageClickHenkaten}
                >
                  <div
                    className="d-flex align-items-center justify-content-center "
                    style={{ cursor: "pointer" }}
                  >
                    <DiffOutlined />
                    <span className="px-3">HENKATEN TODAY</span>
                  </div>
                </div>
                <ModalHenkatenToday
                  showModal={showModalHenkaten}
                  hideModal={hideModalHenkaten}
                  judulModal="FORM HENKATEN TODAY"
                />
                <div className="card shadow">
                  <div className="card-body">
                    <TableHenkaten />
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className=" fs-4 fw-bold  text-white align-items-center justify-content-center text-center bg-primary py-2"
                  style={{
                    borderTopRightRadius: "90px",
                  }}
                >
                  <div>LAYOUT HENKATEN </div>
                </div>
                <div className="card shadow">
                  <div className="card-body">
                    <img
                      src={LayouCasting}
                      alt=""
                      style={{
                        width: "90vh", // Adjust the width as per your requirement
                        height: "28vh", // Adjust the height as per your requirement
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-2" style={{ marginLeft: "-1vh" }}>
              <div className="col">
                <div
                  className=" fs-4 fw-bold  text-white align-items-center justify-content-center text-center bg-primary py-2"
                  style={{
                    borderTopRightRadius: "90px",
                  }}
                >
                  <div>PPS</div>
                </div>
                <div className="card shadow">
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <img
                      src={Pps}
                      alt=""
                      style={{
                        width: "10vh", // Adjust the width as per your requirement
                        height: "70px",
                        cursor: "pointer", // Adjust the height as per your requirement
                      }}
                      onClick={handleImageClick}
                    />
                  </div>
                  <PpsModal
                    showModal={showModal}
                    hideModal={hideModal}
                    judulModal="PPS INFORMATION"
                    imageUrl={Pps} // Pass the image URL as a prop
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className=" fs-4 fw-bold  text-white align-items-center justify-content-center text-center bg-primary py-2"
                  style={{
                    borderTopRightRadius: "90px",
                  }}
                >
                  <div>ATTENDANCE</div>
                </div>
                <div className="card shadow">
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <img
                      src={FormAttendance}
                      alt=""
                      style={{
                        width: "10vh", // Adjust the width as per your requirement
                        height: "70px",
                        cursor: "pointer", // Adjust the height as per your requirement
                      }}
                      onClick={handleImageClick2}
                    />
                  </div>
                  <ModalAttendance
                    showModal={showModal2}
                    hideModal={hideModal2}
                    judulModal="ATTENDANCE INFORMATION"
                    // Pass the image URL as a prop
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className=" fs-4 fw-bold  text-white align-items-center justify-content-center text-center bg-primary py-2"
                  style={{
                    borderTopRightRadius: "90px",
                  }}
                >
                  <div>SKILL MAP</div>
                </div>
                <div className="card shadow">
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <img
                      src={SkillMap}
                      alt=""
                      style={{
                        width: "10vh", // Adjust the width as per your requirement
                        height: "70px",
                        cursor: "pointer", // Adjust the height as per your requirement
                      }}
                      onClick={handleImageClick3}
                    />
                  </div>
                  <PpsModal
                    showModal={showModal3}
                    hideModal={hideModal3}
                    judulModal="SKILL MAP INFORMATION"
                    imageUrl={SkillMap} // Pass the image URL as a prop
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className=" fs-4 fw-bold  text-white align-items-center justify-content-center text-center bg-primary py-2"
                  style={{
                    borderTopRightRadius: "90px",
                  }}
                >
                  <div>FIX TIME POSITION </div>
                </div>
                <div className="card shadow">
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <img
                      src={FixTime}
                      alt=""
                      style={{
                        width: "10vh", // Adjust the width as per your requirement
                        height: "70px",
                        cursor: "pointer", // Adjust the height as per your requirement
                      }}
                      onClick={handleImageClick4}
                    />
                  </div>
                  <PpsModal
                    showModal={showModal4}
                    hideModal={hideModal4}
                    judulModal="FIX TIME POSITION INFORMATION"
                    imageUrl={FixTime} // Pass the image URL as a prop
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className=" fs-5 fw-bold  text-white align-items-center justify-content-center text-center bg-primary py-2"
                  style={{
                    borderTopRightRadius: "90px",
                  }}
                >
                  <div>POINT CHECK HENKATEN </div>
                </div>
                <div className="card shadow">
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <img
                      src={PointCheck}
                      alt=""
                      style={{
                        width: "10vh", // Adjust the width as per your requirement
                        height: "70px",
                        cursor: "pointer", // Adjust the height as per your requirement
                      }}
                      onClick={handleImageClick5}
                    />
                  </div>
                  <PpsModal
                    showModal={showModal5}
                    hideModal={hideModal5}
                    judulModal="POINT CHECK HENKATEN INFORMATION"
                    imageUrl={PointCheck} // Pass the image URL as a prop
                  />
                </div>
              </div>
            </div>
            <div className="row my-2" style={{ marginLeft: "-1vh" }}>
              <div className="col">
                <div
                  className=" fs-6 fw-bold   align-items-center justify-content-center text-center  py-2"
                  style={{ border: "4px solid #007BFF" }}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <label className="m-1 text-center text-primary ">
                      HENKATEN COIN
                    </label>
                    <label className="m-1 text-center text-primary">
                      STATIONARY
                    </label>
                  </div>
                </div>
                <div className="card shadow">
                  <div
                    className="card-body mx-4"
                    style={{ marginTop: "-10px" }}
                  >
                    <div className="row d-flex align-items-center justify-content-center text-center my-1">
                      <div className="col d-flex">
                        <DraggableDot />
                        <div className="dot_red mx-1"></div>
                        <div className="dot_red mx-1"></div>
                        <img
                          src={fotoade}
                          alt=""
                          style={{ width: 10, height: 10, borderRadius: "50%" }}
                        />
                        <img
                          src={fotoade}
                          alt=""
                          style={{ width: 10, height: 10, borderRadius: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="row align-items-center justify-content-center text-center my-1">
                      <div className="col d-flex">
                        <div className="dot_yellow mx-1"></div>
                        <div className="dot_yellow mx-1"></div>
                        <div className="dot_yellow mx-1"></div>
                      </div>
                      <div className="col"></div>
                    </div>
                    <div className="row align-items-center justify-content-center text-center my-1 ">
                      <div className="col d-flex">
                        <div className="dot_blue mx-1"></div>
                        <div className="dot_blue mx-1"></div>
                        <div className="dot_blue mx-1"></div>
                      </div>
                      <div className="col"></div>
                    </div>
                    <div className="row align-items-center justify-content-center text-center my-1 ">
                      <div className="col d-flex">
                        <div className="dot_green mx-1"></div>
                        <div className="dot_green mx-1"></div>
                        <div className="dot_green mx-1"></div>
                      </div>
                      <div className="col"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className=" fs-4 fw-bold  text-white align-items-center justify-content-center text-center  py-2 bg-danger"
                  style={{
                    borderTopRightRadius: "90px",
                  }}
                >
                  <div>MAN</div>
                </div>
                <div className="card shadow">
                  <div className="card-body">
                    <p>body</p> <p>body</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className=" fs-4 fw-bold  text-white align-items-center justify-content-center text-center  py-2 bg-warning"
                  style={{
                    borderTopRightRadius: "90px",
                  }}
                >
                  <div>MACHINE</div>
                </div>
                <div className="card shadow">
                  <div className="card-body">
                    <p>body</p> <p>body</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className=" fs-4 fw-bold  text-white align-items-center justify-content-center text-center bg-primary py-2 "
                  style={{
                    borderTopRightRadius: "90px",
                  }}
                >
                  <div>MATERIAL</div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <p>body</p> <p>body</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className=" fs-4 fw-bold  text-white align-items-center justify-content-center text-center bg-success py-2"
                  style={{
                    borderTopRightRadius: "90px",
                  }}
                >
                  <div>METHOD </div>
                </div>
                <div className="card shadow">
                  <div className="card-body">
                    <p>body</p> <p>body</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
