import React from "react";
import styled from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Root } from "./root";
import { Menu } from "./Menu";
import { Contact } from "./Contact";
import { Order } from "./Order";
import { Roulete } from "./Roulete";
export const ButtonDivSC = styled.div`
    display: flex;
    height: 10vh;
    justify-content: center;
    align-items: center;
    background: grey;
`;
export const HomeButtonSC = styled.button`
    border-radius: 20px;
    height: 90%;
    width: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-image: url("https://i.pinimg.com/originals/c6/ab/2d/c6ab2de083d2fcab4122f951393315b7.png");
`;
export const MenuButtonSC = styled.button`
    border-radius: 20px;
    height: 90%;
    width: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-image: url("https://www.shareicon.net/download/2016/06/02/774634_paper_512x512.png");
`;
export const OrderButtonSC = styled.button`
    border-radius: 20px;
    height: 90%;
    width: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-image: url("https://cdn-icons-png.flaticon.com/512/4534/4534012.png");
`;
const ContactButtonSC = styled.button`
    border-radius: 20px;
    height: 90%;
    width: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-image: url("https://cdn-icons-png.flaticon.com/512/15/15895.png");
`;
const RouleteButtonSC = styled.button`
    border-radius: 20px;
    height: 90%;
    width: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 50%;
`;
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/root",
        element: <Root />,
    },
    {
        path: "/menu",
        element: <Menu />,
    },
    {
        path: "/order",
        element: <Order />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/roulete",
        element: <Roulete />,
    },
]);

export const App = () => {
    // console.log("SSSS");
    const changeUrl = (v: string) => {
        window.location.href = "/" + v;
    };

    return (
        <>
            <ButtonDivSC>
                <HomeButtonSC onClick={() => changeUrl("")}></HomeButtonSC>
                <MenuButtonSC onClick={() => changeUrl("menu")}> </MenuButtonSC>
                <OrderButtonSC onClick={() => changeUrl("order")}> </OrderButtonSC>
                <ContactButtonSC onClick={() => changeUrl("contact")}> </ContactButtonSC>
                <RouleteButtonSC onClick={() => changeUrl("roulete")}> Roulete </RouleteButtonSC>
            </ButtonDivSC>
            <RouterProvider router={router} />
        </>
    );

    // return (
    //     <>
    //         <ButtonDiv>
    //       ButtonDivSCmeButton onClick={() => changeUrl("")}></HomeButton>
    //          HomeButtonSC onClick={() => changeUrl("menu")HomeButtonSCbutton>
    //           MenuButtonSConClick={() => changeUrl("order")}> OrMenuButtonSCon>
    //             <GreenButton onClick={() => changeUrl("contact")}> Contact </GreenButton>
    //         </ButtonDiv>
    //        ButtonDivSCrovider router={router} />;
    //     </>
    // );
};

// <Router>
//             <ButtonDivSC
//                 {/* Здесь вы можете разместить вашу навигацию или шапку сайта */}
//                 <GreenButton> CLICK </GreenButton>
//                 {/* Определение маршрутов */}
//                 <div>
//               ButtonDivSC Маршрут для домашней страницы */}
//                     <Route path="/" Component={Home} />

//                     {/* Маршрут для страницы О нас */}
//                     <Route path="/order" Component={Order} />

//                     {/* Маршрут для страницы Контакты */}
//                     <Route path="/contact" Component={Contact} />

//                     {/* Обработчик для несуществующих страниц */}
//                     <Route path="/menu" Component={Menu} />
//                 </div>
//             </div>
//         </Router>
