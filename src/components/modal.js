"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from '@/styles/modal.module.css';
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";


export default function PreferencesPromptModal() {
    const [showModal, setShowModal] = useState(true);
    const router = useRouter();
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelectPreferences = () => {
        router.push("/preferences");
    };

    const handleSkip = () => {
        setShowModal(false);
    };

    return (
        <>
            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent} ref={modalRef}>
                        <h4>Do You Want to Determine Your Interests?</h4>
                        <p>You can view special news and receive notifications by choosing from topics or news sources.</p>

                        <div className={styles.buttonContainer}>
                            <button className={styles.successButton} onClick={handleSelectPreferences}>
                                <IoCheckmarkOutline />
                                <span>Yes, let's do it !</span>
                            </button>
                            <button className={styles.skipButton} onClick={handleSkip}>
                                <IoCloseOutline />
                                <span>No, later</span>

                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}

