import React from "react"
import { Card } from "react-bootstrap"
import InAndOut from "../Clock-In-Out-Button/InAndOut"
import EndDay from "../End-Day-Button/EndDay"

export default function Employee () {
    return (
        <Card className="mx-auto my-2" style = {{width: "60%", height: "60%"}}>
            <div className="mx-auto my-2">
                {/* Clock In and Out button */}
                <InAndOut />
            </div>

            <div className="d-flex justify-content-end m-2">
                    <EndDay />
                </div>
        </Card>


    )
}