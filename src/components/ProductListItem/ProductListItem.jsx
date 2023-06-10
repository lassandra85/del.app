import React from 'react';
import { GrCart } from 'react-icons/gr';
import {
  ListItem,
  Image,
  Title,
  Description,
  Price,
  Category,
  DescriptionWrapper,
  AddToCartButton,
} from './ProductListItem.styled';


const ProductListItem = ({
  product: { _id, title, imgUrl, description, category, price },
  shopId,
  addToCart,
}) => {
  const item = { _id, title, price, shopId: shopId, imgUrl, quantity: 1 };

  return (
    <ListItem>
      
      <Image src={imgUrl} alt={title} width="330" />
      <DescriptionWrapper>
        {' '}
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>${price}</Price>
        <Category>{category}</Category>
      </DescriptionWrapper>
      <AddToCartButton
        onClick={() => {
          addToCart(item);
          
        }}
      >
        Add to cart <GrCart />{' '}
      </AddToCartButton>
    </ListItem>
  );
};

export default ProductListItem;