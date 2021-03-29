import React, { useState } from "react";
import { Card, Table } from "react-bootstrap";
import InAndOut from "../Clock-In-Out-Button/InAndOut";
import CurrentTime from "../CurrentTime/CurrentTime";
import EndDay from "../End-Day-Button/EndDay";
import moment from 'moment';
import "react-clock/dist/Clock.css";
import { useAuthenticatedUser } from "../../utils/auth";
import API from "../../utils/api";


export default function Employee() {
    const user = useAuthenticatedUser();
    const [clockInOneTime, setClockInOne] = useState("")
    const [clockOutOneTime, setClockOutOne] = useState("")
    const [clockInTwoTime, setClockInTwo] = useState("")
    const [clockOutTwoTime, setClockOutTwo] = useState("")

    //Get today Date
    const todayDate = new Date()
    console.log("todayDate: " + todayDate)

    const showMonth = todayDate.toLocaleString("default", { month: "long" });

    // Get full date
    const showDate = showMonth + " " + todayDate.getDate() + ", " + todayDate.getFullYear();

    console.log("showDate: " + showDate)

    API.getSurvey()
        .then(res => {

            //get the last dataset from database
            const lastData = res.data.length-1;
            // console.log("lastData: " + lastData);

            // ClockInOne
            const timeInAPIOne = moment(res.data[lastData].clockInOne).format("LT")
            console.log("timeAPI1: " + timeInAPIOne)

            setClockInOne(timeInAPIOne)
            console.log("get Date1: " + clockInOneTime)

            // ClockOutOne
            const timeOutAPIOne = moment(res.data[lastData].clockOutOne).format("LT")
            console.log("timeAPI1: " + timeOutAPIOne)

            setClockOutOne(timeOutAPIOne)
            console.log("get Date1: " + timeOutAPIOne)

            // ClockInTwo
            const timeInAPITwo = moment(res.data[lastData].clockInTwo).format("LT")
            console.log("timeAPI2: " + timeInAPITwo)

            setClockInTwo(timeInAPITwo)
            console.log("get Date2: " + timeInAPITwo)

            // ClockOutTwo
            const timeOutAPITwo = moment(res.data[lastData].clockOutTwo).format("LT")
            console.log("timeAPI2: " + timeOutAPITwo)

            setClockOutTwo(timeOutAPITwo)
            console.log("get Date2: " + timeOutAPITwo)
            })

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
                            <td>{showDate}</td>
                            <td>{clockInOneTime}</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Clock Out</td>
                            <td>{showDate}</td>
                            <td>{clockOutOneTime}</td>
                            <td>4</td>
                        </tr>
                        <tr className="text-danger fw-bold">
                            <td colSpan="4">Lunch</td>
                        </tr>
                        <tr>
                            <td>Clock in</td>
                            <td>{showDate}</td>
                            <td>{clockInTwoTime}</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Clock Out</td>
                            <td>{showDate}</td>
                            <td>{clockOutTwoTime}</td>
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

            {/* <Chart /> */}
        </div>
    );
}
