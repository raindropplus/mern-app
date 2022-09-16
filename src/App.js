import React, { useState } from 'react';
import NewList from './Components/NewList/NewList';
import StudentList from './Components/studentList'
import './App.css';



const App = () => {
const [students,setStudents]=useState([])

  const addNewListHandler = (newList) => {
    setStudents(students.concat(newList));
    

};

  return(
    <div className='Student-List'>
      <h2>Students List</h2>
      <NewList onAddList={addNewListHandler}/>
      <StudentList students={students}/>
     
    </div>
  );
};

export default App;