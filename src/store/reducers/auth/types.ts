import {IUser} from "../../../pages/models/IUser";

export interface AuthState {
    isAuth: boolean
    user: IUser;
    isLoading: boolean;
    error: string;
}

export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
    SET_ERROR = 'SET_ERROR',
    SET_USER= 'SET_USER',
    SET_LOADING = 'SET_LOADING'
}

 export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}
export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR;
    payload: string;
}
export interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: IUser;
}
export interface SetLoadingAction {
    type: AuthActionEnum.SET_LOADING;
    payload: boolean;
}


export type AuthAction =
    SetAuthAction |
    SetErrorAction |
    SetUserAction |
    SetLoadingAction