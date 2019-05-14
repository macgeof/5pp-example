// Set names for actions to use throughout application
export const FIND_CURRENT_PAGE  =   "FIND_CURRENT_PAGE";
export const SUBMIT_JSON_VIA_POST_SAGA  =   "SUBMIT_JSON_VIA_POST_SAGA";
export const SET_JSON_RESPONSE  =   "SET_JSON_RESPONSE";
export const SET_JSON_RESPONSE_ERROR  =   "SET_JSON_RESPONSE_ERROR";
export const SET_ROUTE  =   "SET_ROUTE";
export const RESET_JSON_UPLOAD = 'RESET_JSON_UPLOAD';

export const findCurrentPage = (__name = undefined)=> ({
        type    :   FIND_CURRENT_PAGE,
        name    :   __name
});