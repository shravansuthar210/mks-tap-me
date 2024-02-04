import { AuthType } from "../constant/type";

console.log(localStorage.getItem("phoneNumber"))
const initialState = {
  phoneNumber: localStorage.getItem("phoneNumber"),
  loading: false,
  message: undefined,
} 

const authReducer = (state = initialState , action) => {
  const { type, payload = {} } = action;
  const { message, phoneNumber } = payload;
  switch (type) {
    case AuthType.REGISTER_SUCCESS:
      return {
        ...state,
        phoneNumber,
        loading: false,
        message,
      };
    case AuthType.LOGOUT:
      return {
        ...state,
        phoneNumber: undefined,
        loading: false,
        message,
      };
    case AuthType.ERROR:
      return {
        ...state,
        loading: false,
        message,
      };

    case AuthType.LOADING:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
};

export default authReducer;
