import React from "react";
import { Modal } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const PpsModal = ({ showModal, hideModal, judulModal, imageUrl }) => {
  return (
    <Modal
      open={showModal}
      onCancel={hideModal}
      centered
      destroyOnClose
      title={
        <span className="d-flex  fw-bold fs-5 justify-content-center align-items-center">
          <InfoCircleOutlined style={{ marginRight: 8, color: "blue" }} />
          {judulModal}
        </span>
      }
      width={1000}
    >
      <div className="card">
        <div className="card-body">
          <img src={imageUrl} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </Modal>
  );
};

export default PpsModal;
