const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.id),
      };

    case "OPEN_CART":
      return {
        ...state,
        isBarOpen: true,
      };

    case "CLOSE_CART":
      return {
        ...state,
        isBarOpen: false,
      };

    default:
      return state;
  }
};

export { CartReducer };
