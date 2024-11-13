"use client";

import { Activities } from "@/components/activities/Activities";
import { StudentDashboardHeader } from "@/components/student-dashboard/StudentDashboardHeader";

export default function ActivitiesPage() {
  return (
    <div>
        <StudentDashboardHeader />
      <Activities />
    </div>
  );
}
