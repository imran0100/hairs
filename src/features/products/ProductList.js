import React,{useEffect} from 'react';
import './productList.css';

import { selectAllProducts,fetchAllProductAsync } from './productSlice'; 

import {  useDispatch,useSelector } from 'react-redux';
import {Hourglass} from 'react-loader-spinner';
import { Link,Navigate, useNavigate } from 'react-router-dom';
 



function ProductList() {
const navigate=useNavigate()
  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(fetchAllProductAsync());
  }, [dispatch]);
const products=useSelector(selectAllProducts)
const status = useSelector(state => state.product.status);
console.log(products);
return (
  <div className="product-list-container">
    {status === 'loading' ? (
      <div className="loader"><Hourglass  type="Puff" color="#00BFFF" height={50} width={50} /></div>
    ) : (
      products?.map((product, index) => (
        <div className="product-item" key={index}>
          {/* <Link to={`/product-detail/${product.id}`} key={product.id}></Link> */}
          <img alt='image' src={product.thumbnail} alt={product.name} />
          <p>{product.title}</p>
          <p>${product.price}</p>
          <button onClick={()=>navigate(`/product-detail/${product.id}`)} className="btn primary prod-button">ADD TO CART</button>
        </div>
      ))
    )}
  </div>
);
}

export default ProductList;
