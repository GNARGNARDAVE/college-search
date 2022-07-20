import axios from 'axios';
import http from 'http';
import https from 'https';
import { appConstants } from '../../constants';

export const requestConfig = (baseURL: string) => ({
    withCredentials: false,
    baseURL,
    httpAgent: new http.Agent({ keepAlive: true }),
    httpsAgent: new https.Agent({ keepAlive: true }),
});

// For this use-case, we just have one endpoint, as opposed to a generic api call handler for third party
const apiUrl = `${appConstants.api.url}`;

const REQUEST_CONFIG = requestConfig(apiUrl);
const apiRequest = axios.create(REQUEST_CONFIG);

apiRequest.interceptors.response.use(
    response => response.data,
    err => Promise.reject(err),
);

export { apiRequest };
