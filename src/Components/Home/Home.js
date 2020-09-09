import React from 'react'
import './Home.css'
import Product from '../Product/Product'

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
            alt="Home product slider"
          />
        </div>

        <div className="home__row">
          <Product
            id={1}
            title="Apple iPhone 11 Pro Max"
            price={1099.00}
            image="https://images-na.ssl-images-amazon.com/images/I/61m6DjujESL._SL1024_.jpg"
            rating={5}
          />
          <Product
            id={2}
            title="Apple iPhone 11 Pro (64GB) - Space Grey"
            price={1000.00}
            image="https://m.media-amazon.com/images/I/81j2j9x-KWL.jpg"
            rating={5}
          />
          <Product
            id={3}
            title="Samsung Galaxy Note 20 Ultra 5G"
            price={1000.00}
            image="https://images-na.ssl-images-amazon.com/images/I/81afQk-7AjL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id={4}
            title="OnePlus 8 Pro"
            price={750.00}
            image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          
          <Product
            id={5}
            title="HP Envy x360 Ryzen 5"
            price={800.00}
            image="https://images-na.ssl-images-amazon.com/images/I/81DIp5S7RFL._SL1500_.jpg"
            rating={4}
          />

          <Product
            id={6}
            title="ASUS ZenBook Duo"
            price={1500.00}
            image="https://images-na.ssl-images-amazon.com/images/I/81K9Es2DDFL._SL1500_.jpg"
            rating={5}
          />

          <Product
            id={7}
            title="Dell XPS 7590"
            price={1500.00}
            image="https://images-na.ssl-images-amazon.com/images/I/51QdaRg29BL._SL1000_.jpg"
            rating={4}
          />

          <Product
            id={8}
            title="Apple MacBook Pro"
            price={2000.00}
            image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id={9}
            title="SAMSUNG 55-Inch Class Crystal UHD"
            price={3000.00}
            image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            id={10}
            title="LG 55SM8100AUA"
            price={2500.00}
            image="https://images-na.ssl-images-amazon.com/images/I/91bN%2BFgS8yL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    );
}

export default Home
