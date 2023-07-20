import axios from "axios";
export const FetchBlogSingle = async(id,token) =>{
    
try {
    const response = await axios.get(
      `http://3.7.46.114:8000/admin/fetchSingleBlog/${id}`,
      {
        headers: {
          auth: token,
        },
      }
    );
    // console.log(response,"response of Blog single");
    return response
} catch (error) {
    console.log(error);
}
}