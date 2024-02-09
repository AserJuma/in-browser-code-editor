import axios from "axios"
import {LANGUAGE_VERSIONS} from "./constants.jsx";

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
})

export const execute = async(language, code) => {
    const response = await API.post("/execute", {
        "language": language,
        "version": LANGUAGE_VERSIONS[language],
        "files": [
            {
                "content": code,
            }
        ],
    })
    return response.data
}

export const checkRuntimes = async () => {
    const response = await API.get("/runtimes")
    return response.data
}
