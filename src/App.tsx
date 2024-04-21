import React from "react"

export const App = () =>{

    const [count, setCount] = React.useState(0);

    return( <div> APP 
        <button onClick={()=>setCount(count+1)}> time {count} </button>
    </div>)
}