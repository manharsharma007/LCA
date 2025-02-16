"use client";
import Link from "next/link";
import React, { useEffect, useReducer, useState } from "react";
import "material-symbols";
import useParametric from "@/hooks/useParametric";
import { BarChart } from "@mui/x-charts/BarChart";
import { columns } from "@/lib/utils";
import { DataTable } from "@/components/calculator/dataTable";
import Loader from "@/components/calculator/loader";

const xLabels = [
  "Acidification",
  "Climate change - Total",
  "Ecotoxicity, freshwater - total",
  "Eutrophication, freshwater",
  "Eutrophication, marine",
  "Eutrophication, terrestrial",
  "Human toxicity, cancer - Total",
  "Human toxicity, non-cancer -Total",
  "Ionising radiation - human health",
  "Land use",
  "Ozone depletion",
  "Particulate matter",
  "Photochemical ozone formation",
  "Resource use, fossils",
  "Resource use, minerals and metals",
  "Water use",
];
const xLabelsFull = [
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
  const [loading, setLoading] = useState(true);
  const [parameters, setParameters] = useState<number[][]>([]);
  const parametersC = useParametric();
  const [data, setData] = useState([]);
  const [state, updateState] = useReducer(
    (prev: any, next: any) => {
      const newState = { ...prev, ...next };
      return newState;
    },
    {
      column1: [],
      column2: [],
      column3: [],
      column4: [],
      column5: [],
      column6: [],
      column7: [],
      column8: [],
    }
  );

  useEffect(() => {
    setParameters(parametersC);
    let dataComputed: any = [];
    xLabelsFull.forEach((v, i) => {
      let x: any = {
        impactCategory: v,
        unit: units[i],
      };
      x["manufacturing"] = parametersC[i][0].toExponential(3);
      x["transportSupplier"] = parametersC[i][1].toExponential(3);
      x["washing"] = parametersC[i][2].toExponential(3);
      x["washingWater"] = parametersC[i][3].toExponential(3);
      x["detergent"] = parametersC[i][4].toExponential(3);
      x["drying"] = parametersC[i][5].toExponential(3);
      x["transport"] = parametersC[i][6].toExponential(3);
      x["eol"] = parametersC[i][7].toExponential(3);
      dataComputed.push(x);
    });
    let dataToInclude = parametersC.filter((v, i) => {
      if (![2, 3, 4, 6, 7, 12, 13, 15, 16].includes(i)) {
        return v;
      }
    });
    updateState({
      column1: dataToInclude.map((v) => {
        return v[0];
      }),
      column2: dataToInclude.map((v) => {
        return v[1];
      }),
      column3: dataToInclude.map((v) => {
        return v[2];
      }),
      column4: dataToInclude.map((v) => {
        return v[3];
      }),
      column5: dataToInclude.map((v) => {
        return v[4];
      }),
      column6: dataToInclude.map((v) => {
        return v[5];
      }),
      column7: dataToInclude.map((v) => {
        return v[6];
      }),
      column8: dataToInclude.map((v) => {
        return v[7];
      }),
    });
    setData(dataComputed);
    setLoading(false);
  }, []);

  return (
    <div className="container mx-auto py-6">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container mx-auto relative mt-4">
            <h4 className="flex items-center text-center gap-4 text-xl text-[#024C96] tracking-[1px] uppercase font-bold justify-center">
              <span className="material-symbols-outlined">horizontal_rule</span>
              Lifecycle Assessment Report [0-100]%
              <span className="material-symbols-outlined">horizontal_rule</span>
            </h4>
            <Link href={"/"} className="absolute left-0 top-[-8px]">
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
          </div>

          <div className="my-10 px-8">
            <BarChart
              width={1100}
              height={550}
              layout="horizontal"
              series={[
                {
                  data: state.column1.map(
                    (v: number) =>
                      ((v - Math.min(...state.column1)) /
                        (Math.max(...state.column1) -
                          Math.min(...state.column1))) *
                      100
                  ),
                  label: "Materials manufacturing",
                  id: "Materials manufacturing",
                  stack: "total",
                },
                {
                  data: state.column2.map(
                    (v: number) =>
                      ((v - Math.min(...state.column2)) /
                        (Math.max(...state.column2) -
                          Math.min(...state.column2))) *
                      100
                  ),
                  label: "Transportation to RZ centre",
                  id: "Transportation to RZ centre",
                  stack: "total",
                },
                {
                  data: state.column3.map(
                    (v: number) =>
                      ((v - Math.min(...state.column3)) /
                        (Math.max(...state.column3) -
                          Math.min(...state.column3))) *
                      100
                  ),
                  label: "Washing-Electricity/Natural gas consumption",
                  id: "Washing-Electricity/Natural gas consumption",
                  stack: "total",
                },
                {
                  data: state.column4.map(
                    (v: number) =>
                      ((v - Math.min(...state.column4)) /
                        (Math.max(...state.column4) -
                          Math.min(...state.column4))) *
                      100
                  ),
                  label: "Washing-Water consumption",
                  id: "Washing-Water consumption",
                  stack: "total",
                },
                {
                  data: state.column5.map(
                    (v: number) =>
                      ((v - Math.min(...state.column5)) /
                        (Math.max(...state.column5) -
                          Math.min(...state.column5))) *
                      100
                  ),
                  label: "Washing-Detergent",
                  id: "Washing-Detergent",
                  stack: "total",
                },
                {
                  data: state.column6.map(
                    (v: number) =>
                      ((v - Math.min(...state.column6)) /
                        (Math.max(...state.column6) -
                          Math.min(...state.column6))) *
                      100
                  ),
                  label: "Drying",
                  id: "Drying",
                  stack: "total",
                },
                {
                  data: state.column7.map(
                    (v: number) =>
                      ((v - Math.min(...state.column7)) /
                        (Math.max(...state.column7) -
                          Math.min(...state.column7))) *
                      100
                  ),
                  label: "Transportation to the cosumer",
                  id: "Transportation to the cosumer",
                  stack: "total",
                },
                {
                  data: state.column8.map(
                    (v: number) =>
                      ((v - Math.min(...state.column8)) /
                        (Math.max(...state.column8) -
                          Math.min(...state.column8))) *
                      100
                  ),
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
                  itemMarkWidth: 15,
                  itemMarkHeight: 15,
                  markGap: 5,
                  itemGap: 10,
                },
              }}
              borderRadius={50}
            />
          </div>
          <div>
            <h4 className="flex items-center text-center gap-4 text-xl text-[#024C96] tracking-[1px] uppercase font-bold justify-center">
              <span className="material-symbols-outlined">horizontal_rule</span>
              Lifecycle Assessment Complete Report
              <span className="material-symbols-outlined">horizontal_rule</span>
            </h4>
            <DataTable columns={columns} data={data} />
          </div>
        </>
      )}
    </div>
  );
}

export default Report;
