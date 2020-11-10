import axios from 'axios';
import { constants } from './constants';

const api: any = {
  getHeaders(type: boolean): object {
    if (type) {
      return {
        // Authorization: `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      };
    }
    return {
      'Content-Type': 'application/json'
    };
  },
  user: {
    signUp(userData: any): object {
      const urlencoded = new URLSearchParams();
      urlencoded.append('firstname', userData.firstname);
      urlencoded.append('lastname', userData.lastname);
      urlencoded.append('email', userData.email);
      urlencoded.append('password', userData.password);
      return axios.request<object>({
        method: 'POST',
        url: `${constants.apiUrlElement}/reg`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: urlencoded
      });
    },
    signIn(userData: any): object {
      return axios.request<object>({
        method: 'POST',
        url: `${constants.apiUrlElement}/api/login_check`,
        headers: api.getHeaders(false),
        data: JSON.stringify(userData)
      });
    }
  },
  scan: {
    scanVerifySK(sk: string): object {
      const data: object = { sk };
      return axios.request<object>({
        method: 'POST',
        url: `${constants.apiUrl}/scan/verify/sk`,
        headers: api.getHeaders(false),
        data: JSON.stringify(data)
      });
    }
  }
};

export default api;
