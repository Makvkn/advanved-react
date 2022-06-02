import React, {FC} from 'react';
import './App.css'
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";

const App: FC = () => {
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