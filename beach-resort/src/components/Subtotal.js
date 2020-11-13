import React from 'react'
import { useStateValue } from '../StateProvider'
import CurrencyFormat from "react-currency-format"
import './SubTotal.css'
import { getBasketTotal } from '../reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            {/* Price */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
