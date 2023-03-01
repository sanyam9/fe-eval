import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndPoints';

const makeRequest = async (apiEndPoint, dynamicConfig = {}) => {
  try {
    const requestDetails = {
      baseURL: BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (error) {
    //TODO ERROR
  }
};

export default makeRequest;
