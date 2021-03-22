// import { Modal } from 'bootstrap';
import React from 'react';
import { Button } from "react-bootstrap"
import Questions from '../Question/Questions';

export default function EndDay() {

    const [modalEndDay, setModalEndDay] = React.useState(false);
    return (
        <div>
            <Button className="btn-danger text-light" variant="outline-info"
                style={{ width: "120px" }} onClick={() => setModalEndDay(true)}>
                End my day
                </Button>
            <Questions
                show={modalEndDay}
                onHide={() => setModalEndDay(false)} />
        </div>
    )
}