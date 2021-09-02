const initialState = {
    email: null,
    isAuth: false,
    loader: false,
    emailError: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOADER_TRUE':
            return {
                ...state,
                loader: true
            };
        case 'SET_EMAIL_SUCCESS':
            return {
                ...state,
                email: action.email,
                emailError: null,
                loader: false
            };
        case 'ERASE_EMAIL_ERROR':
            return {
                ...state,
                emailError: null,
            };
        case 'SET_EMAIL_ERROR':
            return {
                ...state,
                emailError: action.data.msg,
                loader: false
            };
        case 'SET_CODE_SUCCESS':
            return {
                ...state,
                codeError: null,
                isAuth: true,
                loader: false
            };
        case 'ERASE_CODE_ERROR':
            return {
                ...state,
                codeError: null,
            };
        case 'SET_CODE_ERROR':
            return {
                ...state,
                codeError: action.data.msg,
                loader: false
            };
        default:
            return state;
    }
}
