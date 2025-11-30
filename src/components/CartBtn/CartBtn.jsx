import styles from "./CartBtn.module.scss";

const CartBtn = ({count}) => {
    return (
        <button className={styles.cartBtn}>
            <span className={styles.cartCount}>{count}</span>
        </button>
    )
}

export default CartBtn;