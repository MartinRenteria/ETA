import React from "react";
import { Card, Table } from "react-bootstrap";
import InAndOut from "../Clock-In-Out-Button/InAndOut";
import CurrentTime from "../CurrentTime/CurrentTime";
import EndDay from "../End-Day-Button/EndDay";
import Chart from "../Chart/index";
import { useAuthenticatedUser } from "../../utils/auth";


export default function Employee() {
        const user = useAuthenticatedUser();

    return user && (
        <div>
                    <h2 className="d-flex justify-content-center m-1">My Timesheet</h2>
        <p className="d-flex justify-content-center m-1">
            <strong className="d-flex justify-content-center m-1">Weclome</strong>
            {user.firstName}<p>!</p>
        </p>
            <Card
                className="mx-auto bg-info my-2"
                style={{ width: "60%", height: "60%" }}
            >
                {/* Current time clock */}
                <div className="mx-auto">
                    <CurrentTime />
                </div>

                {/* Clock In and Out button */}
                <div className="mx-auto my-2">
                    <InAndOut />
                </div>

                {/* Clock in/out Table */}
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Clock In/Out</th>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Worked Hours (h)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Clock in</td>
                            <td>March 17, 2021</td>
                            <td>8:00 AM</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Clock Out</td>
                            <td>March 17, 2021</td>
                            <td>12:00 PM</td>
                            <td>4</td>
                        </tr>
                        <tr className="text-danger fw-bold">
                            <td colSpan="4">Lunch</td>
                        </tr>
                        <tr>
                            <td>Clock in</td>
                            <td>March 17, 2021</td>
                            <td>12:30 AM</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Clock Out</td>
                            <td>March 17, 2021</td>
                            <td>16:30 PM</td>
                            <td>4</td>
                        </tr>
                        <tr className="text-danger fw-bold">
                            <td colSpan="3">Total Worked Hours</td>
                            <td>8</td>
                        </tr>
                    </tbody>
                </Table>

                {/* End Day button */}
                <div className="d-flex justify-content-end m-1">
                    <EndDay />
                </div>
            </Card>

            <Chart />
        </div>
    );
}
