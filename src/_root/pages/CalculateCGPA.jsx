import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const sampleData = [
  {
    courseTitle: 'Introduction to Mass Communication',
    unit: 3,
    courseCode: 'MAS 101',
    grade: '-',
    score: ''
  },
  {
    courseTitle: 'Introduction to Reporting and Newswriting',
    unit: 3,
    courseCode: 'MAS 110',
    grade: '-',
    score: ''
  },
  {
    courseTitle: 'Ethics and Law of Mass Communication',
    unit: 3,
    courseCode: 'MAC 106',
    grade: 'B',
    score: 85
  },
  {
    courseTitle: 'History of Nigerian Mass Media',
    unit: 3,
    courseCode: 'MAC 120',
    grade: 'D',
    score: 67
  },
  {
    courseTitle: 'English for Mass Communication',
    unit: 3,
    courseCode: 'ENG 101',
    grade: 'B',
    score: 85
  },
  {
    courseTitle: 'Introduction to Anthropology',
    unit: 4,
    courseCode: 'ANT 001',
    grade: 'A',
    score: 45
  },
  {
    courseTitle: 'Man and Society',
    unit: 2,
    courseCode: 'SOC 117',
    grade: 'B',
    score: 69
  },
  {
    courseTitle: 'Introduction to Mass Communication II',
    unit: 3,
    courseCode: 'MAS 102',
    grade: 'B',
    score: 73
  }
];

const CalculateCGPA = () => {
  const [courses, setCourses] = useState([])
  useEffect(()=>{
    setCourses(sampleData)
  }, [])

 
  return (
    <section>
      <h1 className='mt-4 text-[#1E5296] text-lg font-OxygenBold'>Input your score to calculate your CGPA</h1>
      <table className='min-w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden mt-2 '>
        <thead>
          <tr>
            <th className='py-3 px-6 text-left bg-[#E2DFFA] text-[#344054] font-InterMedium'>Course Title</th>
            <th className='py-3 px-6 text-left bg-[#E2DFFA] text-[#344054] font-InterMedium'>Unit</th>
            <th className='py-3 px-6 text-left bg-[#E2DFFA] text-[#344054] font-InterMedium'>Course Code</th>
            <th className='py-3 px-6 text-left bg-[#E2DFFA] text-[#344054] font-InterMedium'>Grade</th>
            <th className='py-3 px-6 text-left bg-[#E2DFFA] text-[#344054] font-InterMedium'>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            courses.map((course, index)=>(
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className='p-2'>{course.courseTitle}</td>
                <td className='p-2 text-center'>{course.unit}</td>
                <td className='p-2 text-center'>{course.courseCode}</td>
                <td className='p-2 text-center'>{course.grade}</td>
                <td className='p-2 text-center'>{course.score}</td>

              </tr>
              
            ))
          }

        </tbody>
      </table>

      <div className='mt-4 flex flex-row justify-between bg-[#FFFFFF] px-5 py-5'>
        <h1 className='font-InterBold text-[#1E5296]'>Total Courses: 9</h1>
        <h1 className='font-InterSemiBold text-[#1E5296]'>CGPA: 3.79</h1>
      </div>
    </section>
  )
}

export default CalculateCGPA