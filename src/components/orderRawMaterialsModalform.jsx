// import React, { useState, useEffect } from 'react';
// import './ModalForm.css';

// const OrderRawMaterialsModalForm = ({ isOpen, onClose }) => {
//   const [vendors, setVendors] = useState([]);
//   useEffect(() => {
//     const fetchVendorNames = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/getVendors');
//         if (response.ok) {
//           const data = await response.json();
//           // Extracting names from the received data and setting the state
//           const names = data.map(vendors => vendors.name);
//           setVendors(names);
//         } else {
//           console.error('Failed to fetch vendors names');
//         }
//       } catch (error) {
//         console.error('Error fetching vendors names:', error);
//       }
//     };
//     fetchVendorNames();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here, for example: send formData to an API
//     // Close the modal after submission
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <div className="form-group">
//               <h2 style={{ textAlign: 'center' }}>Order Raw Materials</h2>
//             </div>
//             <label htmlFor="vendor">Vendor:</label>
//             <select
//               id="vendor"
//               name="vendor"
//             >
//               <option value="">Select Vendor...</option>
//               {vendors.map((name, index) => (
//                 <option key={index} value={name}>{name}</option>
//               ))}
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="reqMaterial">Materials:</label>
//             <input
//               type="text"
//               id="reqMaterial"
//               name="reqMaterial"
//             // value={formData.reqMaterial}
//             // onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="quantity">Quantity:</label>
//             <input
//               type="text"
//               id="quantity"
//               name="quantity"
//             // value={formData.quantity}
//             // onChange={handleChange}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OrderRawMaterialsModalForm;

import React, { useState, useEffect } from 'react';
import './ModalForm.css';

const OrderRawMaterialsModalForm = ({ isOpen, onClose }) => {
  const [vendors, setVendors] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState('');
  const [materials, setMaterials] = useState([]);

  console.log('selectedVendor:', selectedVendor);
  console.log('materials:', materials);

  useEffect(() => {
    const fetchVendorNames = async () => {
      try {
        const response = await fetch('http://localhost:4000/getVendors');
        if (response.ok) {
          const data = await response.json();
          const names = data.map(vendor => vendor.name);
          setVendors(names);
        } else {
          console.error('Failed to fetch vendors names');
        }
      } catch (error) {
        console.error('Error fetching vendors names:', error);
      }
    };
    fetchVendorNames();
  }, []);

  useEffect(() => {
    const fetchMaterials = async () => {
      if (selectedVendor) {
        try {
          const response = await fetch(`http://localhost:4000/getMaterials/${selectedVendor}`);
          if (response.ok) {
            const data = await response.json();
            console.log("Data received for materials: ",data);
            const materialnames = data.map(materialname => materialname.materials);
            setMaterials(materialnames)
          } else {
            console.error('Failed to fetch materials');
          }
        } catch (error) {
          console.error('Error fetching materials:', error);
        }
      }
    };
    fetchMaterials();
  }, [selectedVendor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleVendorChange = (e) => {
    setSelectedVendor(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-group">
              <h2 style={{ textAlign: 'center' }}>Order Raw Materials</h2>
            </div>
            <label htmlFor="vendor">Vendor:</label>
            <select
              id="vendor"
              name="vendor"
              value={selectedVendor}
              onChange={handleVendorChange}
            >
              <option value="">Select Vendor...</option>
              {vendors.map((name, index) => (
                <option key={index} value={name}>{name}</option>
              ))}
            </select>
          </div>
          {selectedVendor && materials && materials.length > 0 && (
            <div className="form-group">
              <label htmlFor="reqMaterial">Materials:</label>
              <select id="reqMaterial" name="reqMaterial">
                <option value="">Select Material...</option>
                {materials.map((material, index) => (
                  <option key={index} value={material}>{material}</option>
                ))}
              </select>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default OrderRawMaterialsModalForm;
