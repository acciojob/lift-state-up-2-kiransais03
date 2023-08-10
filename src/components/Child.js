
import React from "react";

const Child = ({inputValue,setInputValue})=>{

    return (<div className="child">
        <h1>Child Component</h1>
    <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
    </div>)
}

export default Child