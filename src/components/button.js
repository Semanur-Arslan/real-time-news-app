import styles from "@/styles/button.module.css"; 

export default function Button ({ onClick, label, icon }) {

  if (!label) return null;
  
  return (
    <button className={styles.buttonGray} onClick={onClick}>
     {label}  {icon && icon}
    </button>

  );
};
