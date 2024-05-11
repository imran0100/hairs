import React, { useState, useEffect } from 'react';
import AdminNavbar from '../admin-dashboard/AdminNavbar';

function EditDeleteProduct() {
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editData, setEditData] = useState({
    name: '',
    price: '',
    quantity: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products?limit=18');
      const data = await response.json();
      console.log(data,"kkkk");
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleEdit = (index) => {
    setEditMode(index);
    setEditData(products[index]);
  };

  const handleSave = (index) => {
    // Save changes to the product
    console.log('Saved changes for product:', editData);
    setEditMode(null);
  };

  const handleDelete = (index) => {
    // Delete the product
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    console.log('Deleted product:', products[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setEditData({ ...editData, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
   <AdminNavbar>
    <h2>Edit/Delete Products</h2>
     <div className="edit-delete-product-container">
      
      {products.map((product, index) => (
        <div className="product-item" key={index}>
          <img src={editMode === index ? editData.thumbnail : product.thumbnail} alt={product.name} />
          {editMode === index ? (
            <div className="edit-mode">
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="price"
                value={editData.price}
                onChange={handleChange}
              />
              <input
                type="text"
                name="quantity"
                value={editData.quantity}
                onChange={handleChange}
              />
              <textarea
                name="description"
                value={editData.description}
                onChange={handleChange}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <button onClick={() => handleSave(index)}>Save</button>
            </div>
          ) : (
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Description: {product.description}</p>
            </div>
          )}
          <div className="action-buttons">
            <button onClick={() => handleEdit(index)}>
              {editMode === index ? 'Cancel' : 'Edit'}
            </button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
   </AdminNavbar>
  );
}

export default EditDeleteProduct;
