import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import InAndOut from "../Clock-In-Out-Button/InAndOut";
import CurrentTime from "../CurrentTime/CurrentTime";
import EndDay from "../End-Day-Button/EndDay";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import { useAuthenticatedUser } from "../../utils/auth";
import API from "../../utils/api";


export default function Employee() {
    const user = useAuthenticatedUser();
    const [date, setDate] = useState("");
    const [clockInOne, setClockInOne] = useState("")
    const [clockOutOne, setClockOutOne] = useState("")
    const [clockInTwo, setClockInTwo] = useState("")
    const [clockOutTwo, setClockOutTwo] = useState("")

    const todayDate = new Date()
    // todayDate.toLocaleDateString("default", { month: "long" })
    console.log("todayDate: " + todayDate)

    const showMonth = todayDate.toLocaleString("default", { month: "long" });

    // Get full date
    const showDate = showMonth + " " + todayDate.getDate() + ", " + todayDate.getFullYear();

    console.log("showDate: " + showDate)


    useEffect(() => {
        API.getSurvey()
            .then(res => {

                // const todayDate = new Date(clockInOne)
                // // todayDate.toLocaleDateString("default", { month: "long" })
                // console.log("todayDate: " + todayDate)

                // const showAPIMonth = todayDate.toLocaleString("default", { month: "long" });

                // // Get full date
                // const showAPIDate = showAPIMonth + " " + todayDate.getDate() + ", " + todayDate.getFullYear();

                // console.log("showDate: " + showAPIDate)

                // console.log ("res: ", res)
                
                console.log(res.data[0].date)

                setDate(res.data[0].clockInOne.toString(""))
                console.log("get Date: " + date)

                // setClockOutOne(res.data[0].clockOutOne[1])
                // console.log("get clockInOne ", clockOutOne)


            })
        },[])

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
                            <td>8:00 AM</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Clock Out</td>
                            <td>{showDate}</td>
                            <td>12:00 PM</td>
                            <td>4</td>
                        </tr>
                        <tr className="text-danger fw-bold">
                            <td colSpan="4">Lunch</td>
                        </tr>
                        <tr>
                            <td>Clock in</td>
                            <td>{showDate}</td>
                            <td>12:30 AM</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Clock Out</td>
                            <td>{showDate}</td>
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

            {/* <Chart /> */}
        </div>
    );
}
