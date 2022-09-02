import { Request, Response } from "express";
import { getLatLongProvince } from '../services/province.service';
import { ResponseSuccess, ResponseError } from '../utils/response.util';

const latLongProvince = async ({ query }: Request, res: Response) => {
    try{
        const province: string = `${query.province || ''}`
        const latlong = await getLatLongProvince(province);
        ResponseSuccess(res, 200, latlong, 'The province was located correctly.');
    }catch(err){
        ResponseError(res, 500, 'Internal server error.');
    }
}

export {
    latLongProvince
}