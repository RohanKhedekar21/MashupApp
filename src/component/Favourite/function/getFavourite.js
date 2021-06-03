import {port, apiRoot} from '../../../envs/development'
import { getStorage } from '../../../utility/localutility';
import { GlobalURLCallFunction } from '../../GlobalFunctions/GlobalURLCallFunction';
let actualCallback = null;

export const getFavourite = async (callback) => {
    console.log("Inside getFavourite");

    actualCallback = callback;

    // let port = ":7071/";
    const userCredentials = await getStorage('userCredentials')
    const { userId } = userCredentials;

    let url = port+apiRoot+"/getFavourite?userId="+userId

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