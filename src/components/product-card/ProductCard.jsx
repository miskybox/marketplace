import React from 'react';
import styles from './ProductCard.module.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ProductCard({ product }) {
    const { addItemToCart } = useContext(CartContext);
    
    const handleAddToCart = () => {
        addItemToCart(
            product.id,
            product.price,
            product.title,
            product.imageUrl
        );
    };

    return (
        <div className={styles.productCard}>
            <div className={styles.imageContainer}>
                <img 
                    src={product.imageUrl} 
                    alt={product.title}
                    className={styles.productImage}
                />
            </div>
            
            <div className={styles.content}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.details}>
                    <span className={styles.category}>{product.category}</span>
                    <span className={styles.location}>{product.location}</span>
                    <span className={styles.format}>{product.format}</span>
                </div>
                <span className={styles.price}>{product.price}€</span>
            </div>

            <button 
                onClick={handleAddToCart}
                className={styles.addToCartButton}
            >
                Añadir al Carrito
            </button>
        </div>
    );
}

export default ProductCard;