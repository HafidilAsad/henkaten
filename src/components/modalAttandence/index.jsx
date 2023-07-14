import React from "react";
import { Modal, notification } from "antd";
import { DiffOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space, Tooltip, Typography } from "antd";
import TableAttendance from "../tableAttendance";
import axios from "axios";
import { useForm } from "antd/lib/form/Form";

const ModalAttendance = ({ showModal, hideModal, judulModal }) => {
  const { Option } = Select;

  const [form] = useForm();
  const onFinish = async (values) => {
    try {
      // Make the POST request using Axios
      const response = await axios.post(
        "http://localhost:5000/addattendances",
        values
      );
      console.log(values);
      console.log(response.data); // Optionally, handle the response

      // Reset the form fields after successful submission
      form.resetFields();
      notification.success({
        message: "Absensi Berhasil di Submit",
        description: "Attendance submitted successfully!",
      });
    } catch (error) {
      console.error(error);
      notification.error({
        message: "Absensi Gagal di Submit",
        description: "Attendance submitted Gagal!",
      });
      // Handle the error if the request fails
    }
  };
  return (
    <Modal
      open={showModal}
      onCancel={hideModal}
      centered
      destroyOnClose
      title={
        <span className="d-flex  fw-bold fs-5 justify-content-center align-items-center">
          <DiffOutlined style={{ marginRight: 8, color: "blue" }} />
          {judulModal}
        </span>
      }
      width={1600}
      bodyStyle={{ maxHeight: "5000px", overflowY: "auto" }}
    >
      <div className="card">
        <div className="card-header fw-bold ">TABEL ABSENSI</div>
        <div className="card-body" style={{ maxHeight: 500, overflow: "auto" }}>
          <TableAttendance />
        </div>
      </div>
      <div className="card my-3">
        <div className="card-header fw-bold">SUBMIT ABSESNSI</div>
        <div className="card-body">
          <Form
            form={form}
            name="complex-form"
            onFinish={onFinish}
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 1700,
            }}
          >
            <div className="d-flex">
              <Form.Item
                label={
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Name
                  </span>
                }
                name="nama"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    NRP
                  </span>
                }
                name="nrp"
                rules={[{ required: true, message: "Please enter your NRP" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Team
                  </span>
                }
                name="tim"
                rules={[{ required: true, message: "Please enter your team" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={
                  <span
                    style={{ fontWeight: "bold", fontSize: "16px", width: 100 }}
                  >
                    Kesehatan
                  </span>
                }
                name="kesehatan"
                rules={[
                  { required: true, message: "Please enter your kesehatan" },
                ]}
              >
                <Select className="px-5 ">
                  <Select.Option value="Yes">Yes</Select.Option>
                  <Select.Option value="No">No</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label={
                  <span
                    style={{ fontWeight: "bold", fontSize: "16px", width: 100 }}
                  >
                    Kehadiran
                  </span>
                }
                name="kehadiran"
                rules={[
                  { required: true, message: "Please enter your kehadiran" },
                ]}
              >
                <Select className="px-5 ">
                  <Select.Option value="Yes">Yes</Select.Option>
                  <Select.Option value="No">No</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label=" "
                colon={false}
                className=""
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginLeft: "50px",
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAttendance;
