import { useParams, useLocation } from "react-router-dom";
import { ProductDiscountType } from "../../Data/Pro_discount";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const product = location.state.product as ProductDiscountType;

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {id}</p>
      <div className="flex">
        <p>Brand: {product.brand}</p>
        <p>Price: {product.price}</p>
        <img src={product.image} alt={`${product.brand} product`} />
      </div>
    </div>
  );
};

export default Detail;
