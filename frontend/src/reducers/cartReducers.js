import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_GET_ITEM, CART_PUT_ITEM } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state };
    case CART_PUT_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item._id === action.payload._id
            ? { ...item, qty: action.payload.qty, priceTotal: action.payload.priceTotal }
            : item,
        )
      }
    case CART_GET_ITEM:
      return { cartItems: [...action.payload] };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => {
          if (item._id !== action.payload) {
            return {...item}
          }
        })
      };
    // case CART_SAVE_SHIPPING:
    //   return { ...state, shipping: action.payload };
    // case CART_SAVE_PAYMENT:
    //   return { ...state, payment: action.payload };
    default:
      return state
  }
}

export { cartReducer }