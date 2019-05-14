// Application Pages reducer
import * as pageActions from '../../actions/pages';

const _setRoute = (__state, __route) => {
    __state.currentPage = __route;
    return __state;
};

const _pagesDefaultState = {
    pages : [
        { 
            page: 'upload',
            pageTitle: 'connections'
        },
        { 
            page: 'upload-success',
            pageTitle: 'connections'
        },
        { 
            page: 'upload-error',
            pageTitle: 'connections'
        }        
    ],
    default:{
        "payload": [
            {
                "name": "Molly",
                "count": 12,
                "logos": [{
                    "size": "16x16",
                    "url": "https://example.com/16x16.png"
                },{
                    "size": "64x64",
                    "url": "https://example.com/64x64.png"
                }]
            },
            {
                "name": "Dolly",
                "count": 0,
                "logos": [{
                    "size": "128x128",
                    "url": "https://example.com/128x128.png"
                },{
                    "size": "64x64",
                    "url": "https://example.com/64x64.png"
                }]
            },
            {
                "name": "Polly",
                "count": 4,
                "logos": [{
                    "size": "16x16",
                    "url": "https://example.com/16x16.png"
                },{
                    "size": "64x64",
                    "url": "https://example.com/64x64.png"
                }]
            }
        ]
    },
    currentPage : 'upload',
    error:false,
    response:null
};

export default (__state = _pagesDefaultState, __action) =>{
    let __updatedState = {...__state};
    switch(__action.type)
    {
        case pageActions.FIND_CURRENT_PAGE:
            // reset current page as can have different values
            __updatedState.currentPage = null;
            let __page = null;
            if(__action.name)
            {
                __page = __state.pages.find((__pageToFind)=> __pageToFind.page === __action.name);
            }
            __updatedState = _setRoute(__state, (__page) ? __page.page : '/');
            break;
        case pageActions.SET_JSON_RESPONSE :
        {
            __updatedState.response = __action.payload;
            break;
        }
        case pageActions.SET_JSON_RESPONSE_ERROR :
        {
            __updatedState.error = __action.payload;
            break;
        }
        case pageActions.SET_ROUTE :
        {
            __updatedState = _setRoute(__updatedState, __action.payload);
            break;
        }
        case pageActions.RESET_JSON_UPLOAD :
        {
            __updatedState.currentPage = 'upload';
            __updatedState.error = null;
            __updatedState.response = null;
            
            break;
        }
        default:
        // do nothing;
        __updatedState = __state;
    }
    return __updatedState
};
