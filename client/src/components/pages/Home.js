import React from 'react';
import { Card } from "react-bootstrap"
import NavButton from '../Navbar/NavButton';
import helloGif from "./Hello.gif"

function HomePage() {

    return (
        <div>
            <NavButton />
            <Card className="mx-auto bg-info my-2"
                style={{ width: "60%", height: "300px" }}>
                <div className="text-center">
                    <h1 >Hello Team Member</h1>
                    <p>Please Log In to start your day</p>
                    <img src={helloGif} alt="hello" style={{height: "100px"}}/>
                </div>

            </Card>
        </div>
    )
}


export default HomePage;