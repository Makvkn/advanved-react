import {AuthActionEnum, SetAuthAction, SetErrorAction, SetLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../pages/models/IUser";
import {AppDispatch} from "../../store";
import axios from "axios";
import UserService from "../../../api/UserService";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetLoadingAction => ({type: AuthActionEnum.SET_LOADING, payload}),
    setIsError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout(async () => {
                const response = await UserService.getUsers()
                const mockUser = response.data.find(user => user.username === username && user.password === password)
                if (mockUser) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUser.username)
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(mockUser))
                }
                else {
                    dispatch(AuthActionCreators.setIsError('Incorrect username or password'))
                }
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000)

        } catch (e) {
            dispatch(AuthActionCreators.setIsError('Error'))
        }
    },
    logout: ()  => async (dispatch:AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setIsAuth(false))
        dispatch(AuthActionCreators.setUser({} as IUser))
    }
}