import axios from "axios"

export const getVerification = async(token) =>{
    console.log(token)
try {
    const res = await axios.get(
      `http://3.7.46.114:8000/api/v1/verify?token=${token}`
    );
    return res
} catch (error) {
console.log(error)
}
}
