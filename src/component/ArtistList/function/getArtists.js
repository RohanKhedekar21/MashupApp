import { GlobalURLCallFunction } from '../../GlobalFunctions/GlobalURLCallFunction';
import {port, apiRoot} from '../../../envs/development'

let actualCallback = null;

export const getArtists = (callback) => {
    console.log("Inside getBanner")

    actualCallback = callback;

    // let port = /* ":7071/" */ ;

    let url = port+apiRoot+"/getArtists"

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