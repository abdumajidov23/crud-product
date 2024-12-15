import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import Products from "../../../components/Products";

const ManageProduct = () => {
  const { data, loading } = useFetch("/product/get");
  return (
    <div>
      <h3>ManageProduct</h3>
      {loading && <p>Loading...</p>}
      <Products isAdmin={true} data={data} />
    </div>
  );
};

export default ManageProduct;
