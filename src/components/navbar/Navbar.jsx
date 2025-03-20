//Navbar.jsx
import React, { useState } from "react";
import LoginForm from "../login/AuthForm";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="ArtPrint" />
                </div>
                <div className={styles.categories}>
                    <ul className={styles.categoryList}>
                        <li><a href="#ceramica">Cerámica</a></li>
                        <li><a href="#escritura">Escritura</a></li>
                        <li><a href="#acuarela">Acuarela</a></li>
                        <li><a href="#cocina">Cocina</a></li>
                        <li><a href="#bordado">Fotografía</a></li>
                        <li><a href="#cosmetica">Cosmética</a></li>
                    </ul>
                </div>
                <div className={styles.navActions}>
                    <button className={styles.loginButton} onClick={() => setShowLogin(true)}>Iniciar sesión</button>
                    <span className={styles.cartIcon}>🛒</span>
                </div>
            </nav>

            {showLogin && <LoginForm />}
        </>
    );
};

export default Navbar;
