import axios from 'axios';
import { BASE_URL } from '../../envs/development';

// export const GlobalURLPostFunction = 
//     (url, callback, actualCallBack = null, customObject = null) => {
//         console.log("PostFunction",url);
//         axios
//             .post(urlconfig.BASE_URL + url)
//             .then((res) => {
//                 console.log(res);
//                 callback(res, actualCallBack,customObject);
//             })
//             .catch(e => console.log("error" + e))
//     };

export const GlobalURLPostFunction = function GlobalURLPostFunction(url, doc, callback) {
    let URL = BASE_URL + url;
    axios.post(URL, doc).then(function (res) {
        callback(res);
    }).catch(function (e){
        return console.log("error" + e);
    });
};