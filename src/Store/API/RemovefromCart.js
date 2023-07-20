import axios from "axios";

export const RemovefromCartAPI = async (id, token) => {
  try {
    // console.log(token, "token");
    const res = await axios.delete(
      `http://3.7.46.114:8000/api/v1/removeFromCart/${id}`,
      {
        headers: {
          auth: token,
        },
      }
    );
    // console.log(res, "response to delete cart");
    return res;
  } catch (error) {
    console.log(error);
  }
};
