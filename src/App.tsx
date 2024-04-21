import React from "react";
import styled from 'styled-components';

const ButtonDiv = styled.div`
display: flex; 
height: 7vh;
top: 0;
justify-content: center;
align-items: center;
background: grey;
`

const GreenButton = styled.button`
background: green;
`

export const App = () =>{

    const [count, setCount] = React.useState(0);

    return( 
    <div>  
        <ButtonDiv>{count} times clicked  </ButtonDiv>
        <GreenButton onClick={()=>setCount(count+1)}> click  </GreenButton>
    </div>)
}