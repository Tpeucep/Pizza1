import React from "react";

import styled from "styled-components";

const BodySC = styled.div`
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
`;
const HeaderSC = styled.div`
    background-color: #ff5733;
    color: white;
    padding: 20px;
    text-align: center;
`;
const NavSC = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 20px;
    align-items: center;
`;
const ASC = styled.div`
    width: 30%;
    text-decoration: none;
    color: #333;
    padding: 10px 20px;
    border: 1px solid #333;
    margin: 0 10px;
    border-radius: 5px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #333;
        color: white;
    }
`;
const ButtonSC = styled.button`
    padding: 10px 20px;
    background-color: #ff5733;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #ff8c66;
    }
`;
const SelectionSC = styled.div`
    text-align: center;
    padding: 80px;
`;
export const Home = () => {
    const changeUrl = (v: string) => {
        window.location.href = "/" + v;
    };
    return (
        <BodySC>
            <HeaderSC>
                <h1>Локреа пица</h1>
                <p>Добро пожаловать в Локреа - оазис вкуса и аромата в самом сердце Италии!</p>
            </HeaderSC>
            <NavSC>
                <ASC onClick={() => changeUrl("menu")}>Пиццы</ASC>
                <ASC onClick={() => changeUrl("menu")}>Закуски</ASC>
                <ASC onClick={() => changeUrl("menu")}>Напитки</ASC>
            </NavSC>
            <SelectionSC>
                <h2 style={{ margin: "20px" }}>Наши преимущества:</h2>
                <p>
                    <strong>Качество:</strong> Мы гордимся своими блюдами, приготовленными с любовью и вниманием к
                    деталям.
                </p>
                <p>
                    <strong>Свежие ингредиенты:</strong> Мы используем только самые свежие ингредиенты, чтобы
                    гарантировать вам самый вкусный опыт.
                </p>
                <p>
                    <strong>Доставка:</strong> Удобная и быстрая доставка прямо к вашему дому или офису.
                </p>
                <ButtonSC onClick={() => changeUrl("order")}>Заказать прямо сейчас!</ButtonSC>
            </SelectionSC>
        </BodySC>
    );
};
