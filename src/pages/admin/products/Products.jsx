import React from "react";
import AdminTop from "../../../components/adminTop/AdminTop";
import useFetch from "../../../hooks/datafetch";

const Products = () => {
  let title = "Product";
  let { data, loading, error } = useFetch(`/products`);
  let productData = data?.products.map((product) => {
    return (
      <tr className="table__row" key={product.id}>
        <td className="table__img">
          <img src={product.images[0]} alt="" />
        </td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.brand}</td>
        <td>{product.stock}</td>
        <td>{product.category}</td>
      </tr>
    );
  });
  return (
    <div className="container">
      <AdminTop title={title} />
      <div className="products">
        <div className="product">
          <table className="table">
            <thead className="table__head">
              <tr className="table__row">
                <th>Owner</th>
                <th>Name</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Stock</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody className="table__body">{productData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
