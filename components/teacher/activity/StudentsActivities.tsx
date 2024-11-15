import React from 'react'
import DashboardLayout from '../layout/TeachersDashboardLayout'
import TeacherScoreSheet from './TeacherScoreSheet'


export const StudentsActivities = () => {
  return (
    <DashboardLayout>
        <TeacherScoreSheet />
    </DashboardLayout>
  )
}
