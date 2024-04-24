import React, { useState, useEffect } from 'react';
import './table.css';
import Sidebar from "./DashBoardSidebar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import ProductModalForm from './productmodalform';
import UpdateProductsModal from './updateproducts';
import toast, { Toaster } from 'react-hot-toast';
function Products() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openaddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeaddModal = () => {
    setIsAddModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/getProducts");
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

  const handleDelete = async (id, name) => {
    try {
      const response = await fetch(`http://localhost:4000/deleteproduct/${id}/${name}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
        toast.success('Product deleted successfully!');
      } else {
        console.error('Failed to delete product from the database');
        toast.error('Product could not delete.');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product); // Set the selected employee when edit icon is clicked
    openModal(); // Open the modal
  };

  return (
    <div>
      <Sidebar />
      <div className='main'>
        <div className="manageheading">
          <h2>Manage Products</h2>
          <div className="modalbtn">
            <button onClick={openaddModal}>Add Product</button>
            <ProductModalForm isOpen={isAddModalOpen} onClose={closeaddModal} />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Cost</th>
              <th>Category</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.cost}</td>
                <td>{product.category}</td>
                <td><Link><EditIcon onClick={() => handleEdit(product)}
                  style={{ fontSize: "20px", color: 'green' }} /></Link></td>
                <td><Link><DeleteForeverIcon onClick={() => handleDelete(product.id, product.name)} style={{ fontSize: "20px", color: 'red' }} />
                  <Toaster
                    position="top-center"
                    reverseOrder={false}
                  />
                </Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UpdateProductsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
}

export default Products;