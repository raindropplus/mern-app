import React, { useState } from "react";
import './NewList.css'

const NewList = props => {
    const [name, setName]= useState('')
    const [classes, setClasses]= useState('')
    const [roll, setRoll]= useState('')
    const [address, setAddress]= useState('')


    const nameChangeHandelar=(event)=>{
        setName(event.target.value)       
    }
    const classesChangeHandelar=(event)=>{
        setClasses(event.target.value)       
    }
    const rollChangeHandelar=(event)=>{
        setRoll(event.target.value)       
    }
    const addressChangeHandelar=(event)=>{
        setAddress(event.target.value)       
    }


     const addListHandler = (event) => {
        event.preventDefault();

         const newList = {
            id: Math.random().toString(),
            name:name,
            classes: classes,
            roll: roll,
            address: address
         };
         props.onAddList(newList);
     };


    return(
        
        <form className="new-list" onSubmit={addListHandler}>
         <div>
              <label>Name:  </label>
              <input type="text" onChange={nameChangeHandelar} value={name}/> <br/>
          </div>
               <br/>
           <div>
                <label>Class:  </label>
                <input type="text" onChange={classesChangeHandelar} value={classes}/> <br/>
            </div>
            <br/>
            <div>
                <label>Roll :  </label>
                <input type="text" onChange={rollChangeHandelar} value={roll}/> <br/>
            </div>
            <br/>
            <div>
                <label>Address:  </label>
                <input type="text" onChange={addressChangeHandelar} value={address}/> <br/>
            </div>
            <br/>
            <button type="submit">
            Save
            </button>
        </form>
    );
};


export default NewList;