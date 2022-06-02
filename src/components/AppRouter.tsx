import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Login from "../pages/Login";
import Event from "../pages/Event";

const AppRouter = () => {

    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                <Route path={route.path} key={route.path} element={<route.element />} />)}
                <Route element={<Event/>} index />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route  path={route.path}  key={route.path} element={<route.element />} />)}
                    <Route element={<Login/>} index />
            </Routes>

    );
};

export default AppRouter;