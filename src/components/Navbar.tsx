import React, {Dispatch, FC} from 'react';
import {Layout, Menu, Row} from "antd";
import { useNavigate} from "react-router-dom";
import {Routes} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
    const dispatch:Dispatch<any> = useDispatch();

    const {logout} = useActions()

    const navigate = useNavigate();
    const {isAuth, user} = useTypedSelector(state => state.auth)
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                ?
                    <Menu theme="dark" mode="horizontal">
                        <div style={{color: 'white'}}>
                            {user.username}
                        </div>
                        <Menu.Item onClick={logout} key={1} >Logout</Menu.Item>
                    </Menu>
                    :
                    <Menu theme="dark" mode="horizontal">
                        <div>Registration</div>
                        <Menu.Item onClick={() => navigate(Routes.LOGIN)} key={1} >Login</Menu.Item>
                    </Menu>
                }

            </Row>
        </Layout.Header>
    );
};

export default Navbar;