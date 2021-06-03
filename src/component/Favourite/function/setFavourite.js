import { apiRoot, port } from "../../../envs/development";
import { getStorage } from "../../../utility/localutility";
import { GlobalURLCallFunction } from "../../GlobalFunctions/GlobalURLCallFunction";

let actualCallback = null

export const setFavourite = async(songId, callback) => {
    console.log("Inside getSongsDetails");
    
    const userCredentials = await getStorage('userCredentials')
    const { userId } = userCredentials;

    actualCallback = callback;

    let url = port+apiRoot+"/setFavourite?userId="+userId+"&songId="+songId

    GlobalURLCallFunction(url, processReturnData, actualCallback);
}

function processReturnData(response, callback, customObject){
    if(!response) {
        console.log("No data received from GlobalURLCallFunction service")
        callback([]);
        return null;
    }
    let resData = response;
    callback(resData);
    return (null);
}