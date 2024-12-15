import React, { useState } from "react";
import { FaRegHeart, FaTrashAlt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { request } from "../api";

const Products = ({ data, isAdmin }) => {
  const [editProduct, setEditProduct] = useState(null);

  const handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      request.delete(`/product/delete/${id}`).then(() => {
        alert("Product deleted successfully!");
      });
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedProduct = Object.fromEntries(formData);

    updatedProduct.price = +updatedProduct.price;
    updatedProduct.categoryId = +updatedProduct.categoryId;
    updatedProduct.stock = +updatedProduct.stock;

    request
      .patch(`/product/update/${editProduct.id}`, updatedProduct)
      .then(() => {
        alert("Product updated successfully!");
        setEditProduct(null);
      });
  };

  const productItems = data?.map((product) => (
    <div key={product.id} className="w-80 p-4 shadow-lg rounded-lg bg-white">
      <img
        src={product.image}
        className="w-full h-60 object-cover rounded-md mb-4"
        alt={product.name}
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mt-2">{product.price} USD</p>
      <div className="flex items-center justify-between mt-4 text-xl">
        {isAdmin ? (
          <button
            onClick={() => handleDelete(product.id)}
            className="text-red-500 hover:text-red-600"
          >
            <FaTrashAlt />
          </button>
        ) : (
          <button className="text-gray-600 hover:text-gray-800">
            <FaRegHeart />
          </button>
        )}
        {isAdmin ? (
          <button
            className="text-blue-500 hover:text-blue-600 text-2xl"
            onClick={() => handleEdit(product)}
          >
            <CiEdit />
          </button>
        ) : (
          <button className="text-green-500 hover:text-green-600">
            <MdOutlineShoppingCart />
          </button>
        )}
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto mt-6">
      <div className="flex gap-6 flex-wrap">{productItems}</div>

      {editProduct && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md w-96 relative">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Edit Product
            </h3>
            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  className="border border-gray-300 rounded-md w-full p-2"
                  type="text"
                  name="name"
                  defaultValue={editProduct.name}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  className="border border-gray-300 rounded-md w-full p-2"
                  type="number"
                  name="price"
                  step="0.01"
                  defaultValue={editProduct.price}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  className="border border-gray-300 rounded-md w-full p-2"
                  type="text"
                  name="image"
                  defaultValue={editProduct.image}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock Quantity
                </label>
                <input
                  className="border border-gray-300 rounded-md w-full p-2"
                  type="number"
                  name="stock"
                  defaultValue={editProduct.stock}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
              >
                Save Changes
              </button>
            </form>
            <button
              onClick={() => setEditProduct(null)}
              className="mt-4 text-gray-600 hover:text-gray-800 absolute top-0 right-7 text-2xl"
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
