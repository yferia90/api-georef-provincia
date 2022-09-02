import { Router } from 'express';
import { latLongProvince } from '../controllers/province.controller';

const provinceRoute: Router = Router();

/**
 * Ruta GET HTTP, retorna lat y lon dada una provincia como parámetro.
*/
provinceRoute.get('/latlong', latLongProvince);

export default provinceRoute;