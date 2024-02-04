import { ProductType } from "../constant/type";
import { signIn } from "../../api";

const getProductAction = (formData) => async (dispatch) => {
  try {
    const { data } = await signIn(formData);
    dispatch({
      type: ProductType.GET_PRODUCT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductType.ERROR,
      payload: error.response.data || "Error",
    });
  }
};

const pageLoader =
  (active = true) =>
  async (dispatch) => {
    dispatch({
      type: ProductType.LOADING,
      payload: active,
    });
  };

export { getProductAction, pageLoader };
