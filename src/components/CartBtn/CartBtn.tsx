import styles from "./CartBtn.module.scss";

type CartBtnProps = {
    totalMeals: number
}
const CartBtn = ({totalMeals}: CartBtnProps) => {
    return (
        <button className={styles.cartBtn}>
            <span className={styles.cartCount}>{totalMeals}</span>
        </button>
    )
}

export default CartBtn;