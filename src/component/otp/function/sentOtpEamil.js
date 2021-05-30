import { apiRoot, port } from "../../../envs/development"
import { GlobalURLPostFunction } from "../../GlobalFunctions/GlobalURLPostFunction"

let actualCallBack = null

export const sentOtpEmail = async (email, otp, callback) => {

    console.log("Inside sentOtpEmail",otp)

    let data = {
        email,
        otp
    }

    actualCallBack = callback

    let url = port+apiRoot+"/sentOtpEmail"

    GlobalURLPostFunction(url, data, returnData)
}

function returnData(data) {
    console.log("Inside returnData",data)
    actualCallBack(data)
}