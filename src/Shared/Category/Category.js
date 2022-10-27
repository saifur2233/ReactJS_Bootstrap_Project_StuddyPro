import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CourseSummaryCard from '../CourseSummaryCard/CourseSummaryCard';

const Category = () => {
    const courseCategory = useLoaderData();
    console.log("Got   "+courseCategory);
    
  return (
    <div>
         {
      courseCategory.map(course => <CourseSummaryCard 
        key={course._id}
        course={course}
      ></CourseSummaryCard>)
    }
    </div>
  )
}

export default Category