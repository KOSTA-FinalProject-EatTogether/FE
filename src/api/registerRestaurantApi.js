import axios from "axios";
import {API_URL} from "./api.js"

export const postAdd = async(rs_document) =>{
    const header = {
        headers: {"Content-Type" : "multipart/form-data"}
    }

    console.log("rs_document : " , rs_document)

    //경로 뒤 '/' 주의
    const res = await axios.post(`${API_URL}/`, rs_document, header)

    return res.data
}