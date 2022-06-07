import React, {FC, useEffect} from 'react';
import './App.css'
import {Layout} from "antd";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {useActions} from "./hooks/useActions";
import {IUser} from "./pages/models/IUser";

const App: FC = () => {
    const {setUser, setIsAuth} = useActions()
    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true)
        }
    }, [])

    return (
            <Layout>
                <Navbar />
                <Layout.Content>
                    <AppRouter />
                </Layout.Content>
            </Layout>
    );
};

export default App;