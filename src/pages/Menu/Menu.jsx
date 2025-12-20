import styles from './Menu.module.scss';
import {useEffect, useState} from "react";
import MenuList from "./components/MenuList/";
import Button from "../../components/Button/";
import {useFetch} from "../../hooks/useFetch.jsx";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/cartSlice";


const filterMealsByCategory = (category, data) => {
    return data.filter((data) => data.category === category);
};


const Menu = () => {
    const ITEMS_PER_PAGE = 6;
    const [visibleMeals, setVisibleMeals] = useState([]);
    const [startIndex, setStartIndex] = useState(ITEMS_PER_PAGE);
    const [selectedCategory, setSelectedCategory] = useState("Dessert")

    const {data, error} = useFetch(
        "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals"
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if (!data) return;
        const filtered = filterMealsByCategory(selectedCategory, data);
        setVisibleMeals(filtered.slice(0, ITEMS_PER_PAGE));
        setStartIndex(ITEMS_PER_PAGE);
    }, [data, selectedCategory]);

    if (error) return <div>Error</div>;
    if (!data) return <div>Loading</div>;

    const filtered = filterMealsByCategory(selectedCategory, data);

    const handleSeeMore = () => {
        const nextIndex = startIndex + ITEMS_PER_PAGE;
        const nextMeals = filtered.slice(startIndex, nextIndex);
        setVisibleMeals((prev) => [...prev, ...nextMeals]);
        setStartIndex(nextIndex);
    };

    const handleAddToCart = (count) => {
        dispatch(addToCart(count));
    };

    const isAllShown = visibleMeals.length >= filtered.length;

    return (
        <main>
            <section className={styles.menu}>
                <div className={`wrapper ${styles.menu__wrapper}`}>
                    <div className={styles.description}>
                        <h1 className={styles.title}>Browse our menu</h1>
                        <p className={styles.description__text}>Use our menu to place an order online, or <a
                            href="tel:+370999999" className={styles.phone} title='+3709999999'>phone</a> our
                            store to
                            place a pickup order. Fast and fresh food.</p>
                    </div>
                    <div className={styles['btns-wrapper']}>
                        {[...new Set(data.map(item => item.category))].map((category) => (
                            <Button
                                key={category}
                                text={category}
                                size="medium"
                                onClick={() => setSelectedCategory(category)}
                                secondary={selectedCategory !== category}
                            />
                        ))}
                    </div>
                    <MenuList meals={visibleMeals} onAddToCart={handleAddToCart}/>
                    {!isAllShown && (
                        <Button text="See more" size="medium" onClick={handleSeeMore}/>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Menu;