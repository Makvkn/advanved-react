import Login from "../pages/Login";
import Event from "../pages/Event"
import React from "react";

export interface IRoute {
    path: string;
    exact: boolean;
    element: React.ComponentType;
}

export enum Routes {
    LOGIN = './login',
    EVENT = '/'
}

export const publicRoutes: IRoute[] = [
    {path: Routes.EVENT, exact: true, element: Event}
]

export const privateRoutes: IRoute[] = [
    {path: Routes.LOGIN, exact: true, element: Login}
]




























// export interface IRoute {
//     path: string;
//     component: React.ComponentType;
//     exact?: boolean
// }
//
// export enum Route {
//     LOGIN= './login',
//     EVENT= '/'
// }
//
// export const publicRoutes: IRoute[] = [
//     {path: './login', exact: true, component: login}
// ]
//
// export const privateRoutes: IRoute[] = [
//     {path: './event', exact: true, component: Event}
// ]