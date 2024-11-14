// pages/TeachersDashboard.tsx

import React from "react";
import DashboardLayout from "../layout/TeachersDashboardLayout";
import DataSummary from "./DataSummary";
import ActivitiesChart from "./ActivitiesChart";
import RecentUsers from "./RecentUsers";

const TeachersDashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-3 gap-4 ">
        {/* Data Summary Section */}
        <div className="col-span-2">
          <DataSummary />
        </div>

        {/* Activities Chart Section */}
        <ActivitiesChart />
      </div>

      {/* Recent Users Table */}
      <div className="mt-4">
        <RecentUsers />
      </div>
    </DashboardLayout>
  );
};

export default TeachersDashboard;
