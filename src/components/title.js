
import styles from '@/styles/title.module.css'; 
import Button from './button';

export default function Title ({ title, buttonName, buttonIcon }) {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
      <Button label={buttonName} icon={buttonIcon}/>
    </div>
  );
};


