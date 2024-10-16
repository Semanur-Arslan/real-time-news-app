"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/header.module.css';
import { IoMoon, IoSunny, IoMenu, IoClose } from "react-icons/io5";

export default function Header () {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkTheme(savedTheme === 'dark');
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkTheme ? 'light' : 'dark';
        setIsDarkTheme(!isDarkTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.nav}>
                <Link className={styles.logo} href="/">
                    <img src="/images/Logo.svg" alt="logo" />
                </Link>
                <nav className={`${styles.navlist} ${menuOpen ? styles.show : ''}`}>
                    <button className={styles.menuButton} onClick={() => setMenuOpen(false)}>
                        <IoClose />
                    </button>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/preferences">Preferences</Link>
                        </li>
                        <li>
                            <Link href="/chart">Chart</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <button className={styles.themeToggle} onClick={toggleTheme}>
                <IoSunny />
                <IoMoon />
                <span className={`${styles.ball} ${isDarkTheme ? styles.moveRight : styles.moveLeft}`}></span>
            </button>

            <button className={styles.menuButton} onClick={() => setMenuOpen(true)}>
                <IoMenu />
            </button>

            <div className={`${styles.overlay} ${menuOpen ? styles.active : ''}`} onClick={toggleMenu}></div>
        </header>
    );
};

