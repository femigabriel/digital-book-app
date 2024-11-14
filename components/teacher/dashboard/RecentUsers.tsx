import React, { useState } from "react";
import { Input, Avatar, Tabs, Table, Button } from "antd";
import {
  SearchOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  UserOutlined
} from "@ant-design/icons";

const RecentUsers = () => {
  const allUsers = [
    { name: "Marvin McKinney", email: "Email@example.com", date: "11/11/2024", role: "Teacher" },
    { name: "Savannah Nguyen", email: "Email@example.com", date: "11/11/2024", role: "Child" },
    // Add more users with roles
  ];

  const [activeTab, setActiveTab] = useState("All");

  const filteredUsers = allUsers.filter((user) => 
    activeTab === "All" || user.role === activeTab
  );

  const columns = [
    {
      title: "Image",
      dataIndex: "avatar",
      key: "avatar",
      render: () => <Avatar size={40} icon={<UserOutlined />} />,
    },
    {
      title: "Users",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex space-x-2 justify-center">
          <Button icon={<EyeOutlined />} />
          <Button icon={<EditOutlined />} />
          <Button icon={<DeleteOutlined />} />
        </div>
      ),
    },
  ];

  return (
    <div className="p-4 bg-white rounded shadow recent-users">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recent Users</h3>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          className="w-1/3"
        />
      </div>
      <Tabs
        defaultActiveKey="All"
        onChange={(key) => setActiveTab(key)}
        type="card"
      >
        <Tabs.TabPane tab="All" key="All" />
        <Tabs.TabPane tab="Teachers" key="Teacher" />
        <Tabs.TabPane tab="Children" key="Child" />
      </Tabs>
      <Table
        columns={columns}
        dataSource={filteredUsers}
        rowKey={(record) => record.email}
        pagination={{ pageSize: 5 }}
        className="mt-4"
      />
    </div>
  );
};

export default RecentUsers;
