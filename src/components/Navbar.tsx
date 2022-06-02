import React, {Dispatch, FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";

const Navbar: FC = () => {
    let router: any;
    router = useNavigate();
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const dispatch:Dispatch<any> = useDispatch();

    return (
        <div>
            <Layout.Header>
                <Row justify='end'>
                    {isAuth
                        ?
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <div style={{color: 'white'}}>{user.username}</div>
                            <Menu.Item onClick={() => dispatch(AuthActionCreators.logout())} key={1}>Logout</Menu.Item>
                        </Menu>
                        :
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <div style={{color: 'white'}}> Need to Registration</div>
                            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>Login</Menu.Item>
                        </Menu>

                    }

                </Row>
            </Layout.Header>
        </div>
    );
};

export default Navbar;