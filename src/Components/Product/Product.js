import React from 'react'
import "./Product.css"
import { useStateValue } from '../../StateProvider';
import CurrencyFormat from "react-currency-format";

function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();
  
  //console.log('this is the basket >>>', basket);
  
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

    return (
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <strong>
              <CurrencyFormat
                value={price}
                decimalScale={2}
                fixedDecimalScale={true}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value) => (
                  <>
                    <strong>{value}</strong>
                  </>
                )}
              />
            </strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span role="img" aria-label="star-emoji">
                  ⭐
                </span>
              ))}
          </div>
        </div>
        <img src={image} alt="product displaypicture" />

        <button type="button" onClick={addToBasket}>
          Add to Cart
        </button>
      </div>
    );
}

export default Product
