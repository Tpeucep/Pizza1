import React, { useState } from "react";
import styled from "styled-components";

const DivSC = styled.div`
    position: absolute;
    display: flex;
    left: 50%;
    top: 50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border: solid;
    transition: 3s ease-out;
`;

interface Slice {
    label: string;
    color: string;
}

const slices: Slice[] = [
    { label: "Выигрыш", color: "#FF5733" },
    { label: "Проигрыш", color: "#FFC300" },
    { label: "Бонус", color: "#33FF57" },
    { label: "Проигрыш", color: "#FF5733" },
    { label: "Выигрыш", color: "#FFC300" },
    { label: "Бонус", color: "#33FF57" },
];

export const Roulete = () => {
    const [angle, setAngle] = React.useState(0);

    const spin = () => {
        const a = Math.floor(Math.random() * 18);
        const newAngle = angle + 360 * 3 + a * 20;
        setAngle(newAngle);
    };

    const [rotation, setRotation] = useState(0);
    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState("");

    const spinWheel = () => {
        if (!spinning) {
            setSpinning(true);
            const newRotation = Math.floor(Math.random() * 3600) + 1800;
            setRotation(newRotation);
            setTimeout(() => {
                const sliceIndex = Math.floor((newRotation % 360) / (360 / slices.length));
                setResult(slices[sliceIndex].label);
                setSpinning(false);
            }, 5000);
        }
    };

    return (
        <>
            <DivSC style={{ rotate: angle + "deg" }}>Roulete</DivSC>
            <button onClick={spin}> spin </button>

            <div className="wheel-container" style={{ transform: `rotate(${rotation}deg)` }}>
                {slices.map((slice, index) => (
                    <div key={index} className="slice" style={{ backgroundColor: slice.color }}>
                        {slice.label}
                    </div>
                ))}
                <div className="center-circle" onClick={spinWheel}>
                    {!spinning ? "Крутить!" : "Крутится..."}
                </div>
            </div>
            {result && <div className="result">{result}</div>}
        </>
    );
};
