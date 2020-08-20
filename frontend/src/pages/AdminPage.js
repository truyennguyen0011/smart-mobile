import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AdminHomePage from './AdminHomePage';
import AdminLoginPage from './AdminLoginPage';
import NotFoundPage from './NotFoundPage';
import { useSelector } from 'react-redux';

function AdminPage(props) {
    const adminLogin = useSelector(state => state.adminLogin);
    const { adminInfo } = adminLogin;

    return (<BrowserRouter>
        <Switch>
            <Route exact path="/admin" component={AdminHomePage} />
            <Route exact path="/admin/login" component={AdminLoginPage} />
            <Route component={() => <NotFoundPage to="/admin" label="Admin Page" />} />
        </Switch>
        {
            !adminInfo ? <Redirect to="/admin/login" /> : <div></div>
        }
    </BrowserRouter>
    )
}

export default AdminPage;