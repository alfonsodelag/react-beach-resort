import React from 'react'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from '../components/CheckoutProduct'
import './Checkout.css'
import Subtotal from '../components/Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
                    </p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {basket?.map((item, index) => (
                                <CheckoutProduct
                                    id={item.id}
                                    name={item.name}
                                    slug={item.slug}
                                    price={item.price}
                                    images={item.images}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
