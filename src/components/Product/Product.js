import React from 'react';
import './Product.css'


const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    console.log(props.product);
    return (
        <div className='product'>

            <img src={img} alt="" ></img>
            <div className="product-name">{name}</div>

        </div>
    );
};

export default Product;