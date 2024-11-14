import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

function Chart({ currentChartState }: { currentChartState: any }) {
  const [data, setData] = useState<
    { data: any; label: string; id: string; stack: string }[]
  >([]);
  const [labels, setLabels] = useState([
    "Acidification",
    "Climate change - Total",
    "Climate change - Biogenic",
    "Climate change - Fossil",
    "Climate change - Land use and LU change",
    "Ecotoxicity, freshwater - total",
    "Ecotoxicity, freshwater inorganics",
    "Ecotoxicity, freshwater organics",
    "Eutrophication, freshwater",
    "Eutrophication, marine",
    "Eutrophication, terrestrial",
    "Human toxicity, cancer - Total",
    "Human toxicity, cancer - inorganics",
    "Human toxicity, cancer - organics",
    "Human toxicity, non-cancer -Total",
    "Human toxicity, non-cancer - inorganics",
    "Human toxicity, non-cancer - organics",
    "Ionising radiation - human health",
    "Land use",
    "Ozone depletion",
    "Particulate matter",
    "Photochemical ozone formation",
    "Resource use, fossils",
    "Resource use, minerals and metals",
    "Water use",
  ]);

  useEffect(() => {
    let result: {
      [key: string]: number[];
    } = {};
    let computed: { data: any; label: string; id: string; stack: string }[] =
      [];
    let max = 0;
    let min = 0;
    Object.keys(currentChartState).forEach((k) => {
      Object.keys(currentChartState[k]).forEach((v) => {
        if (result[k] !== undefined) {
          result[k].push(
            isNaN(currentChartState[k][v]) || currentChartState[k][v] == null
              ? 0
              : currentChartState[k][v]
          );
        } else {
          result[k] = [
            isNaN(currentChartState[k][v]) || currentChartState[k][v] == null
              ? 0
              : currentChartState[k][v],
          ];
        }
      });
    });

    const transpose = (arr: any[]) =>
      arr.map((_, colIndex) => arr.map((row) => row[colIndex]));

    // let transposedArray = transpose(Object.values(result));
    // console.log(transposedArray);
    // Object.keys(result).forEach((k) => {
    //   transposedArray.forEach((v: any, i: number) => {
    //     transposedArray[i] = v.map((el: any) => el / Math.max(...v));
    //   });
    // });

    // console.log(transposedArray);

    Object.keys(result).forEach((k) => {
      computed.push({ data: result[k], label: k, id: k, stack: "assets" });
    });
    setData(computed);
  }, [JSON.stringify(currentChartState)]);

  return (
    <>
      <BarChart
        width={1100}
        height={550}
        series={data}
        layout="horizontal"
        margin={{ left: 240 }}
        slotProps={{ legend: { hidden: true } }}
        yAxis={[{ data: labels, scaleType: "band" }]}
      />
    </>
  );
}

export default Chart;
