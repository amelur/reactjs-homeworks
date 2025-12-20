import MenuCard from "../MenuCard/";
import styles from './MenuList.module.scss';

const MenuList = ({meals}) => {
    return (
        <div className={styles.cards}>
            {meals.map((meal) => (
                <MenuCard key={meal.id} {...meal}/>
            ))}
        </div>
    );
};

export default MenuList;