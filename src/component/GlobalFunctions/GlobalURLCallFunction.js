import axios from 'axios';
// import urlconfig from '../../../urlconfig.json'
import {BASE_URL} from '../../envs/development'

export const GlobalURLCallFunction = 
    (url, callback, actualCallBack = null, customObject = null) => {
        console.log("complete URL:",BASE_URL + url)
        
        axios
            .get(BASE_URL + url)
            .then((res) => {
                callback(res, actualCallBack, customObject);
            })
            .catch(e => console.log("error" + e))
};

