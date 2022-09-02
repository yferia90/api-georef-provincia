const URL_DB = `${process.env.URL_DB}`;
const URL_DB_TEST = `${process.env.URL_DB_TEST}`;
const NODE_ENV = `${process.env.NODE_ENV}`;

const URLDB = NODE_ENV === 'test' ? URL_DB_TEST : URL_DB;

const getUrlDB = () => {
    return URLDB;
}

export default getUrlDB;