import styles from "./Menu.module.scss";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import MenuList from "./components/MenuList";
import Button from "../../components/Button";
import type {Meal} from '../../store/mealsSlice'
import {getMealsData} from "../../store/mealsSlice";

const ITEMS_PER_PAGE = 6;

const filterMealsByCategory = (category: string, data: Meal[]): Meal[] =>
    data.filter((item) => item.category === category);

const Menu = () => {
    const dispatch = useAppDispatch();

    const {data: meals, loading, error} = useAppSelector(
        (state) => state.meals
    );

    const [visibleMeals, setVisibleMeals] = useState<Meal[]>([]);
    const [startIndex, setStartIndex] = useState(ITEMS_PER_PAGE);
    const [selectedCategory, setSelectedCategory] = useState("Dessert");

    useEffect(() => {
        if (!meals && !loading) {
            dispatch(getMealsData());
        }
    }, [dispatch, meals, loading]);

    useEffect(() => {
        if (!meals) return;

        const filtered = filterMealsByCategory(selectedCategory, meals);
        setVisibleMeals(filtered.slice(0, ITEMS_PER_PAGE));
        setStartIndex(ITEMS_PER_PAGE);
    }, [meals, selectedCategory]);

    if (loading) return <div>Loading</div>;
    if (error) return <div>Error</div>;
    if (!meals) return null;

    const filtered = filterMealsByCategory(selectedCategory, meals);

    const handleSeeMore = () => {
        const nextIndex = startIndex + ITEMS_PER_PAGE;
        const nextMeals = filtered.slice(startIndex, nextIndex);
        setVisibleMeals((prev) => [...prev, ...nextMeals]);
        setStartIndex(nextIndex);
    };

    const isAllShown = visibleMeals.length >= filtered.length;

    const categories = [...new Set(meals.map((item) => item.category))];

    return (
        <main>
            <section className={styles.menu}>
                <div className={`wrapper ${styles.menu__wrapper}`}>
                    <div className={styles.description}>
                        <h1 className={styles.title}>Browse our menu</h1>
                        <p className={styles.description__text}>
                            Use our menu to place an order online, or{" "}
                            <a href="tel:+370999999" className={styles.phone}>
                                phone
                            </a>{" "}
                            our store to place a pickup order.
                        </p>
                    </div>

                    <div className={styles["btns-wrapper"]}>
                        {categories.map((category) => (
                            <Button
                                key={category}
                                text={category}
                                size="medium"
                                onClick={() => setSelectedCategory(category)}
                                secondary={selectedCategory !== category}
                            />
                        ))}
                    </div>

                    <MenuList meals={visibleMeals}/>

                    {!isAllShown && (
                        <Button text="See more" size="medium" onClick={handleSeeMore}/>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Menu;
