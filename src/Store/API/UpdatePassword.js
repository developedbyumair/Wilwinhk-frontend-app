import axios from "axios"

export const updatePassword = async (data,token) =>{
    console.log(token)
    try{
        const res = await axios.post(
          `http://3.7.46.114:8000/api/v1/resetPassword?token=${token}`,
          data
        );
        return res
    }
    catch(error){
        console.log(error)
    }
}