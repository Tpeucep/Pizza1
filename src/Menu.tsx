import React from "react";
import styled from "styled-components";

// Стилизованный компонент для раздела меню
const MenuSection = styled.section`
    padding: 50px;
    text-align: center;
    position: relative;
    overflow: hidden;
`;

// Стилизованный компонент для вертикальных полос
const VerticalLine = styled.div`
    position: absolute;
    width: 10%;
    height: 100%;
    background-color: #ff5733;
`;

// Стилизованный компонент для заголовка раздела меню
const MenuSectionHeader = styled.h2`
    margin-bottom: 20px;
`;

// Стилизованный компонент для списка элементов меню
const MenuList = styled.ul`
    list-style: none;
    padding: 0;
`;

// Стилизованный компонент для элемента меню
const MenuItem = styled.li`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`;

const TextSC = styled.div`
    margin: 20px;
`;

// Стилизованный компонент для контейнера с изображениями товаров
const ImagesContainer = styled.div`
    display: flex;
    overflow-x: scroll;
    margin-top: 10px;
    text-align: center;
    max-width: 60vw;
    gap: 10px;
`;

// Стилизованный компонент для изображений товаров
const ProductImage = styled.img`
    background-color: aliceblue;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-right: 10px;
    &:hover {
        background-color: #333;
        color: white;
    }
`;

export const Menu = () => {
    const changeUrl = (v: string) => {
        window.location.href = "/" + v;
    };

    return (
        <div style={{ position: "relative" }}>
            <VerticalLine style={{ left: "15px" }} />
            <VerticalLine style={{ right: "15px" }} />
            <MenuSection>
                <MenuSectionHeader>Наше меню</MenuSectionHeader>
                <MenuList>
                    <MenuItem>
                        <h3>Пиццы</h3>
                        <ImagesContainer onClick={() => changeUrl("order")}>
                            <ProductImage
                                src="https://i.pinimg.com/originals/20/d2/2e/20d22e9fd90b6ec066e84ac52ac747eb.png"
                                alt="Пицца 1"
                            />
                            <ProductImage
                                src="https://static.vecteezy.com/system/resources/thumbnails/025/076/438/small_2x/pizza-isolated-illustration-ai-generative-png.png"
                                alt="Пицца 2"
                            />
                            <ProductImage
                                src="https://static.vecteezy.com/system/resources/thumbnails/022/149/342/small_2x/hot-italian-pizza-cutout-png.png"
                                alt="Пицца 3"
                            />
                            <ProductImage
                                src="https://lirp.cdn-website.com/e37b4879/dms3rep/multi/opt/Meat_Craver-384w.png"
                                alt="Пицца 4"
                            />
                            <ProductImage
                                src="https://www.transparentpng.com/thumb/pizza/zjYdyi-pizza-missing-a-slice-photo-its-varieties.png"
                                alt="Пицца 5"
                            />
                            <ProductImage
                                src="https://d1btgctt6xberu.cloudfront.net/uploads/PC0346_BBQChickn_600x600_.png"
                                alt="Пицца 6"
                            />
                            <ProductImage
                                src="https://static.wixstatic.com/media/0ecd87_b6de05ea546a4a188554a3346559a9c3~mv2.png/v1/fill/w_502,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Meat%20Pizza.png"
                                alt="Пицца 7"
                            />
                            <ProductImage
                                src="https://media.dominospizza.lv/__sized__/menu/product_osg_image_mobile/2024/02/09/Ham__Mushroom-thumbnail-480x480.png"
                                alt="Пицца 8"
                            />
                            <ProductImage
                                src="https://zalatpizza.com/wp-content/uploads/2023/12/Zalat-Pizza-Zealot-Supreme.png"
                                alt="Пицца 9"
                            />
                            <ProductImage
                                src="https://gambinospizza.com/wp-content/uploads/2022/02/Veggie-Cravers-A-Cutout-@600w.png"
                                alt="Пицца 10"
                            />

                            {/* Добавьте больше изображений, если необходимо */}
                        </ImagesContainer>
                        <TextSC>
                            Изысканные сочетания ингредиентов, свежие теста и великолепные соусы - каждая пицца
                            воплощает в себе нашу страсть к кулинарии.
                        </TextSC>
                    </MenuItem>
                    <MenuItem style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h3>Закуски</h3>
                        <ImagesContainer
                            onClick={() => changeUrl("order")}
                            style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
                        >
                            <ProductImage
                                src="https://lapdfood.co.uk/wp-content/uploads/2021/12/banner-img.png"
                                alt="Snack 1"
                            />
                            <ProductImage
                                src="https://media.timeout.com/images/105701376/750/562/image.jpg"
                                alt="Snack 2"
                            />
                            <ProductImage
                                src="https://www.gohomely.com/assets/img/web/new_home_hero_img.png"
                                alt="Snack 3"
                            />
                            <ProductImage
                                src="https://a.storyblok.com/f/258637/856x568/01acea4f79/hero-mobile-image.png"
                                alt="Snack 4"
                            />
                            <ProductImage
                                src="https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/category/Web-Images-800x600-1.png"
                                alt="Snack 5"
                            />
                        </ImagesContainer>
                        <p>
                            Насладитесь нашими аппетитными закусками, приготовленными с использованием только лучших
                            ингредиентов.
                        </p>
                    </MenuItem>
                    <MenuItem>
                        <h3>Напитки</h3>
                        <ImagesContainer
                            onClick={() => changeUrl("order")}
                            style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
                        >
                            <ProductImage
                                src="https://www.zgruzie.cz/wp-content/uploads/2024/01/rose-vina-marani-gruzie-mix-600x600.png"
                                alt="Drink 1"
                            />
                            <ProductImage
                                src="https://gruzia.md/wp-content/uploads/2023/06/2550810-700x420.png"
                                alt="Drink 2"
                            />
                            <ProductImage
                                src="https://www.polevkarna-soup.com/235-large_default/%D0%B3%D1%80%D1%83%D0%B7%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BB%D0%B8%D0%BC%D0%BE%D0%BD%D0%B0%D0%B4-%D1%8D%D1%81%D1%82%D1%80%D0%B0%D0%B3%D0%BE%D0%BD-05-%D0%BB.jpg"
                                alt="Drink 3"
                            />
                            <ProductImage
                                src="https://png.klev.club/uploads/posts/2024-03/png-klev-club-p-chai-png-2.png"
                                alt="Drink 4"
                            />
                            <ProductImage
                                src="https://png.pngtree.com/png-clipart/20230414/original/pngtree-coffee-cup-cappuccino-transparent-png-image_9057019.png"
                                alt="Drink 5"
                            />
                        </ImagesContainer>
                        <p>Освежающие напитки, чтобы сделать ваше путешествие по миру вкуса еще более приятным.</p>
                    </MenuItem>
                </MenuList>
            </MenuSection>
        </div>
    );
};
