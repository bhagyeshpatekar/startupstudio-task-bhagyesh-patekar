import React from 'react';
import ProductItem from './ProductItem';

const productList = [
  {
    id: 1,
    name: 'Hand Bag',
    image: 'https://m.media-amazon.com/images/I/61GEiD8gUqL._AC_UL320_.jpg',
    status: 'new',
    is_liked: false,
    cost: '10',
  },
  {
    id: 2,
    name: 'Casual Bag',
    image: 'https://m.media-amazon.com/images/I/71+hhmO3x8L._AC_UL320_.jpg',
    status: 'out-of-stock',
    is_liked: false,
    cost: '20',
  },
  {
    id: 3,
    name: 'Orange Teddy',
    image: 'https://m.media-amazon.com/images/I/61bmA7gknSL._AC_UL320_.jpg',
    status: 'RECOMMENDED',
    is_liked: false,
    cost: '30',
  },
  {
    id: 4,
    name: 'Penguin',
    image: 'https://m.media-amazon.com/images/I/61A2ddWFQxL._AC_UL320_.jpg',
    status: 'RECOMMENDED',
    is_liked: false,
    cost: '30',
  },
  {
    id: 5,
    name: 'Pink Teddy',
    image: 'https://m.media-amazon.com/images/I/81A+9JEi5zL._AC_UL320_.jpg',
    status: 'POPULAR',
    is_liked: false,
    cost: '40',
  },
  {
    id: 6,
    name: 'Side Normal bag',
    image: 'https://m.media-amazon.com/images/I/51BQwPiX9cL._AC_UL320_.jpg',
    status: 'POPULAR',
    is_liked: false,
    cost: '50',
  },
  {
    id: 7,
    name: 'Side Leather Bag',
    image: 'https://m.media-amazon.com/images/I/81ZZzCBJBUL._AC_UL320_.jpg',
    status: '',
    is_liked: false,
    cost: '60',
  },
  {
    id: 8,
    name: 'Black Bag',
    image: 'https://m.media-amazon.com/images/I/51mSR6tpzHL._AC_UL320_.jpg',
    status: '',
    is_liked: false,
    cost: '70',
  },
  {
    id: 9,
    name: 'Black Side Bag',
    image: 'https://m.media-amazon.com/images/I/71-iIVwlcDL._AC_UL320_.jpg',
    status: '',
    is_liked: false,
    cost: '80',
  },
  {
    id: 90,
    name: 'Brown Belt',
    image: 'https://m.media-amazon.com/images/I/71upwpduqrL._AC_UL320_.jpg',
    status: '',
    is_liked: false,
    cost: '100',
  },
  {
    id: 11,
    name: 'Black Casual Bag',
    image: 'https://m.media-amazon.com/images/I/71+hhmO3x8L._AC_UL320_.jpg',
    status: '',
    is_liked: false,
    cost: '110',
  },
  {
    id: 12,
    name: 'Black Belt',
    image: 'https://m.media-amazon.com/images/I/81epVkxdHNL._AC_UL320_.jpg',
    status: '',
    is_liked: false,
    cost: '120',
  },
];

const ProductList = ({ searchValue, sortOption, onLikeProduct }) => {
  const filteredProductList = productList
    .filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'NEWEST FIRST':
          return a.status === 'new' ? -1 : 1;
        case 'PRICE : HIGH TO LOW':
          return parseFloat(b.cost) - parseFloat(a.cost);
        case 'PRICE : LOW TO HIGH':
          return parseFloat(a.cost) - parseFloat(b.cost);
        case 'RECOMMENDED':
          return a.status === 'RECOMMENDED' ? -1 : 1;
        case 'POPULAR':
          return a.status === 'POPULAR' ? -1 : 1;
        default:
          return 0;
      }
    });

  return (
    <div className="container mt-5">
      <div className="row gx-5">
        {filteredProductList.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <ProductItem product={product} onLike={onLikeProduct} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
