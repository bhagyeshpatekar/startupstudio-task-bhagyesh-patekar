import React, { useState } from 'react';
import './ProductItem.scss';

const ProductItem = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    product.is_liked = isLiked;
    setIsLiked(!isLiked);
  };

  return (
    <div className="card product-card position-relative">
      <img src={product.image} className="card-img-top" alt={product.name} />
      {product.status === 'new' && (
        <span className="badge bg-success position-absolute product-badge">
          NEW
        </span>
      )}
      {product.status === 'out-of-stock' && (
        <span className="badge bg-warning position-absolute out-of-stock-badge">
          OUT OF STOCK
        </span>
      )}
      {product.status === 'RECOMMENDED' && (
        <span className="badge bg-secondary position-absolute product-badge">
          RECOMMENDED
        </span>
      )}
      {product.status === 'POPULAR' && (
        <span className="badge bg-info position-absolute product-badge">
          POPULAR
        </span>
      )}
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          <a className="text-decoration-none">Sign in</a> or
          <a className="text-decoration-none"> Create an account</a> to see
          pricing
        </p>
        <div className="d-flex justify-content-between">
          <div>
            <b>$ {product.cost}</b>
          </div>
          <i
            className={`bi bi-heart${isLiked ? '-fill text-pink' : ''}`}
            onClick={handleHeartClick}
            style={{ cursor: 'pointer' }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
