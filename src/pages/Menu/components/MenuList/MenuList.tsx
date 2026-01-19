import MenuCard from "../MenuCard/";
import styles from './MenuList.module.scss';
import type {Meal} from '../../../../store/mealsSlice'

type MenuListProps = {
    meals: Meal[]
}

const MenuList = ({meals}: MenuListProps) => {
    return (
        <div className={styles.cards}>
            {meals.map((meal) => (
                <MenuCard key={meal.id} {...meal}/>
            ))}
        </div>
    );
};

export default MenuList;