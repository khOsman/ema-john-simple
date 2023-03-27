import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { name, img, seller, quantity, price, ratings } = props.product;
    
    const handleAddToCart=props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className="product-info">
                <h6 className='product-name'>Product: {name}</h6>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <p>Rating: {ratings}</p>
                <p>Seller: {seller}</p>      
            </div>
            <button className='btn-cart' onClick={()=>handleAddToCart(props.product)}>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;