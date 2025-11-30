import styles from './Menu.module.scss';
import {useEffect, useState} from "react";
import Button from "../../components/Button/Button.jsx";
import MenuList from "./components/MenuList/index.js";


const Menu = ({ onAddToCart }) => {
    const [meals, setMeals] = useState([]);
    const [visibleMeals, setVisibleMeals] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const ITEMS_PER_PAGE = 6;

    const isAllShown = visibleMeals.length >= meals.length;


    useEffect(() => {
        fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
            .then(res => res.json())
            .then(data => {
                setMeals(data);
                setVisibleMeals(data.slice(0, ITEMS_PER_PAGE));
                setStartIndex(ITEMS_PER_PAGE);
            })
            .catch(err => console.error("Ошибка загрузки меню:", err));
    }, []);

    const handleSeeMore = () => {
        const nextIndex = startIndex + ITEMS_PER_PAGE;
        const nextMeals = meals.slice(startIndex, nextIndex);
        setVisibleMeals(prev => [...prev, ...nextMeals]);
        setStartIndex(nextIndex);
    };

    return (
        <main>
            <section className={styles.menu}>
                <div className={`wrapper ${styles.menu__wrapper}`}>
                    <div className={styles.description}>
                        <h1 className={styles.title}>Browse our menu</h1>
                        <p className={styles.description__text}>Use our menu to place an order online, or <a href="tel:+370999999" className={styles.phone} title='+3709999999'>phone</a> our
                            store to
                            place a pickup order. Fast and fresh food.</p>
                    </div>
                    <div className={styles['btns-wrapper']}>
                        <Button text="Dessert" size="medium"/>
                        <Button text="Dinner" size="medium" secondary/>
                        <Button text="Breakfast" size="medium" secondary/>
                    </div>
                    <MenuList meals={visibleMeals} onAddToCart={onAddToCart}/>
                    {!isAllShown && (
                        <Button text="See more" size="medium" onClick={handleSeeMore}/>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Menu;