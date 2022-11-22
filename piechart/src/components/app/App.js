import '../../style/App.css';
import React from "react";
import { Chart } from "react-google-charts";


export const data = [
  ["Place", "People per Day"],
  ["While walking in the field", 5],
  ["In the cafe", 4],
  ["While whatching Sci-fi shows", 6],
  ["At a ufologists party", 10],
  ["While sleeping at home", 8],
];

export const options = {
  title: "The number of people abducted by aliens",
};

export function App() {
  return (
    <Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={"100%"}
    height={"400px"}
  />
  );
}

export default App;
