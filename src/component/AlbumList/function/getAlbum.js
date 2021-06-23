import {port, apiRoot} from '../../../envs/development'
import { GlobalURLCallFunction } from '../../GlobalFunctions/GlobalURLCallFunction';
let actualCallback = null;

export const getAlbum = (callback) => {
    console.log("Inside getAlbum");

    actualCallback = callback;

    // let port = ":7071/";

    let url = port+apiRoot+"/getAlbums"

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