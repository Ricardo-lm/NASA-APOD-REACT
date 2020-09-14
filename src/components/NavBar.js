import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export default function NavBar(){
    return( 
        <Navbar bg="dark" variant="dark">
            <Link to="/">
                <Navbar.Brand>Home</Navbar.Brand>
            </Link>
        </Navbar>
    )
}