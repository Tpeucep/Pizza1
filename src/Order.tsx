import React, { useState } from "react";
import styled from "styled-components";

// Стилизованный компонент для основного контейнера страницы заказа
const OrderPageContainer = styled.div`
    padding: 50px;
    text-align: center;
    position: "relative";
    min-height: 100%;
`;

// Стилизованный компонент для формы заказа
const OrderForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// Стилизованный компонент для инпутов и лейблов
const InputLabel = styled.label`
    display: block;
    margin-bottom: 10px;
`;

const InputField = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-top: 5px;
    width: 300px;
`;

// Стилизованный компонент для кнопки заказа
const OrderButton = styled.button`
    padding: 10px 20px;
    background-color: #ff5733;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 20px;

    &:hover {
        background-color: #ff8c66;
    }
`;

const VerticalLine = styled.div`
    position: absolute;
    width: 10%;
    height: 100%;
    top: 107px;
    background-color: #ff5733;
`;

export const Order = () => {
    const [nameC, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Order submitted:", { nameC, address, phone });
        // // Здесь можно добавить логику для отправки заказа на сервер
        // // Очищаем форму после отправки заказа
        alert("Спасибо за заказ!");
        setName("");
        setAddress("");
        setPhone("");
    };

    return (
        <OrderPageContainer>
            <VerticalLine style={{ left: "15px" }} />
            <VerticalLine style={{ right: "15px" }} />
            <OrderForm onSubmit={handleSubmit}>
                <h2>Оформить заказ</h2>
                <InputLabel>
                    Имя:
                    <InputField
                        type="text"
                        placeholder="Ваше имя"
                        value={nameC}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </InputLabel>
                <InputLabel>
                    Телефон:
                    <InputField
                        type="text"
                        placeholder="Ваш телефон"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                    />
                </InputLabel>
                <InputLabel>
                    Адрес доставки:
                    <InputField
                        type="text"
                        placeholder="Ваш адрес"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        required
                    />
                </InputLabel>
                <OrderButton type="submit">Заказать</OrderButton>
            </OrderForm>
        </OrderPageContainer>
    );
};
