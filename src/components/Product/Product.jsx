import React from 'react';
import './Product.css';
const Product = (props) => {
    const { name, img, seller, quantity, price, ratings } = props.product;
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
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;