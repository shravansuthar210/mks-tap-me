import { AuthType } from "../constant/type";
// import { signIn } from "../../api";

const storeToken = (phoneNumber) => {
  localStorage.setItem("phoneNumber", phoneNumber);
};

const loginAction = (formData) => async (dispatch) => {
  // try {
  //   const { data } = await signIn(formData);
  //   const { token } = data;
    storeToken(formData.phoneNumber);
    dispatch({
      type: AuthType.REGISTER_SUCCESS,
      payload: { ...formData, },
    });
  // } catch (error) {
  //   dispatch({
  //     type: AuthType.ERROR,
  //     payload: error.response.data || "Error",
  //   });
  // }
};

const pageLoader =
  (active = true) =>
  async (dispatch) => {
    dispatch({
      type: AuthType.LOADING,
      payload: active,
    });
  };

export { loginAction, pageLoader };
