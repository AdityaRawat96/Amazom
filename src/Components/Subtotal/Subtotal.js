import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "../../StateProvider";

function Subtotal() {

    const [{ basket }] = useStateValue();
    const productTotal = basket.reduce(
      (total, basketItems) => total + basketItems.price,
      0
    );

    return (
      <div className="subtotal">
        <CurrencyFormat
          value={productTotal}
          decimalScale={2}
          fixedDecimalScale={true}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket?.length} items) : <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </>
          )}
        />
        <button type="button">Proceed to checkout</button>
      </div>
    );
}

export default Subtotal
