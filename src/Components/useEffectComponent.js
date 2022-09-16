import React, {useEffect, useState} from 'react';


export default function UseEffectComponent(params) {

    const [count, setCount]=useState(0)

    const clickme=()=>{
        setCount(count+1)
    }




    useEffect(()=>{
        console.log('---------loading--------');
    },[count])

    return <button type='button' onClick={clickme}>cleck me {count}</button>
    
}
