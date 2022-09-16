import React, { Component, useState } from 'react';



const  EventCompnent=() =>{
   const [countNumber, setCountNumber]=useState(0)
   function clickMe() {
    setCountNumber(countNumber+1)
   }

   function reset(params) {
  
    setCountNumber(0)
   }

    return (
        <div>
        <label>Click No-{countNumber+0}</label><br/><br/>
        <button type='button' onClick={clickMe}>click me</button>
        <button type='button' onClick={reset}>Reset</button>

        </div>
    );
}

export default EventCompnent;
