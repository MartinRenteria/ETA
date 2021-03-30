import React, { useEffect, useState } from "react";
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

const Chart = () => {
  const [surveyResponses, setSurveyResponses] = useState([]);

  useEffect(() => {
    let mounted = true;
    api.getSurvey().then(items => {
      if (mounted) {
        setSurveyResponses(items.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const surveysWithAvg = surveyResponses.filter(
    response => response.answerAverage
  );

  const dataToChart = surveysWithAvg.map((avg, index) => ({
    name: `Day ${index + 1}`,
    "Average Rating": avg.answerAverage
  }));

  return (
    <LineChart
      width={500}
      height={300}
      data={dataToChart}
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
