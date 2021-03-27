import React from "react";
import { Button } from "react-bootstrap";
import Questions from "../Questions/questions";

export default function EndDay() {
  const [modalEndDay, setModalEndDay] = React.useState(false);

  return (
    <div className="endDayBtn">
      <Button className="btn-danger text-light"
        variant="outline-info" style={{ width: "120px" }} onClick={() => setModalEndDay(true)}>
        End My Day
      </Button>
      <Questions
        show={modalEndDay}
        onHide={() => setModalEndDay(false)} />
    </div>
  );
}
