import React from 'react';
import '../css/StdMat.css';

const StdMat = () => {
  const courses = [
    { title: "10th Computer Science classes", details: [] },
    { title: "11th Computer Science class", details: [] },
    { title: "12th Computer Science class", details: [] },
    { title: "Programming Class", details: [] }
  ];

  return (
    <div id='bdy'> 
         <div className="std-mat"> {/* Add a class name for styling */}
      {courses.map((course) => (
        <div key={course.title} className="course"> {/* Add a class name for styling */}
          <a href="#">{course.title}</a>
          <div className="course-details"> {/* Add a class name for styling */}
            {/* Add logic to display course details if populated */}
          </div>
        </div>
      ))}
    </div>
    </div>

  );
};

export default StdMat;
