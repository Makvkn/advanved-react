//типизируем стайт и акшины
//state
import {IUser} from "../../../pages/models/IUser";

export interface  AuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
}
//action.type
export enum AuthActionEnum {
    SET_AUTH ='SET_AUTH',
    SET_USER = 'SET_USER',
    SET_ERROR = "SET_ERROR",
    SET_IS_LOADING = "SET_IS_LOADING"
}
//action
export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean
}

export interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: IUser;
}

export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR;
    payload: string;
}

export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING;
    payload: boolean
}

//обобщающий тип
export type AuthAction =
    SetAuthAction |
    SetUserAction |
    SetErrorAction |
    SetIsLoadingAction
