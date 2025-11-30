import styles from "./MediaLink.module.scss";

const MediaLink = ({icon, href = "#"}) => {
    return (
        <a href={href} className={styles.mediaLink} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt="social icon" className={styles.icon}/>
        </a>
    );
};

export default MediaLink;