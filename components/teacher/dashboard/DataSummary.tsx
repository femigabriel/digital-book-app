import React from 'react';
import { UserOutlined, BookOutlined, AppstoreOutlined } from '@ant-design/icons';

const DataSummary = () => {
  const summaryItems = [
    { label: 'Teachers', value: 102, description: 'Overall number of teachers', icon: <UserOutlined />, color: 'bg-yellow-100' },
    { label: 'Children', value: 448, description: 'Overall number of children', icon: <UserOutlined />, color: 'bg-blue-100' },
    { label: 'All Users', value: 550, description: 'Overall users', icon: <BookOutlined />, color: 'bg-green-100' },
    { label: 'Activities', value: 6, description: 'Overall activities', icon: <AppstoreOutlined />, color: 'bg-teal-100' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {summaryItems.map((item, index) => (
        <div key={index} className={`p-4 rounded shadow ${item.color} flex items-center`}>
          <div className="text-4xl mr-4">{item.icon}</div>
          <div>
            <p className="text-xl font-bold">{item.value}</p>
            <p className="text-gray-600">{item.label}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataSummary;
