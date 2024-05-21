import React, { useContext } from 'react';
import { StudentContext } from '../Context/StudentContext';

const StudentList = () => {
  const { state } = useContext(StudentContext);

  return (
    <div>
      <h2>רשימת תלמידים</h2>
      <ul>
        {state.map((student) => (
          <li key={student.id}>
            {student.name} - {student.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
