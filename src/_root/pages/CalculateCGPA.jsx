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
  const [cgpa, setCgpa] = useState(0)



  const handleCalculate = () =>{
    // Calculation logic here
    let totalPoints = 0;
    let totalUnits = 0;

    courses.forEach(course => {
      let gradePoint = 0;
      switch(course.grade) {
        case 'A':
          gradePoint = 5;
          break;
        case 'B':
          gradePoint = 4;
          break;
        case 'C':
          gradePoint = 3;
          break;
        case 'D':
          gradePoint = 2;
          break;
        case 'E':
          gradePoint = 1;
          break;
        case 'F':
          gradePoint = 0;
          break;
        default:
          gradePoint = 0;
      }
      totalPoints += gradePoint * course.unit;
      totalUnits += course.unit;
    });

    const cgpa = (totalPoints / totalUnits).toFixed(2);
    alert(`Your CGPA is: ${cgpa}`);
    setCgpa(cgpa)
  }

 
  return (
    <section className='p-4 w-fit h-screen'>
      <h1 className='mt-4 text-[#1E5296] text-lg md:text-2xl font-OxygenBold'>Input your score to calculate your CGPA</h1>
      <table className='max-w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden mt-2 '>
        <thead>
          <tr>
            <th className='py-3 px-6 text-left bg-[#E2DFFA] text-[#344054] font-InterMedium text-[12px]  sm:text-xl'>Course Title</th>
            <th className='py-3 px-6 text-left bg-[#E2DFFA] text-[#344054] font-InterMedium text-[12px] sm:text-xl'>Unit</th>
            <th className='py-3 px-6 text-left bg-[#E2DFFA] text-[#344054] font-InterMedium text-[12px] hidden'>Course Code</th>
            <th className='py-3 px-6 text-left bg-[#E2DFFA] text-[#344054] font-InterMedium text-[12px] sm:text-xl'>Grade</th>
            <th className='py-3 px-6 text-left bg-[#E2DFFA] text-[#344054] font-InterMedium text-[12px]  sm:text-xl'>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            courses.map((course, index)=>(
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className='p-2 text-[12px]  sm:text-xl '>{course.courseTitle}</td>
                <td className='p-2 text-[12px] sm:text-xl text-center'>{course.unit}</td>
                <td className='p-2 text-[12px] sm:text-xl text-center hidden'>{course.courseCode}</td>
                <td className='p-2 text-[12px] sm:text-xl text-center'>{course.grade}</td>
                <td className='p-2 text-[12px]  sm:text-xl text-center'>{course.score}</td>

              </tr>
              
            ))
          }

        </tbody>
      </table>

      <div className='flex w-full justify-end mt-2'>
        <button className='w- p-3 border border-[#a6a5af] rounded-xl hover:bg-[#a6a5af] hover:cursor-pointer hover:text-white text-lg ' onClick={handleCalculate}>Calculate</button>
      </div>

      <div className='mt-4 flex flex-row justify-between bg-[#FFFFFF] px-5 py-5 rounded-3xl shadow-md '>
        <h1 className='font-InterBold text-[#1E5296]'>Total Courses: 9</h1>
        <h1 className='font-InterSemiBold text-[#1E5296]'>CGPA: {cgpa}</h1>
      </div>
    </section>
  )
}

export default CalculateCGPA