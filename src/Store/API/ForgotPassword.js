import axios from "axios";

export const forgotPassword = async (data) => {
  try {
    const res = await axios.post(
      `http://chaudharyabdullahasif@gmail.com:8000/api/v1/forgetPassword`,
      data
    );
    return res;
  } catch (error) {
    // console.log(error);
    return error
  }
};
