'use client'
import styles from "@/styles/button.module.css"; 
import { useRouter } from 'next/navigation';

export default function Button({ onClick, label, icon, router }) {
  
  const routerInstance = useRouter();

  const handleClick = () => {
    if (router) {
      routerInstance.push(router); 
    } else {
      onClick && onClick(); 
    }
  };

  if (!label) return null;
  
  return (
    <button className={styles.buttonGray} onClick={handleClick}>
      {label} {icon && icon}
    </button>
  );
};
