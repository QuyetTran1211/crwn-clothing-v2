import {
  CartItemContainer,
  BackGroundImage,
  ItemDetails,
  Name,
} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <BackGroundImage imageUrl={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
