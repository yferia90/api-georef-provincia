import { Router } from 'express';
import userRoute from './user.route';
import provinceRoute from './province.route';
import { tokenValidation } from '../utils/token.util';

const router: Router = Router();

/**
 * User entry point
*/
router.use('/auth', userRoute);
/**
 * Province entry point
 * Se implementó el método tokenValidation con el fin de usarse en endpoints
 * que requieran vaidación de token.
*/
router.use('/province', tokenValidation, provinceRoute);

export default router;