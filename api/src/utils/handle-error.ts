import { Response } from '../types';

interface IArgs {
    error: unknown;
    res: Partial<Response>;
    statusCode: number;
    message?: string; // Prepend error with custom note to track source of error
}

/**
 * Handle logging errors and transforming a friendly message for API
 */
export const handleError = (args: IArgs) => {

    const { error, message, res, statusCode, } = args;

    // @ts-ignore message does exist
    const errorResponse = message
        // @ts-ignore message does exist
        ? `${message.toUpperCase()}: ${error.message.toUpperCase()}`
        // @ts-ignore message does exist
        : error.message.toUpperCase();

    console.error('ERROR LOGGING', error);

    if (res && res.status && statusCode) {
        res.status(statusCode)
           .send(errorResponse);
    }

};