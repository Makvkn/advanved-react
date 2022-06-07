import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Login from '../pages/Login';
import Event from "../pages/Event";
const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        <div>
            {isAuth
                ?
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={<route.element/>}
                            key={route.path}
                        />
                    )}
                    <Route element={<Event/>} index />
                </Routes>
                :
                <Routes>
                    {privateRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={<route.element/>}
                            key={route.path}
                        />
                    )}
                    <Route element={<Login/>} index />
                </Routes>}
        </div>

    );
};

export default AppRouter;

