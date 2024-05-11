import React from 'react';
import './Product.css';
import { useNavigate } from 'react-router-dom';

let data = [
  {
    src: "/assets/img/product/1.png",
    name: "Hair Vitamin with Biotin",
    rating: 4,
    massage: "100% make a type specimen book. It has survived not only centuries,",
    logo: "/assets/img/google-icon.webp"
  },
  {
    src: "/assets/img/product/2.png",
    name: "Gummies with Biotin",
    rating: 4,
    massage: "100% make a type specimen book. It has survived not only centuries,",
    logo: "/assets/img/google-icon.webp"
  },
  {
    src: "/assets/img/product/3.png",
    name: "Vitamin D",
    massage: "100% make a type specimen book. It has survived not only centuries,",
    rating: 4,
    logo: "/assets/img/google-icon.webp"
  },
  {
    src: "/assets/img/product/4.png",
    name: "Hair Shampoo",
    rating: 4,
    massage: "100% make a type specimen book. It has survived not only centuries,",
    logo: "/assets/img/google-icon.webp"
  }
];

function Product() {
  const navigate=useNavigate()
  const handleViewAll=()=>{
navigate("/shop")
  }
  return (
  <div>
   <h1 className="product-title">Our Products</h1>
      <div className="product-container container">
    
    {data.map((item, index) =>
      <div key={index} className="product-card">
        <img src={item.src} alt={item.name} />
        <p>{item.name}</p>
        <p>Rating: {item.rating}</p>
        <p>{item.massage}</p>
        <div className="btn-container">
          <button className='btn primary'>ADD TO CART</button>
        </div>
      </div>
    )}
  </div>
<div className='view-all-product'>  <button onClick={handleViewAll} className='btn primary'>VIEW ALL PRODUCTS</button></div>
  </div>
  );
}

export default Product;
