import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './Login'
import AdminIndex from './AdminIndex'

function Main(){
    return (
        <>
        <Router>
            <Link to="/">跳转到登录</Link>
            <Link to="/index/">主界面</Link>
            <Route path="/" exact component={Login} />
            <Route path="/index/" component={AdminIndex} />
        </Router>

        </>
    )
}

export default Main