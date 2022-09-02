import { Response } from 'express';

const ResponseSuccess = (res: Response, status = 200, data = {}, message = '', token = '') => {
    if(token != '') res.header('Authorization', token);
    let newData = [];
    newData = Array.isArray(data) ? data : [data];
    res.status(status).send({
        error: '',
        data: newData,
        message
    });
}

const ResponseError = (res: Response, status = 500, message = '') => {
    res.status(status).send({
        error: message,
        data: [],
        message: ''
    });
}

export {
    ResponseSuccess,
    ResponseError
}