import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByIdAsync, selectProductById } from './productSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../nav/Navbar';
import ProductDetailSlider from './ProductDetailSlider';
import './ProductDetail.css';
import Product from '../product-list/Product'
import ShoppingFeature from '../shopping-feature/ShoppingFeature'
import Footer from '../footer/Footer'
function ProductDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector(selectProductById);
  const [quantity, setQuantity] = useState(1); // Initialize quantity state with 1

  useEffect(() => {
    dispatch(fetchProductByIdAsync(params.id));
  }, [dispatch, params.id]);

  // Function to handle incrementing quantity
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to handle decrementing quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  console.log(product);

  return (
    <Navbar>
      <div className="barr">
        <div className="container">
          <h4 className="hoem">Home &gt; Product &gt; {product?.title}</h4>
        </div>
      </div>
      <div className='container'>
        <div className='product-section'>
          <div className='product-image'><img src={product?.thumbnail} alt={product?.title} /></div>
          <div className='product-detail'>
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            
            <div className="quantity-input">
            <h1>Price Rs {product?.price}</h1>
             
             <div className='cout-cont'> <input type="number" value={quantity} readOnly />
             <div className='count-item'> <button onClick={incrementQuantity}>+</button>
               <button onClick={decrementQuantity}>-</button></div></div>
            </div>
           <div> <button className="shop-btn1 btn-222">Buy Now</button>
            <button  className="shop-btn1 btn-33">Add to cart</button></div>
          </div>
        </div>
      </div>
      <div className='container detail-cont'>
        <h1>Product Detail</h1>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
      </div>
      <div className='container'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFaQLv4xMAdfKo3N6F-5QgGB3sv0hkxxkGJRtdSB6DyA&s'/>
      </div>
      <Product/>
      <ShoppingFeature/>
      <Footer/>
    </Navbar>
  );
}

export default ProductDetail;
