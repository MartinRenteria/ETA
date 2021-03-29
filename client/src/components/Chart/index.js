import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import api from "../../utils/api";
import { useAuthenticatedUser } from "../../utils/auth";

const Chart = () => {
  // const user = useAuthenticatedUser();

  // console.log(user);
  api.getSurvey({ params: { _id: "605f6c875959fa75806b75c9" } }).then(res => {
    // api.getSurvey().then(res => {
    console.log("whole data: ", res);
  });
  console.log("i'm the console in chart");
  // console.log(handleGetChartData);

  //we need a way to limit the number of results

  const data = [
    {
      name: "Day 1",
      "Average Rating": 1
    },
    {
      name: "Day 2",
      "Average Rating": 2
    },
    {
      name: "Day 3",
      "Average Rating": 3
    },
    {
      name: "Day 4",
      "Average Rating": 4
    },
    {
      name: "Day 5",
      "Average Rating": 5
    },
    {
      name: "Day 6",
      "Average Rating": 5
    },
    {
      name: "Day 7",
      "Average Rating": 5
    }
  ];

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Average Rating"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      {/* placeholder for additional metrics to use later. e.g. 
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
    </LineChart>
  );
};

export default Chart;
