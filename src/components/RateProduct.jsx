import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './table.css';
import ProductRatingModalForm from './ProductRatingModalForm';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StarIcon from '@mui/icons-material/Star';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import RatingStars from './ratingStar';

function RateProduct() {
const [products, setProducts] = useState([]);
const [rawMaterials, setRawMaterials] = useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <div className='rate-main'>
        <div className="heading">
          <StarIcon  style={{ fontSize: "35px" }}/>
          <h2>Rate Product</h2>
          <div className="btn">
            <button onClick={openModal}>Rate Product</button>
            <Link to='/'><ExitToAppIcon  style={{ marginLeft: '30%', fontSize: "35px", color: '#1a16f3' }}/></Link>
            <ProductRatingModalForm isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Rating</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.product_id}</td>
                <td>{product.product_name}</td>
                <td><RatingStars rating={product.rating}/></td>
                <td><Link><EditIcon style={{ fontSize: "20px" ,color:'green'}}/></Link></td>
                <td><Link><DeleteForeverIcon style={{ fontSize: "20px" ,color:'red'}}/></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RateProduct;