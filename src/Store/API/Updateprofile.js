import axios from "axios"

export const UpdateProfile = async() =>{
try {
    const res = axios.patch("http://15.206.128.120:8000/");
} catch (error) {
    console.log(error)
}
}