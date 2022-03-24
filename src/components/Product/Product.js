import React from 'react';
import './Product.css'


const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    console.log(props.product);
    return (
        <div className='product'>

            <img src={img} alt="" ></img>
            <div className='product-details'>
                <div className="product-name">{name}</div>
                <p>Price:${price}</p>
                <p><small>Manufacturer:{seller}</small></p>
                <p><small>Ratings:{ratings}</small></p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;