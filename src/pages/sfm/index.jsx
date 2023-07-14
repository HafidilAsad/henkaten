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
import { Button, Layout, Menu, Modal, theme, Carousel } from "antd";
import { useState } from "react";
import { MenuUnfoldOutlined, DiffOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import accelerate from "../../assets/amazing.png";

import { useNavigate } from "react-router-dom";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const onChange = (currentSlide) => {
  console.log(currentSlide);
};

const { Header, Sider, Content } = Layout;
const Sfm = () => {
  const LogoutIcon = () => (
    <LogoutOutlined style={{ transform: "rotateY(180deg)" }} />
  );
  const [collapsed, setCollapsed] = useState(false);
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
            <p className=" text-white" style={{ marginTop: "-50px" }}>
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
        <Content>
          <div className="container">
            <div className=" justify-content-center align-items-center">
              <Carousel afterChange={onChange}>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sfm;
