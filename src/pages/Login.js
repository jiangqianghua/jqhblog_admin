import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import '../static/css/login.css';
import {Button, Card, Input, Spin, message} from 'antd';
import {UserOutlined, KeyOutlined} from '@ant-design/icons'
import servicePath from '../config/apiUrl'
import axios from 'axios'
function Login(props){
    const [isLoading , setIsLoading] = useState(false)
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    
    useEffect(()=>{

    },[])

    const checkLogin = () => {
        setIsLoading(true)
        if (!userName) {
            message.error('用户名不能为空')
            setIsLoading(false)
            return false
        } else if (!password) {
            message.error('密码不能为空')
            setIsLoading(false)
            return false
        }
        let dataProps = {
            'userName': userName,
            'password': password
        }
        axios({
            method: 'post',
            url: servicePath.checkLogin,
            data: dataProps,
            withCredentials: true
        }).then(
            res => {
                setIsLoading(false)
                if (res.data.data == '登录成功') {
                    localStorage.setItem('openId', res.data.openId)
                    props.history.push('/index')
                } else {
                    message.error('用户名密码错误')
                }
            }
        ).catch(
            err => {
                setIsLoading(false)
                message.error(err.message)
            }
        )
    }

    return (
        <div className="login-div">
            <Spin tip="Loading" spinning={isLoading}>
                <Card title="江强华的博客后台系统" bordered={true} style={{width: 400}}>
                    <Input 
                    id="userName"
                    size="large"
                    placeholder="请输入账户名"
                    prefix={<UserOutlined style={{color: 'rgba(0,0,0,.24)'}}/>}
                    onChange={(e) => {setUserName(e.target.value)}}/>
                    <br/><br/>
                    <Input.Password
                    id="password"
                    size="large"
                    placeholder="请输入密码"
                    prefix={<KeyOutlined style={{color: 'rgba(0,0,0,.24)'}}/>}
                    onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <br/><br/>
                    <Button type="primary" size="large" block
                    onClick={checkLogin}>登录</Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login