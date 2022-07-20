import { get } from './get';
import { mockResponse, mockRequest } from '../../utils/test/mocks';
import { Response, Request } from 'express';

describe('get()', () => {
    it(' should return a successful response', async() => {

        const res = mockResponse();
        const req = mockRequest({
            payload: null,
        });

        await get(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith(
            {
                message: 'This is a successful request',
            }
        );
    });
});
