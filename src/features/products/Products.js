import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import "./Products.css";
import Product from "./ProductList";
import { FaArrowRight } from "react-icons/fa";
const Products = () => {
  const [minValue, set_minValue] = useState(0);
const [maxValue, set_maxValue] = useState(5000);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};
  return (
  <>
  <div className="barr">
    <div className="container">
      <h4 className="hoem">Home &gt; Shop</h4>
    </div>
  </div>
    <div className="container-Products container">
      <div className="col-3">
        {/* Content for the first column */}
        <h4 className="filter-price-heading">FILTER BY PRICE</h4>
        <div className="filter-price"><h4>PRICE</h4>
        <MultiRangeSlider
			min={0}
			max={5000}
			step={21}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
		/>
    <h4>Rs {minValue} - Rs {maxValue}</h4>
        </div>
        <div className="fiter-rating">
          <h4>FILTER BY RATING</h4>
          <label className="rating-lebel">
            <input type="checkbox" value="4plus" />4 Stars and Above
          </label>
          <label className="rating-lebel">
            <input type="checkbox" value="below3" />
            3 Stars and Above
          </label>
          <label className="rating-lebel">
            <input type="checkbox" value="below3" />
            2 Stars and Above
          </label>
          <label className="rating-lebel lavel">
            <input type="checkbox" value="below3" />
            1 Stars and Above
          </label>
        </div>
        <div>
          <img src="https://hairsncares.com/assets/img/banner/banner-2.png" />
        </div>
      </div>
      <div className="col-9">
        <div>
          <ul className="nav-tabs" id="myTab" role="tablist">
            <li>
              <a href="#" className="text-uppercase">
                Sort By:
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="relevant-tab"
                data-bs-toggle="tab"
                data-bs-target="#relevant"
                href="#"
                role="tab"
                aria-controls="relevant"
                aria-selected="true"
              >
                Relevant Products<span className="arrow-down"></span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="popular-tab"
                data-bs-toggle="tab"
                data-bs-target="#popular"
                href="#"
                role="tab"
                aria-controls="popular"
                aria-selected="false"
              >
                Popular Products{" "}
                <span className="arrow-down arrow-down-one"></span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="latest-tab"
                data-bs-toggle="tab"
                data-bs-target="#latest"
                href="#"
                role="tab"
                aria-controls="latest"
                aria-selected="false"
              >
                Latest Products
                <span className="arrow-down arrow-down-two"></span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="kit-tab"
                data-bs-toggle="tab"
                data-bs-target="#kit"
                href="#"
                role="tab"
                aria-controls="kit"
                aria-selected="false"
              >
                Kits <span className="arrow-down arrow-down-two"></span>
              </a>
            </li>
          </ul>
        </div>
        {/* Content for the second column */}

        <Product />
      </div>
    </div>
  </>
  );
};

export default Products;
