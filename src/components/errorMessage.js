'use client'
import styles from "@/styles/errorMessage.module.css";
import { MdErrorOutline } from "react-icons/md";
import Button from "./button";

export default function ErrorMessage ({ message }) {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <>
      <div className={styles.errorContainer}>
        <span className={styles.icon}><MdErrorOutline size={24} /></span>
        <p className={styles.error}>{message}</p>
      </div>
      <div className={styles.buttonContainer}>
        <Button label={'Try again'} onClick={handleRetry} />
      </div>
    </>
  );
};

