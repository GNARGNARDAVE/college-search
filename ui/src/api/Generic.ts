import axios from 'axios';

interface GetParams {
    url: string;
}

const axiosRequest = axios.create();
axiosRequest.interceptors.response.use(
    response => response.data,
    Promise.reject,
);

export const get = <T = unknown>(params: GetParams) => axiosRequest.get<unknown, T>(params.url);
