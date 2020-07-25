import React, {useState} from 'react';
import 'antd/dist/antd.css';
import '../static/css/login.css';
import {Button, Card, Input, Spin} from 'antd';
import {UserOutlined, KeyOutlined} from '@ant-design/icons'
function Login(){
    const [isLoading , setIsLoading] = useState(false)
    const [passWord, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    
    const checkLogin = () => {
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
        }, 1000)
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