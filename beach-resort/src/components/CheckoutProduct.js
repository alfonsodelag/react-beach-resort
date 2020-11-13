import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider'

function CheckoutProduct({ id, name, slug, price, images }) {
    const [{ basket }, dispatch] = useStateValue();

    // console.log("id, title, image, price, rating", id, title, image, price, rating)

    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={images[0]} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{name}</p>

                <p className="checkoutProduct__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>

                {/* <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                    }
                </div> */}

                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
