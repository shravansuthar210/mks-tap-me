import { OrderType } from "../constant/type";

const initialState = {
  order: undefined,
  loading: false,
  message: undefined,
};

const productReducer = (state = initialState, action) => {
  const { type, payload = {} } = action;
  const { message, order } = payload;
  switch (type) {
    case OrderType.CREATE_ORDER:
      return {
        ...state,
        order,
        loading: false,
        message,
      };
    case OrderType.ERROR:
      return {
        ...state,
        loading: false,
        message,
      };

    case OrderType.LOADING:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
};

export default productReducer;
