// src/pages/ProductDetail.js
import { useState } from 'react';
// import productsData from '../data/productsData'; // Assuming you have a productsData file
import { RiDiscountPercentFill } from 'react-icons/ri';
import { CiShop } from 'react-icons/ci';
import { PiSealCheck } from 'react-icons/pi';
import { CiDeliveryTruck } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { BiSolidCloudDownload } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id));

  const navigate = useNavigate(); // hook للتنقل بين الصفحات

  // const handleBuyNow = () => {
  //   navigate('/checkout'); // يرسل المستخدم إلى صفحة الشراء
  // };

  const [paymentOption, setPaymentOption] = useState('payNow'); // payNow أو buyIn
  const [installmentMonths, setInstallmentMonths] = useState(3); // المدة الافتراضية 3 أشهر

  // التحقق من أن newprice هو رقم صالح وتنسيق السعر
  const newPrice = product?.newprice || 0; // التحقق من وجود سعر المنتج
  const monthlyInstallment = (newPrice / installmentMonths) * 1.5;

  const [mainImage, setMainImage] = useState(product.image);

  const [isActive, setIsActive] = useState(false);

  const toggleIcon = () => {
    setIsActive(!isActive);
  };

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-images">
        <div className="main-image">
          <img src={mainImage} alt={product.name} /> {/* استخدام الحالة للصورة الرئيسية */}
          <div className="icons">
            {/* <button><CiHeart /></button> */}
            <button onClick={toggleIcon}>{isActive ? <FaHeart /> : <CiHeart />}</button>
            <button>
              <IoIosNotificationsOutline />
            </button>
            <button>
              <BiSolidCloudDownload />
            </button>
          </div>
        </div>
        <div className="image-thumbnails">
          <img
            src={product.image1}
            alt={`${product.name} image1`}
            onClick={() => setMainImage(product.image1)} // تحديث الصورة الرئيسية عند النقر
          />
          <img
            src={product.image2}
            alt={`${product.name} image2`}
            onClick={() => setMainImage(product.image2)} // تحديث الصورة الرئيسية عند النقر
          />
          <img
            src={product.image3}
            alt={`${product.name} image3`}
            onClick={() => setMainImage(product.image3)} // تحديث الصورة الرئيسية عند النقر
          />
          <img
            src={product.image4}
            alt={`${product.name} image4`}
            onClick={() => setMainImage(product.image4)} // تحديث الصورة الرئيسية عند النقر
          />
          <img
            src={product.image}
            alt={`${product.name} image5`}
            onClick={() => setMainImage(product.image)} // تحديث الصورة الرئيسية عند النقر
          />
        </div>
      </div>
      {/* <div className="product-images">
        <div className="main-image">
          <img src={product.image} alt={product.name} />
          <div className='icons'>
            <button><CiHeart/></button>
            <button><IoIosNotificationsOutline/></button>
            <button><BiSolidCloudDownload/></button>
          </div>
        </div>
        <div className="image-thumbnails">
          <img src={product.image1} alt={`${product.name} image1`} />
          <img src={product.image2} alt={`${product.name} image2`} />
          <img src={product.image3} alt={`${product.name} image3`} />
          <img src={product.image4} alt={`${product.name} image4`} />
          <img src={product.image}  alt={`${product.name} image5`} />
        </div>

      </div> */}

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="evaluation">
          <span className="star">★{product.evaluation}</span> | <span>sold 125</span>
        </p>
        <div className="icons">
          <p>
            <CiShop /> In Stock
          </p>
          <p>
            <PiSealCheck /> Guaranteed
          </p>
          <p>
            <CiDeliveryTruck /> Free Delivery
          </p>
        </div>

        <ul>
          <div className="dot">
            <GoDotFill />
            <GoDotFill />
            <GoDotFill />
            <GoDotFill />
            <GoDotFill />
          </div>
          <li>
            <p>brand</p>
            <p>{product.brand}</p>
          </li>
          <li>
            <p>Model Name</p>
            <p>{product.category}</p>
          </li>
          <li>
            <p>Screen Size</p>
            <p>{product.size}</p>
          </li>
          <li>
            <p>Hard Disk Size</p>
            <p>{product.ram}</p>
          </li>
          <li>
            <p>CPU Model</p>
            <p>{product.cpu}</p>
          </li>
        </ul>
      </div>

      <div className="product-pay">
        <h1>${product.newprice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1>
        <p className="last-price">Last price: ${product.oldprice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        <p className="discount">
          <RiDiscountPercentFill />
          <span>-12%</span>
        </p>

        <label className="payNow">
          <input type="radio" name="payOption" value="payNow" checked={paymentOption === 'payNow'} onChange={() => setPaymentOption('payNow')} />
          <p>Pay Now</p>
        </label>

        <div>
          <label className="buyIn">
            <input type="radio" name="payOption" value="buyIn" checked={paymentOption === 'buyIn'} onChange={() => setPaymentOption('buyIn')} />
            <p>Buy in installments</p>
          </label>

          {/* عرض أزرار المدة بناءً على خيار التقسيط */}
          <div className={`every-btn ${paymentOption === 'payNow' ? 'inactive' : ''}`}>
            {[3, 6, 12, 18].map((months) => (
              <button
                key={months}
                className={installmentMonths === months ? 'active' : ''}
                onClick={() => setInstallmentMonths(months)}
                disabled={paymentOption === 'payNow'} // تعطيل الأزرار إذا تم اختيار Pay Now
              >
                <span>{months}</span>
                <span className="month">Month</span>
              </button>
            ))}
          </div>

          {/* عرض القسط الشهري عند اختيار "التقسيط"  mas3od sabak*/}
          {paymentOption === 'buyIn' && newPrice > 0 && (
            <p className="priceInstallment">
              ${monthlyInstallment.toFixed(2)}
              <span>/Month</span>
            </p>
          )}
        </div>

        {/* خيارات الشراء */}
        <div className="buy-options">
          <button
            className="buyNow active"
            onClick={() => {
              addToCart(product);
              navigate('/cart');
            }}
          >
            Buy Now
          </button>
          <button className="addToCart" onClick={() => addToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
