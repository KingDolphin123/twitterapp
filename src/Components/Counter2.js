import React, {useState} from 'react';

const Counter2 = () => {
    const [count,setCount]=useState(0);
    const [str,setstr]=useState('false')
    const changestring = () => {
        if(str==='false'){
            setstr('true')
        }
        else if (str ==='true')
         setstr('false')
    }
    return (
        <div>
            <h1>String: {str}</h1>
            <h1>Counter: {count} </h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>Increase</button>
            <button onClick={()=>{
                setCount(count-1);
            }}>Decrease</button>
            <button onClick={()=>{
                console.log('hello')
            }}>Hello</button>
            <button onClick={()=>{
                setCount(0)
            }}>Set to zero</button>
            <button onClick={changestring}>change string</button>
        </div>
    )
}
export default Counter2;