/* eslint-disable prettier/prettier */
import axios from 'axios';
import urlconfig from '../../../urlconfig.json';

export const executeAPIcall = async (apiPath, apiRoot, apiFunction, apiParms) => {

    let baseURL = null

    switch (apiPath) {
      case 'AUTH':
        baseURL = urlconfig.GET_LOGIN_URL
        break;
      default:
        baseURL = urlconfig.BASE_URL
        break;
    }

    let res = null
    const apiURL = baseURL + '/' + apiRoot + '/' + apiFunction + "?mode=live&" + apiParms

    console.log("apiURL",apiURL)
    try {
      res = await axios.get(apiURL)
    }
    catch (err) {
      console.warn('Error in executing axios call for API ', apiURL, ' is ', err)
      res = {
        code: 'E',
        desc: 'Error in executing API call in executeLogin '
      }
    }

    return (res)
  };
