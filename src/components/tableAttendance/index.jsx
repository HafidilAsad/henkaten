import React from "react";
import { useEffect, useState, useRef } from "react";
import { Table } from "antd";
import axios from "axios";

const TableAttendance = () => {
  const [reportAttendance, setReportAttendance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/attendances");
        setReportAttendance(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Nama",
      dataIndex: "nama",
      key: "nama",
      align: "center",
    },
    {
      title: "NRP",
      dataIndex: "nrp",
      key: "nrp",
      align: "center",
    },
    {
      title: "Kesehatan",
      dataIndex: "kesehatan",
      key: "kesehatan",
      align: "center",
    },
    {
      title: "Kehadiran",
      dataIndex: "kehadiran",
      key: "kehadiran",
      align: "center",
    },
    {
      title: "Tanggal Hadir",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      render: (text) =>
        new Date(text).toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
    },
  ];

  const paginationConfig = {
    pageSizeOptions: ["10", "10", "20", "50"],
    defaultPageSize: 10,
    showSizeChanger: true,
    showTotal: (total) => `Total ${total} Data`,
  };

  const dataSource = reportAttendance
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map((item) => ({ ...item, key: item.id }));

  const tableRef = useRef(null);

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        className="customTable"
        ref={tableRef}
        pagination={paginationConfig}
      />
    </div>
  );
};

export default TableAttendance;
