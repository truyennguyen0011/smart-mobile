import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const product = state.cartItems.find(x => x.prdID === item.prdID);
      if (product) {
        return {
          cartItems:
            state.cartItems.map(x => x.prdID === product.prdID ? item : x)
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      return { cartItems: state.cartItems.filter(x => x.prdID !== action.payload) };
    // case CART_SAVE_SHIPPING:
    //   return { ...state, shipping: action.payload };
    // case CART_SAVE_PAYMENT:
    //   return { ...state, payment: action.payload };
    default:
      return state
  }
}

export { cartReducer }