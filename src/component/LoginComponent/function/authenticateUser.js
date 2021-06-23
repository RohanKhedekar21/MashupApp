import { apiRoot, port } from "../../../envs/development";
import { GlobalURLPostFunction } from "../../GlobalFunctions/GlobalURLPostFunction";

let actualCallback = null

export const authenticateUser = async (email, password, callback) => {
    console.log("Inside authenticateUser");

    let val = {
        email,
        password
    }

    actualCallback = callback

    let url = port + apiRoot + "/doLogin"

    GlobalURLPostFunction(url, val, returnData)
}

function returnData(data) {
    console.log("Inside returnData", data)
    actualCallback(data)
}