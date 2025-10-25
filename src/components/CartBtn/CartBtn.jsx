import styles from "./CartBtn.module.scss";

const CartBtn = ({totalMeals}) => {
    return (
        <button className={styles.cartBtn}>
            <span className={styles.cartCount}>{totalMeals}</span>
        </button>
    )
}

export default CartBtn;