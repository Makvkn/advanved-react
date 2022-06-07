import React, {Dispatch, FC, useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const LoginForm: FC = () => {


    const {login} = useActions()
    const {error, isLoading} = useTypedSelector(state => state.auth)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const onFinish = (values: any) => {
        login(username,password)
    };

    const onFinishFailed = (errorInfo: any) => {
    };

    return (
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {error && <div style={{color: 'red'}}>{error}</div>}
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[rules.required('Please input your username!')]}
                >
                    <Input
                        value = {username}
                        onChange={e => setUsername(e.target.value) }/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[rules.required('Please input your password!')]}
                >
                    <Input.Password
                        value = {password}
                        onChange={e => setPassword(e.target.value) }/>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
    );
};

export default LoginForm;