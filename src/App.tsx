import React from "react";
import styled from 'styled-components';

const GreenButton = styled.button`
background: green;
`

export const App = () =>{

    const [count, setCount] = React.useState(0);

    return( <div>  
        <GreenButton onClick={()=>setCount(count+1)}> time {count} </GreenButton>
    </div>)
}