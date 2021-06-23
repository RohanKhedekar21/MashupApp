import { GlobalURLCallFunction } from "../../component/GlobalFunctions/GlobalURLCallFunction";
import { apiRoot, port } from "../../envs/development";
import { getStorage } from "../../utility/localutility";

let actualCallback = null

export const getSongsList = async (type, typeId, callback) => {
    console.log("Inside getSongsDetails");
    console.log("type",type);
    console.log("typeId",typeId);

    const userCredentials = await getStorage('userCredentials')
    const { userId } = userCredentials;

    actualCallback = callback;

    let url = port+apiRoot+"/getSongsList?type="+type+"&typeId="+typeId+"&userId="+userId

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