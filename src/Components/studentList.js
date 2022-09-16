import React from 'react';

import './studentlist.css'

function StudentList(props) {
    return (
        
        <table width={"100%"} style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
        <thead>
            <tr style={{ "border": "1px solid black"}}>
                <th>Name</th>
                <th>Class</th>
                <th>Roll</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            {props.students.map(student => (<tr style={{ "border": "1px solid black"}}>
                <td>{student.name}</td>
                <td>{student.classes}</td>
                <td>{student.roll}</td>
                <td>{student.address}</td>
            </tr>))}
        </tbody>

    </table>



    );
}

export default StudentList;