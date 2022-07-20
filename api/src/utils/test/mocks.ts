import { Response, Request } from '../../types';

export interface IArgs {
    payload: unknown;
}

export const mockResponse = (): Partial<Response> => {
    const res = {} as Partial<Response>;
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
};

export const mockRequest = (args: IArgs): Partial<Request> => {
    const req = {} as Partial<Request>;
    req.body = args.payload;
    req.headers = { authorization: 'bearer $_token' };
    return req;
};