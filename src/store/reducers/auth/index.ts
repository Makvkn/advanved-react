import {AuthAction, AuthActionEnum, AuthState} from "./types";
import {IUser} from "../../../pages/models/IUser";

const initialState: AuthState= {
    isAuth: false,
    error: '',
    user: {} as IUser,
    isLoading: false
}

export default function authReducer(state=initialState, action:AuthAction):AuthState {
     switch (action.type) {
         case AuthActionEnum.SET_AUTH:
             return {...state, isAuth: action.payload, isLoading: false}
         case AuthActionEnum.SET_ERROR:
             return {...state, error: action.payload, isLoading: false}
         case AuthActionEnum.SET_LOADING:
             return {...state, isLoading: action.payload}
         case AuthActionEnum.SET_USER:
             return {...state, user: action.payload}

         default: return state;
     }


}