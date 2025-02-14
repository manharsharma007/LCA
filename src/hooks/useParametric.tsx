import React, { useEffect, useState } from "react";
import { matrix } from "@/lib/matrix";
import useStorage from "./useStorage";

function useParametric() {
  const [parametersC, setParameters] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [loaded, setLoaded] = useState(false);
  const [air, setair] = useState(0);
  const [citricAcid, setcitricAcid] = useState(0);
  const [dieselTruck, setdieselTruck] = useState(0);
  const [edEg, setedEg] = useState(0);
  const [edLcg, setedLcg] = useState(0);
  const [eg, seteg] = useState(0);
  const [elc, setelc] = useState(0);
  const [electricTruck, setelectricTruck] = useState(0);
  const [gs, setgs] = useState(0);
  const [hpEg, sethpEg] = useState(0);
  const [hpLcg, sethpLcg] = useState(0);
  const [hydrogenPeroxide, sethydrogenPeroxide] = useState(0);
  const [incinerationER, setincinerationER] = useState(0);
  const [incinerationNER, setincinerationNER] = useState(0);
  const [landfill, setlandfill] = useState(0);
  const [ng, setng] = useState(0);
  const [nonIonic, setnonIonic] = useState(0);
  const [pet, setpet] = useState(0);
  const [rail, setrail] = useState(0);
  const [repurposing, setrepurposing] = useState(0);
  const [sea, setsea] = useState(0);
  const [sodiumHydroxide, setsodiumHydroxide] = useState(0);
  const [temp, settemp] = useState(0);
  const [trilaminate, settrilaminate] = useState(0);
  const [truckEuro, settruckEuro] = useState(0);
  const [uses, setuses] = useState(0);
  const [washTemp, setwashTemp] = useState(0);
  const [washTime, setwashTime] = useState(0);
  const [washLoad, setwashLoad] = useState(0);
  const [washingElectricity, setwashingElectricity] = useState("ng");
  const [dryerType, setDryerType] = useState("gs");
  const [dryerElectricityType, setDryerElectricityType] = useState("");
  const [truckType, setTruckType] = useState("electric");
  const [heraPro, setHeraPro] = useState(0);
  const [dualUltra, setDualUltra] = useState(0);
  const { getItem, saveToLocalStorage } = useStorage();

  useEffect(() => {
    setair(getItem("air") !== null ? parseFloat(getItem("air")!) : 0);
    setcitricAcid(
      getItem("citricAcid") !== null ? parseFloat(getItem("citricAcid")!) : 0
    );
    setdieselTruck(
      getItem("dieselTruck") !== null ? parseFloat(getItem("dieselTruck")!) : 0
    );
    setedEg(getItem("edEg") !== null ? parseFloat(getItem("edEg")!) : 0);
    setedLcg(getItem("edLcg") !== null ? parseFloat(getItem("edLcg")!) : 0);
    seteg(getItem("eg") !== null ? parseFloat(getItem("eg")!) : 0);
    setelc(getItem("elc") !== null ? parseFloat(getItem("elc")!) : 0);
    setelectricTruck(
      getItem("electricTruck") !== null
        ? parseFloat(getItem("electricTruck")!)
        : 0
    );
    setgs(getItem("gs") !== null ? parseFloat(getItem("gs")!) : 0);
    sethpEg(getItem("hpEg") !== null ? parseFloat(getItem("hpEg")!) : 0);
    sethpLcg(getItem("hpLcg") !== null ? parseFloat(getItem("hpLcg")!) : 0);
    sethydrogenPeroxide(
      getItem("hydrogenPeroxide") !== null
        ? parseFloat(getItem("hydrogenPeroxide")!)
        : 0
    );
    setincinerationER(
      getItem("incinerationER") !== null
        ? parseFloat(getItem("incinerationER")!)
        : 0
    );
    setincinerationNER(
      getItem("incinerationNER") !== null
        ? parseFloat(getItem("incinerationNER")!)
        : 0
    );
    setlandfill(
      getItem("landfill") !== null ? parseFloat(getItem("landfill")!) : 0
    );
    setng(getItem("ng") !== null ? parseFloat(getItem("ng")!) : 0);
    setnonIonic(
      getItem("nonIonic") !== null ? parseFloat(getItem("nonIonic")!) : 0
    );
    setpet(getItem("pet") !== null ? parseFloat(getItem("pet")!) : 0);
    setrail(getItem("rail") !== null ? parseFloat(getItem("rail")!) : 0);
    setrepurposing(
      getItem("repurposing") !== null ? parseFloat(getItem("repurposing")!) : 0
    );
    setsea(getItem("sea") !== null ? parseFloat(getItem("sea")!) : 0);
    setsodiumHydroxide(
      getItem("sodiumHydroxide") !== null
        ? parseFloat(getItem("sodiumHydroxide")!)
        : 0
    );
    settemp(getItem("temp") !== null ? parseFloat(getItem("temp")!) : 0);
    settrilaminate(
      getItem("trilaminate") !== null ? parseFloat(getItem("trilaminate")!) : 0
    );
    settruckEuro(
      getItem("truckEuro") !== null ? parseFloat(getItem("truckEuro")!) : 0
    );
    setuses(getItem("uses") !== null ? parseFloat(getItem("uses")!) : 0);
    setwashTemp(
      getItem("washTemp") !== null ? parseFloat(getItem("washTemp")!) : 0
    );
    setwashTime(
      getItem("washTime") !== null ? parseFloat(getItem("washTime")!) : 0
    );
    setwashLoad(
      getItem("wshLoad") !== null ? parseFloat(getItem("wshLoad")!) : 0
    );
    setwashingElectricity(
      getItem("washingElectricity") !== null
        ? getItem("washingElectricity")!
        : "ng"
    );
    setDryerType(getItem("dryerType") !== null ? getItem("dryerType")! : "gs");
    setDryerElectricityType(
      getItem("dryerElectricityType") !== null
        ? getItem("dryerElectricityType")!
        : ""
    );
    setTruckType(
      getItem("truckType") !== null ? getItem("truckType")! : "electric"
    );
    setHeraPro(
      getItem("heraPro") !== null ? parseFloat(getItem("heraPro")!) : 0
    );
    setDualUltra(
      getItem("dualUltra") !== null ? parseFloat(getItem("dualUltra")!) : 0
    );
    setLoaded(true);
  }, []);

  useEffect(() => {
    let parameters = Array.from(parametersC);
    for (let i = 0; i < parameters[0].length; i++) {
      for (let j = 0; j < parameters.length; j++) {
        if (i == 0) {
          parameters[j][i] =
            (pet * (matrix[j].c / 0.73) +
              trilaminate * (matrix[j].d / 0.14 + matrix[j].e / 0.185)) /
            100 /
            uses;
        } else if (i == 1) {
          parameters[j][i] =
            (truckEuro * (matrix[j].e / 1000) +
              sea * (matrix[j].g / 1000) +
              rail * (matrix[j].g / 1000) +
              air * (matrix[j].h / 1000)) /
            uses;
        } else if (i == 2) {
          if (washingElectricity == "eg") {
            parameters[j][i] = eg * (matrix[j].k / 100);
          } else if (washingElectricity == "elc") {
            parameters[j][i] = elc * matrix[j].l;
          } else if (washingElectricity == "ng") {
            parameters[j][i] = ng * matrix[j].m;
          }
        } else if (i == 3) {
          parameters[j][i] = ng * (matrix[j].n * 1000 + matrix[j].o);
        } else if (i == 4) {
          parameters[j][i] =
            sodiumHydroxide * (matrix[j].q / 15) +
            hydrogenPeroxide * (matrix[j].r / 15) +
            citricAcid * (matrix[j].s / 15) +
            nonIonic * (matrix[j].t / 15) +
            heraPro * matrix[j].af +
            dualUltra * matrix[j].ae;
        } else if (i == 5) {
          if (dryerType == "gs") {
            parameters[j][i] = gs * matrix[j].y;
          } else if (dryerType == "ed") {
            if (dryerElectricityType == "edEg") {
              parameters[j][i] = edEg * (matrix[j].v * 0.0992);
            } else if (dryerElectricityType == "edLcg") {
              parameters[j][i] = edLcg * matrix[j].x;
            }
          } else if (dryerType == "hp") {
            if (dryerElectricityType == "hpEg") {
              parameters[j][i] = hpEg * (matrix[j].u * 0.0992);
            } else if (dryerElectricityType == "hpLcg") {
              parameters[j][i] = hpLcg * (matrix[j].u * 0.0992);
            }
          }
        } else if (i == 6) {
          if (truckType == "electric") {
            parameters[j][i] = electricTruck * (matrix[j].k / 100) * 2;
          } else if (truckType == "diesel") {
            parameters[j][i] = dieselTruck * (matrix[j].j / 100) * 2;
          }
        } else if (i == 7) {
          parameters[j][i] =
            ((repurposing / 100) *
              (pet * (-0.2 * (matrix[j].c / 0.73)) +
                trilaminate * (-0.2 * matrix[j].d)) +
              (incinerationER / 100) *
                (matrix[j].z -
                  (matrix[j].af * 0.93 + matrix[j].ag * 6.07) +
                  trilaminate *
                    (matrix[j].ad -
                      0.29 * (matrix[j].af * 1.35 + matrix[j].ag * 8.74))) -
              0.71 * (matrix[j].af * 0.84 + matrix[j].ag * 5.43) +
              (incinerationNER / 100) *
                (pet * matrix[j].z +
                  trilaminate * (matrix[j].aa * 0.29 * matrix[j].ab * 0.71)) +
              (landfill / 100) *
                (pet * matrix[j].ac +
                  trilaminate * (matrix[j].ad * 0.29 + matrix[j].ae * 0.71))) /
            uses /
            100;
        }
      }
    }
    setParameters([...parameters]);
  }, [loaded]);

  return { loaded, parametersC };
}

export default useParametric;
