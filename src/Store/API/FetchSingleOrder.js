import axios from "axios"
export const GetSingleOrder = async(id,auth) =>{
try {
   const res = await axios.get(
     `http://3.7.46.114:8000/api/v1/fetchSingleOrder/${id}`,
     {
       headers: {
         auth: auth,
       },
     }
   );
  //  console.log(res,"response to get order");
   return res 
} catch (error) {
    console.log(error);
}
}