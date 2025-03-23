// src/components/cart/CartOverlay.jsx
import React, { useContext } from 'react';
import styles from './CartOverlay.module.css';
import { CartContext } from '../../context/CartContext';

const CartOverlay = ({ isOpen, onClose }) => {
    const { 
        cartItems, 
        removeItemFromCart, 
        updateItemQuantity, 
        calculateTotal 
    } = useContext(CartContext);

    return (
        <aside className={`${styles.cartOverlay} ${isOpen ? styles.active : ''}`}>
            <header className={styles.cartHeader}>
                <h2 className={styles.cartTitle}>Carrito de Compras</h2>
                <button 
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    ×
                </button>
            </header>

            {cartItems.length === 0 ? (
                <div className={styles.emptyCart}>
                    <p>Tu carrito está vacío</p>
                </div>
            ) : (
                <>
                    <div className={styles.cartContent}>
                        {cartItems.map(item => (
                            <div key={item.productId} className={styles.cartItem}>
                                <img 
                                    src={item.imageUrl} 
                                    alt={item.title}
                                    className={styles.itemImage}
                                />
                                <div className={styles.itemDetails}>
                                    <h3 className={styles.itemName}>{item.title}</h3>
                                    <p className={styles.itemPrice}>
                                        ${item.price.toFixed(2)} x {item.quantity}
                                    </p>
                                </div>
                                <div className={styles.quantityControls}>
                                    <input
                                        type="number"
                                        min="1"
                                        max="99"
                                        value={item.quantity}
                                        onChange={(e) => updateItemQuantity(
                                            item.productId,
                                            parseInt(e.target.value)
                                        )}
                                        className={styles.quantityInput}
                                    />
                                    <button
                                        className={styles.removeButton}
                                        onClick={() => removeItemFromCart(item.productId)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <footer className={styles.totalSection}>
                        <p className={styles.totalText}>
                            Total: ${calculateTotal().toFixed(2)}
                        </p>
                        <button className={styles.checkoutButton}>
                            Ir a Pagar
                        </button>
                    </footer>
                </>
            )}
        </aside>
    );
};

export default CartOverlay;