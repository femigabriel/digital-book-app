import React from 'react'
import DashboardLayout from '../layout/TeachersDashboardLayout'
import TeacherScoreSheet from '../activity/TeacherScoreSheet'
import StudentsOverview from './StudentsOverview'

export const Student = () => {
  return (
    <DashboardLayout>
        {/* <TeacherScoreSheet /> */}
        <StudentsOverview />
    </DashboardLayout>
  )
}
