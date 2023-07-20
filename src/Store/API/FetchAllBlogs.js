import axios from "axios";
export const FetchBlog = async (id) => {
    console.log(id,"token");
  try {
    const response = await axios.get(
      "http://3.7.46.114:8000/admin/fetchBlogs",
      {
        headers: {
          auth: id,
        },
      }
    );
    // console.log(response, "response of Blogs");
    return response;
  } catch (error) {
    console.log(error);
  }
};
