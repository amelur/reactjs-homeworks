import {Component} from "react";
import styles from './ItemList.module.scss'

class ItemList extends Component {
    render() {
        const items = ['React', 'JavaScript', 'HTML', 'Saas', 'Tailwind']

        return (
            <div className={styles.wrapper}>
                <h1 className={styles.title}>React Homework 1</h1>
                <ul className={styles.list}>
                    {items.map((item, index) => (
                        <li key={index} className={styles.list__item}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ItemList;