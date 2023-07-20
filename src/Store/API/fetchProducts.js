import axios from "axios";
export const FetchAllProducts = async () => {
  try {
    const res = await axios.get("http://3.7.46.114:8000/admin/getAllProducts");
    console.log(res, "response all products");
    // console.log(res,"response all products")
    if (res.status === 200) {
      return res.data.product;
    }
  } catch (error) {
    console.log(error);
  }
};
