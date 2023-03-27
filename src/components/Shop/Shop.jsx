import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import './Shop.css';
const Shop = () => {

    const api = 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json';
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const storeCart = getShoppingCart();
        const savedCart = [];
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
               
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (product) => {
        //console.log(product);
        //const newCart = [...cart, product];
        let newCart=[];
        const exists = cart.find(pd=>pd.id===product.id);
        if(!exists){
            product.quantity=1;
            newCart = [...cart, product];
        }
        else{
            exists.quantity+=1;
            const remaining = cart.filter(pd=>pd.id!==product.id);
            newCart=[...remaining,exists];
        }
        setCart(newCart);
        addToDb(product.id);
    };
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;