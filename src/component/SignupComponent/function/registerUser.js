import { apiRoot, port } from "../../../envs/development";
import { GlobalURLPostFunction } from "../../GlobalFunctions/GlobalURLPostFunction";

let actualCallback = null

export const registerUser = (email, password, callback) => {
    console.log("Inside registerUser");

    let val = {
        email,
        password
    }

    actualCallback = callback

    let url = port+apiRoot+"/registerUser"

    GlobalURLPostFunction(url, val, returnData)
}

function returnData(data) {
    // console.log("Inside returnData",data)
    actualCallback(data)
}