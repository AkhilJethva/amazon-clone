import React from 'react';
import {useStateValue} from './StateProvider';
import './CheckOut.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function CheckOut() {

    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>You have no items in your Basket. To buy one or more items, Click "Add to 
                            Basket" next to the item.
                        </p>
                    </div>
                     ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {/** list of all selected products */}
                        {
                            basket.map( item =>{
                                return(
                                <CheckoutProduct 
                                    id={item.id}
                                    title = {item.title}
                                    price = {item.price}
                                    image = {item.image}
                                    rating = {item.rating}
                                
                                />
                                );
                            })
                        }
                    </div>
                )}
            </div>
            { basket.length > 0 &&(
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
            
        </div>
    )
}

export default CheckOut;
