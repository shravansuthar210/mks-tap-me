import { ProductType } from "../constant/type";

const initialState = {
  products: undefined,
  categories: undefined,
  loading: false,
  message: undefined,
};

const productReducer = (state = initialState, action) => {
  const { type, payload = {} } = action;
  const { message, products, categories } = payload;
  switch (type) {
    case ProductType.GET_PRODUCT:
      return {
        ...state,
        products,
        categories,
        loading: false,
        message,
      };
    case ProductType.ERROR:
      return {
        ...state,
        loading: false,
        message,
      };

    case ProductType.LOADING:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
};

export default productReducer;
