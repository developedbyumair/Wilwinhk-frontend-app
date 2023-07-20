import axios from "axios";

export const AddtoCartAPI = async (token, data) => {
  try {
    // console.log(token,"token");
    const res = await axios.post(
      "http://3.7.46.114:8000/api/v1/addToCart",
      data,
      {
        headers: {
          auth: token,
        },
      }
    );
    // console.log(res, "response to add cart");
    return res;
  } catch (error) {
    console.log(error);
  }
};
