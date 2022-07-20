import { Request, Response } from 'express';
import { handleError } from '../../utils/';

export const get = (_req: Request, res: Response) => {

    try {

        // Add logic

        res.status(200).send({
            message: 'This is a successful request',
        });

    } catch(error) {

        handleError({
            error,
            message: 'ERROR ON INFO',
            res,
            statusCode: 400,
        });

    }
};
