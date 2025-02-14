"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "material-symbols";
import useParametric from "@/hooks/useParametric";
import { BarChart } from "@mui/x-charts/BarChart";

const xLabels = [
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
];
const units = [
  "mol H+ eq",
  "kg CO2 eq",
  "kg CO2 eq",
  "kg CO2 eq",
  "kg CO2 eq",
  "CTUe",
  "CTUe",
  "CTUe",
  "kg P eq",
  "kg N eq",
  "mol N eq",
  "CTUh",
  "CTUh",
  "CTUh",
  "CTUh",
  "CTUh",
  "CTUh",
  "kBq U-235 eq",
  "Pt",
  "kg CFC11 eq",
  "disease inc.",
  "kg NMVOC eq",
  "MJ",
  "kg Sb eq",
  "m3 depriv.",
];
function Report() {
  const [parameters, setParameters] = useState<number[][]>([]);
  const { loaded, parametersC } = useParametric();

  useEffect(() => {
    setParameters(parametersC);
  }, [loaded]);

  return (
    <div className="container mx-auto py-6">
      <Link href={"/"}>
        <button
          type="button"
          className="text-white bg-[#186EC4] hover:bg-[#024C96] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span className="material-symbols-outlined pe-4">
            arrow_circle_left
          </span>
          Go Back
        </button>
      </Link>

      <div className="my-10 px-8">
        {loaded && (
          <BarChart
            width={1100}
            height={700}
            layout="horizontal"
            series={[
              {
                data: parameters.map(function (value, index) {
                  return value[0];
                }),
                label: "Materials manufacturing",
                id: "Materials manufacturing",
                stack: "total",
              },
              {
                data: parameters.map(function (value, index) {
                  return value[1];
                }),
                label: "Transportation to RZ centre",
                id: "Transportation to RZ centre",
                stack: "total",
              },
              {
                data: parameters.map(function (value, index) {
                  return value[2];
                }),
                label: "Washing-Electricity/Natural gas consumption",
                id: "Washing-Electricity/Natural gas consumption",
                stack: "total",
              },
              {
                data: parameters.map(function (value, index) {
                  return value[3];
                }),
                label: "Washing-Water consumption",
                id: "Washing-Water consumption",
                stack: "total",
              },
              {
                data: parameters.map(function (value, index) {
                  return value[4];
                }),
                label: "Washing-Detergent",
                id: "Washing-Detergent",
                stack: "total",
              },
              {
                data: parameters.map(function (value, index) {
                  return value[5];
                }),
                label: "Drying",
                id: "Drying",
                stack: "total",
              },
              {
                data: parameters.map(function (value, index) {
                  return value[6];
                }),
                label: "Transportation to the cosumer",
                id: "Transportation to the cosumer",
                stack: "total",
              },
              {
                data: parameters.map(function (value, index) {
                  return value[7];
                }),
                label: "End of Life",
                id: "End of Life",
                stack: "total",
              },
            ]}
            yAxis={[
              {
                data: xLabels,
                scaleType: "band",
                tickLabelStyle: {
                  angle: -25,
                  textAnchor: "end",
                  fontSize: 10,
                  fill: "#555",
                },
              },
            ]}
            margin={{
              left: 280,
              right: 80,
              top: 80,
              bottom: 80,
            }}
            slotProps={{
              legend: {
                labelStyle: {
                  fontSize: 12,
                  fill: "#555",
                },
                direction: "row",
                position: {
                  vertical: "top",
                  horizontal: "right",
                },
                itemMarkWidth: 20,
                itemMarkHeight: 15,
                markGap: 5,
                itemGap: 10,
              },
            }}
          />
        )}
      </div>
      <div>
        {loaded && (
          <table className="rounded-lg">
            <thead className="bg-[#186EC4] rounded-lg rounded-bl-none rounded-br-none">
              <tr>
                <th className="p-3 text-white">Impact Categories</th>
                <th className="p-3 text-white">Unit</th>
                <th className="p-3 text-white">Materials manufacturing</th>
                <th className="p-3 text-white">Transportation to RZ centre</th>
                <th className="p-3 text-white">
                  Washing-Electricity/Natural gas consumption
                </th>
                <th className="p-3 text-white">Washing-Water consumption</th>
                <th className="p-3 text-white">Washing-Detergent</th>
                <th className="p-3 text-white">Drying</th>
                <th className="p-3 text-white">
                  Transportation to the cosumer
                </th>
                <th className="p-3 text-white">End-of-life</th>
              </tr>
            </thead>
            <tbody>
              {xLabels.map((label, index) => (
                <tr key={index} className="border p-2">
                  <td className="border p-2">
                    <strong>{label}</strong>
                  </td>
                  <td className="border p-2">{units[index]}</td>
                  {parameters[index].map((value, j) => (
                    <td key={"td" + index + j} className="border p-2">
                      {value.toExponential(3)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Report;
