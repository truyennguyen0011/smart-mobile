import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { Redirect } from 'react-router-dom';

const ProfilePage = (props) => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;


    const handleLogout = () => {
        dispatch(logout());
        props.history.push("/login");
    }
    console.log(userInfo);
    return !userInfo ? <Redirect to="/" /> :
        <Container>
            <h3>User Profile</h3>
            <p>
                Hello {userInfo.fullName}
            </p>
            <Button onClick={handleLogout}>Logout</Button>
        </Container>
};

export default ProfilePage;