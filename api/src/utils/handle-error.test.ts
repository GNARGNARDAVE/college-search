import { handleError } from './handle-error';
import { mockResponse } from './test/mocks';

describe('handleError', () => {
    it(' should return a custom message when provided', () => {

        const error = new Error('Test Error');
        const message = 'ERROR ON INFO';
        const res = mockResponse();
        const statusCode = 400;

        handleError({
            error,
            message,
            res,
            statusCode,
        });

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith(
            'ERROR ON INFO: TEST ERROR',
        );
    });

    it(' should return a custom message when provided3', () => {

        const error = new Error('Test Error');
        const res = mockResponse();
        const statusCode = 400;

        handleError({
            error,
            res,
            statusCode,
        });

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith(
            'TEST ERROR',
        );
    });
});
