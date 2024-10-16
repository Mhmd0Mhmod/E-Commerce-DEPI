import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaStar } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import productsData from '../data/productsData';

const MoreProducts = ({ products , addToCart }) => {


  const [isActive, setIsActive] = useState(false);

  const toggleIcon = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="recommended-products">
      <h4>Customers who viewed items in your browsing history also viewed</h4>
      
      <Swiper slidesPerView={4} spaceBetween={2} pagination={{clickable:true}} loop={true} modules={[Navigation]} className="mySwiper">
        {productsData && productsData.length > 0 ? (
          productsData.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="productItem">
                <img src={product.image} alt={product.name} className="product-image" />
                <h5>{product.name}</h5>
                <p className="price">${product.newprice}</p>
                <div className="rating">
                  <FaStar /> {product.evaluation}
                </div>
                <div className="actions">
                {/* onClick={() => addToCart(product)} */}
                  <button className="add-to-cart" >
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <button className="wishlist" onClick={toggleIcon}>
                    {isActive ? <FaHeart /> : <CiHeart />}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>No recommended products available</p>
        )}
      </Swiper>
    </div>
  );
};

export default MoreProducts;
