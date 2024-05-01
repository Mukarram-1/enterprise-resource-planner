import React, { useState, useEffect } from 'react';
import './ModalForm.css';

const ProductRatingModalForm = ({ isOpen, onClose }) => {
    const [product, setProduct] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [rating, setRating] = useState(0);
    //   const [cost, setCost] = useState(0);
    //   const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const fetchProductNames = async () => {
            try {
                const response = await fetch('http://localhost:4000/getProducts');
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data); // Set the entire product data
                    console.log("Product data", data);
                } else {
                    console.error('Failed to fetch products names');
                }
            } catch (error) {
                console.error('Error fetching products names:', error);
            }
        };
        fetchProductNames();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (selectedProduct !== "") {
            try {
                const response = await fetch("http://localhost:4000/addProductRating", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        product: selectedProduct,
                        productid: document.getElementById("productid").value,
                        rating: rating,
                    })
                });

                if (response.ok) {
                    //   console.log("Product Rating Added Successfully!");
                    // Additional logic if needed after successful submission
                    alert("Product Rating Added Successfully!")
                    window.location.href = '/RateProduct';
                } else {
                    console.error("Failed to rate product");
                }
            } catch (error) {
                console.error("Error rating product:", error);
            }
        } else {
            console.log("Please select a product and provide a valid rating.");
        }
    };

    const handleProductChange = (e) => {
        setSelectedProduct(e.target.value);
    };

    const handleProductRating = (e) => {
        setRating(e.target.value);
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="form-group">
                            <h2 style={{ textAlign: 'center' }}>Rate Product</h2>
                        </div>
                        <label htmlFor="product">Product:</label>
                        <select
                            id="product"
                            name="product"
                            value={selectedProduct}
                            onChange={handleProductChange}
                        >
                            <option value="">Select Product...</option>
                            {product.map((item, index) => ( // Change 'name' to 'item'
                                <option key={index} value={item.name}>{item.name}</option> // Change 'name' to 'item.name'
                            ))}
                        </select>

                    </div>
                    {selectedProduct && (
                        <div className="form-group">
                            <label htmlFor="productid">Product ID:</label>
                            <input
                                type="productid"
                                id="productid"
                                name="productid"
                                value={product.find(item => item.name === selectedProduct)?.id || ''} // Set the value based on selected product
                                readOnly
                            />
                        </div>
                    )}

                    <label htmlFor="rating">Rating:</label>
                    <select
                        id="rating"
                        name="rating"
                        value={rating}
                        onChange={handleProductRating}
                    >
                        <option value="">Rate...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button type="submit">Rate</button>
                </form>
            </div>
        </div>
    );
};

export default ProductRatingModalForm;
