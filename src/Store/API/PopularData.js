import axios from "axios";

export const PopularData = async(token) =>{
    try {
        const res = await axios.get(
          "http://3.7.46.114:8000/api/v1/popularSearchedProducts",
          {
            headers: {
              auth: token,
            },
          }
        );
        return res
    } catch (error) {
       console.log(error); 
    }
} 