
import styles from '@/styles/title.module.css'; 

const Title = ({ title, buttonName, buttonIcon,  }) => {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
      {buttonName && (
        <button>
          {buttonName} {buttonIcon}
        </button>
      )}
    </div>
  );
};

export default Title;
