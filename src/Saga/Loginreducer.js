import {LOGINACTION} from './action';

const InitialState = {
  Loginval: 0,
};

const LoginReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOGINACTION: {
      return {
        ...state,
        Loginval: action.value,
      };
    }
    default: {
      return state;
    }
  }
};

export default LoginReducer;
