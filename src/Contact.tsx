import React from "react";
import styled from "styled-components";

// Стилизованный компонент для раздела контактов
const ContactSection = styled.section`
    padding: 50px;
    text-align: center;
`;

// Стилизованный компонент для списка контактов
const ContactList = styled.ul`
    list-style: none;
    margin-bottom: 50px;
    padding: 0;
`;

const VerticalLine = styled.div`
    position: absolute;
    width: 10%;
    height: 100%;
    background-color: #ff5733;
`;

const ContentDivSC = styled.div`
    min-height: 100%;
`;

// Стилизованный компонент для элемента контакта
const ContactItem = styled.li`
    margin-bottom: 40px;
`;
export const Contact = () => {
    return (
        <ContentDivSC>
            <VerticalLine style={{ left: "15px" }} />
            <VerticalLine style={{ right: "15px" }} />
            <ContactSection>
                <h2>Контакты</h2>
                <ContactList>
                    <ContactItem>
                        <strong>Адрес:</strong> ул. Пушкина, д.10, Грозный, Чеченская Республика
                    </ContactItem>
                    <ContactItem>
                        <strong>Телефон:</strong> +7 (123) 456-7890
                    </ContactItem>
                    <ContactItem>
                        <strong>Телефон 2:</strong> +8 (800) 535-3535
                    </ContactItem>
                    <ContactItem>
                        <strong>Email:</strong> info@lokreapizza.com
                    </ContactItem>
                </ContactList>
            </ContactSection>
        </ContentDivSC>
    );
};
