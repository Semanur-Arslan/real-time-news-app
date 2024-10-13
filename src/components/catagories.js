"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import styles from '@/styles/categories.module.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Categories() {

    const router = useRouter();
    const categories = [
        { name: '#Business', url:'business', image: '/images/categories/business.png' },
        { name: '#Entertainment', url:'entertainment', image: '/images/categories/entertainment.png' },
        { name: '#General', url:'general', image: '/images/categories/general.png' },
        { name: '#Health', url:'health', image: '/images/categories/health.png' },
        { name: '#Science', url:'science', image: '/images/categories/science.png' },
        { name: '#Sports', url:'sports',  image: '/images/categories/sports.png' },
        { name: '#Technology', url:'technology', image: '/images/categories/technology.png' },
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
                {categories.map((category, index) => (
                    <div key={index} className={styles.item} onClick={() => handleCategoryClick(category.url)}>
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



