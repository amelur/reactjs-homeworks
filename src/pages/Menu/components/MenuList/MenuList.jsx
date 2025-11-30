import MenuCard from "../MenuCard/index.js";
import styles from './MenuList.module.scss';

const MenuList = ({meals, onAddToCart}) => {
    return (
        <div className={styles.cards}>
            {meals.map((meal) => (
                <MenuCard key={meal.id} {...meal} onAddToCart={onAddToCart}/>
            ))}
        </div>
    );
};

export default MenuList;