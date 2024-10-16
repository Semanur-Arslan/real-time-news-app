"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import styles from '@/styles/categories.module.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { fetchCategories } from '@/services/localApi';
import { toast } from 'react-toastify';

export default function Categories() {

    const router = useRouter();
    const [categories, setCategories] = useState([]);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    useEffect(() => {

        const scrollable = document.getElementById('scrollable');
        const updateArrows = () => {
            setShowLeftArrow(scrollable.scrollLeft > 0);
            setShowRightArrow(scrollable.scrollLeft < scrollable.scrollWidth - scrollable.clientWidth);
        };

        scrollable.addEventListener('scroll', updateArrows);
        updateArrows();

        return () => scrollable.removeEventListener('scroll', updateArrows);
    }, []);

    useEffect(() => {

        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (error) {
                const errorMessage = error.message || 'There was a problem retrieving categories';
                toast.error(errorMessage);
            }
        };

        getCategories();
    }, []);

    const handleCategoryClick = (category) => {
        router.push(`/category/${category}`);
    };

    return (
        <div className={styles.container}>
            {showLeftArrow && (
                <button className={styles.scrollButton} onClick={() => document.getElementById('scrollable').scrollLeft -= 200}>
                    <IoIosArrowBack />
                </button>
            )}
            <div id="scrollable" className={styles.scrollable}>
                {categories.map((category) => (
                    <div key={category.id} className={styles.item} onClick={() => handleCategoryClick(category.url)}>
                        <img src={category.image} alt={category.name} className={styles.image} />
                        <span className={styles.label}>#{category.name}</span>
                    </div>
                ))}
            </div>
            {showRightArrow && (
                <button className={styles.scrollButton} onClick={() => document.getElementById('scrollable').scrollLeft += 200}>
                    <IoIosArrowForward />
                </button>
            )}
        </div>
    );
}



