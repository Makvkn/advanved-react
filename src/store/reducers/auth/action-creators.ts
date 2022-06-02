import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../pages/models/IUser";
import {AppDispatch} from "../../store";
import axios from "axios";

export const AuthActionCreators = {

    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setIsError: (payload: string,): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login: (username: string , password: string ) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./users.json')
                const mockUsers = response.data.find(user => user.username === username && user.password === password)
                console.log(response)

                if (mockUsers) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUsers.username)
                    dispatch((AuthActionCreators.setIsAuth(true)))
                    dispatch((AuthActionCreators.setUser(mockUsers)))
            } else {
                dispatch(AuthActionCreators.setIsError('Don\'t current login or password '))
            }
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000)
        } catch (e) {
            dispatch(AuthActionCreators.setIsError('Sorry, Error'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setUser({} as IUser))
            dispatch(AuthActionCreators.setIsAuth(false))
    }
}