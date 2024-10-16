'use client';
import { useEffect } from 'react';
import Button from "@/components/button";
import styles from "@/styles/serverError.module.css";
import { MdError } from 'react-icons/md';

export default function Error({ error, reset }) {
  // useEffect(() => {
  //   console.error("Error Boundary:", error);
  // }, [error]);

  return (
      <div className={styles.errorContainer}>
      <img className={styles.errorImage} src="/images/error.svg" alt="error" />
        <h2>Oops, something went wrong !</h2>
        <p>{error.message}</p>
        <Button label={'Try again'} onClick={reset} />
      </div>
  );
}
