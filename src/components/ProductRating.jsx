import React, { useState, useEffect } from 'react';
import './table.css';
import Sidebar from "./DashBoardSidebar";
import RatingStars from './ratingStar';

function ProductRating() {
const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/getProductRating");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        console.log("Data Read:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className='main'>
        <div className="manageheading">
          <h2>Products Ratings</h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.product_id}</td>
                <td>{product.product_name}</td>
                <td><RatingStars rating={product.rating}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductRating;