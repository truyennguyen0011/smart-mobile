import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';

const ProfilePage = (props) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        props.history.push("/");
    }

    return <Container>
        <h3>User Profile</h3>
        <Button onClick={handleLogout}>Logout</Button>
    </Container>
};

export default ProfilePage;