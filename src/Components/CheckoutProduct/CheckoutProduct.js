import React, {forwardRef} from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

const CheckoutProduct = forwardRef((props, ref) => {
  
  const { key, id, image, title, price, rating } = props;
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct" ref={ref} id={id} key={key}>
      <img
        className="checkoutProduct__image"
        src={image}
        alt="checkout productImage"
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star-emoji">
                ⭐
              </span>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
});

export default CheckoutProduct
