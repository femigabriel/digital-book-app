import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Header at the top */}
      <Header />

      {/* Sidebar and Main Content Area */}
      <div className="flex pt-[90px]">
        <Sidebar />

        <main className="flex-1 p-4 overflow-y-auto bg-[#FEE7EF] h-screen ml-60">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
