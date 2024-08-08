import styles from './Banner.module.css';

const Banner = ({ imageUrl, title, buttonText, onButtonClick }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.background} style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {buttonText && onButtonClick && (  
          <button onClick={onButtonClick} className={styles.button}>{buttonText}</button>
        )}
      </div>
    </div>
  );
};

export default Banner;
