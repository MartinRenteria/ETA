import React from 'react';
import { Card } from "react-bootstrap";
import "./style.css";


function HomePage() {

    return (
        <div className="jumbotron jumbotron-fluid d-flex align-items-center">
            <div className="container text-center">
                <div>
            <Card className="card mx-auto lg-info">
                <div className="card text-center">
                    <h1 >Hello Team Member</h1>
                    <p>Please Log In to start your day</p>
                </div>
            </Card>
        </div>
            </div>
        </div>
    );
}

export default HomePage;