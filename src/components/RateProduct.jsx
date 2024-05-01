import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './table.css';
import ProductRatingModalForm from './ProductRatingModalForm';
import UpdateProductsRatingModal from './updateProductRating';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StarIcon from '@mui/icons-material/Star';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import RatingStars from './ratingStar';

function RateProduct() {
const [products, setProductsRating] = useState([]);
const [selectedProductRating, setSelectedProductRating] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:4000/getProductRating");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProductsRating(data);
      console.log("Data Read:", data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProductRating = async (productId) => {
    try {
      const response = await fetch(`http://localhost:4000/deleteRating/${productId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error("Failed to delete product rating");
      }
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product rating:", error);
    }
  };
  
  const handleEdit = (productsRating) => {
    setSelectedProductRating(productsRating);
    openUpdateModal();
  };

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
            {products.map((productsRating) => (
              <tr key={productsRating.id}>
                <td>{productsRating.product_id}</td>
                <td>{productsRating.product_name}</td>
                <td><RatingStars rating={productsRating.rating}/></td>
                <td><Link><EditIcon onClick={() => handleEdit(productsRating)} style={{ fontSize: "20px", color: 'green' }} /></Link></td>
                <td><Link><DeleteForeverIcon onClick={() => deleteProductRating(productsRating.product_id)} style={{ fontSize: "20px" ,color:'red'}}/></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UpdateProductsRatingModal
        isOpen={isUpdateModalOpen}
        onClose={closeUpdateModal}
        product_rating={selectedProductRating}
      />
    </div>
  );
}

export default RateProduct;