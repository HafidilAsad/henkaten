import React from "react";
import { Modal } from "antd";
import { Button, Form, Input, Space, Select } from "antd";
import { DiffOutlined } from "@ant-design/icons";
import axios from "axios";

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};
const ModalHenkatenToday = ({ showModal, hideModal, judulModal }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // Make the POST request using Axios
      const response = await axios.post("your-api-endpoint", values);
      console.log(response.data); // Optionally, handle the response

      // Reset the form fields after successful submission
      form.resetFields();
    } catch (error) {
      console.error(error);
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
      width={1000}
    >
      <div className="card">
        <div className="card-body">
          <Form
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="on"
            onFinish={onFinish}
          >
            <Form.Item
              name="kategori"
              label={
                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Kategori
                </span>
              }
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select className=" ">
                <Select.Option value="MAN">MAN</Select.Option>
                <Select.Option value="MACHINE">MACHINE</Select.Option>
                <Select.Option value="MATERIAL">MATERIAL</Select.Option>
                <Select.Option value="METHOD">METHOD</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="plan"
              label={
                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Plan
                </span>
              }
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="unplan"
              label={
                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Unplan
                </span>
              }
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="line"
              label={
                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Line
                </span>
              }
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="henkatendescription"
              label={
                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Henkaten Description
                </span>
              }
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="countermeasure"
              label={
                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Counter Measure
                </span>
              }
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="pic"
              label={
                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                  PIC
                </span>
              }
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Space>
                <SubmitButton form={form} />
                <Button htmlType="reset">Reset</Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default ModalHenkatenToday;
