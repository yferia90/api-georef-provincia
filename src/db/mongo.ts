import { connect } from 'mongoose';
import getUrlDB from '../utils/util.util';
import seedUser from '../seed/user.seed';
import logger from '../utils/logger.utils';

const URLDB = getUrlDB();

const dbInit = async () => {
    try{
        await connect(URLDB);
        logger.info(URLDB);
        // seedUser();
    }catch(err){
        logger.info(err);
    }
}

export default dbInit;