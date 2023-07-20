import axios from "axios";

export const responseSignup = async (
  data,
  setpasswordError,
  setconfirmPasswordError,
  setPhoneError
) => {
  try {
    const res = await axios.post(
      "http://3.7.46.114:8000/api/v1/signup",
      data
    );
    // console.log(res, "Data of response");
    return res;
  } catch (error) {
    // console.log(error);
    if (error?.response.data.error) {
      error?.response.data.error.map((e) => {
        if (e.msg === "Passwords do not match") {
          setpasswordError(true);
          setconfirmPasswordError(true);
        } else if (
          e.msg ===
          "Phone number should be minimum 10 digits"
        ) {
          setPhoneError(true)
        }
      });
    }
  }
};