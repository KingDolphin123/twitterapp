import React, {useState} from 'react';

const Counter2 = () => {
    const [count,setCount]=useState(0);
    return (
        <div>
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
        </div>
    )
}
export default Counter2;