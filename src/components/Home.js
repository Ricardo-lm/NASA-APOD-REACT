import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Home() {
    return(
        <div className="Home">
            <Link to="/nasaphoto">
                <Button className="home-link" variant="outline-primary">See into the stars</Button>
            </Link>
        </div>
    );
}