import axios from "axios";

export const Subscribe = async(data) =>{
    try {
        const res = await axios.post(
          "http://3.7.46.114:8000/api/v1/addSubscription",
          data
        );
        return res
    } catch (error) {
        console.log(error);
    }
}