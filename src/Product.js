import React from 'react';
import './Product.css';
import blog from './picture/blog-3.jpg';
import {useStateValue} from './StateProvider';

function Product({id,image,rating,title,price}) {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,title,image,price,rating
            }
        })
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_,i) => (
                                <p key={Math.random()}>⭐</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} />
            <button onClick={addToBasket}>Add To Basket</button>
            
        </div>
    )
}


export default Product;
