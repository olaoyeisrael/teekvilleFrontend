"use client"
import { Inject, ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, Month } from '@syncfusion/ej2-react-schedule'
import React from 'react'

import {registerLicense} from '@syncfusion/ej2-base'

registerLicense(
    "Ngo9BigBOggjHTQxAR8/V1JFaF5cXGRCf1JpRGFGfV5ycUVHYFZSRXxbQU0SNHVRdkdmWH9fc3VVRWFZUURzWUdWYEg="
)

const numData = [1, 2, 3, 4, 5, 6 ,7 ]
const data = [
    {
        id: 1,
        Subject: "Archies - Bridge and Ovals",
        StartTime: new Date(2025, 1, 11, 10, 0),
        EndTime: new Date(2025, 1, 11, 12, 30),
        IsAllDay: false
    },
    {
        id: 2,
        Subject: "Zoom Call",
        StartTime: new Date(2025, 1, 10, 10, 0),
        EndTime: new Date(2025, 1, 10, 12, 30),
        IsAllDay: true,
        Status: 'Completed',
        Priority: 'High'
    }
]

const Schedule = () => {
  return (
    <section className='flex flex-1 overflow-auto flex-col h-screen px-[33px]'>
        <h1 className='text-[#1E5296] font-InterSemiBold text-2xl mt-2.5'>Schedule</h1>
        <div className="flex-1 overflow-auto p-2 rounded-lg mt-3.5">
    <ScheduleComponent eventSettings={{
        dataSource: data
    }}
    selectedDate={new Date(2025, 1, 13)}
    >
        <ViewsDirective>
            <ViewDirective option='Day' />
            <ViewDirective option='Week' />
            <ViewDirective option='Month'/>
        </ViewsDirective>
        <Inject services={[Day, Week, Month]} />
    </ScheduleComponent>
    </div>
    </section>
  
    
  )
}

export default Schedule