'use client'
import { useEffect, useState } from 'react';
import styles from '@/styles/categories.module.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Categories() {
    const categories = [
        { name: '#Business', image: '/images/categories/business.png' },
        { name: '#Entertainment', image: '/images/categories/entertainment.png' },
        { name: '#General', image: '/images/categories/general.png' },
        { name: '#Health', image: '/images/categories/health.png' },
        { name: '#Science', image: '/images/categories/science.png' },
        { name: '#Sports', image: '/images/categories/sports.png' },
        { name: '#Technology', image: '/images/categories/technology.png' },
    ];
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

    return (
        <div className={styles.container}>
            {showLeftArrow && (
                <button className={styles.scrollButton} onClick={() => document.getElementById('scrollable').scrollLeft -= 200}>
                    <IoIosArrowBack />
                </button>
            )}
            <div id="scrollable" className={styles.scrollable}>
                {categories.map((category, index) => (
                    <div key={index} className={styles.item}>
                        <img src={category.image} alt={category.name} className={styles.image} />
                        <span className={styles.label}>{category.name}</span>
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

export default Categories;

