import React, { useEffect, useReducer, useState } from "react";
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

  const { getItem, getSavedNumber } = useStorage();

  useEffect(() => {
    let parameters = Array.from(parametersC);
    for (let i = 0; i < parameters[0].length; i++) {
      for (let j = 0; j < parameters.length; j++) {
        if (i == 0) {
          parameters[j][i] =
            (getSavedNumber("pet", 100) * (matrix[j].c / 0.73) +
              (getSavedNumber("trilaminate", 0) *
                (matrix[j].d / 0.14 + matrix[j].e / 0.185)) /
                2) /
            100 /
            getSavedNumber("uses", 60);
        } else if (i == 1) {
          parameters[j][i] =
            (2 *
              (getSavedNumber("supplierTransportTruck", 100) *
                (matrix[j].f / 1000) +
                getSavedNumber("supplierTransportSea", 100) *
                  (matrix[j].g / 1000) +
                getSavedNumber("supplierTransportRail", 100) *
                  (matrix[j].g / 1000) +
                getSavedNumber("supplierTransportAir", 100) *
                  (matrix[j].i / 1000))) /
            getSavedNumber("uses", 60);
        } else if (i == 2) {
          if (
            getItem("enableWashGrid") == "true" ||
            getItem("enableWashGrid") == null
          ) {
            parameters[j][i] = getSavedNumber("washGrid", 1.38) * matrix[j].l;
          } else if (getItem("enableWashLowcarbon") == "true") {
            parameters[j][i] =
              getSavedNumber("washLowCarbon", 1.38) * matrix[j].m;
          } else if (getItem("enableWashNatural") == "true") {
            parameters[j][i] =
              (getSavedNumber("washNatural", 1.38) * matrix[j].p) / 5.8;
          }
        } else if (i == 3) {
          parameters[j][i] =
            getSavedNumber("waterConsumption", 0.11) *
            (matrix[j].n * 1000 + matrix[j].o);
        } else if (i == 4) {
          parameters[j][i] =
            getSavedNumber("sodiumHydroxide", 5) * (matrix[j].q / 15) +
            getSavedNumber("hydrogenPeroxide", 5) * (matrix[j].r / 15) +
            getSavedNumber("citricAcid", 5) * (matrix[j].s / 15) +
            getSavedNumber("nonIonic", 5) * (matrix[j].t / 15) +
            getSavedNumber("heraPro", 5) * matrix[j].ah +
            getSavedNumber("dualUltra", 5) * matrix[j].ai;
        } else if (i == 5) {
          if (
            getItem("dryerType") == "dryerGas" ||
            getItem("dryerType") == null
          ) {
            parameters[j][i] = getSavedNumber("dryerGas", 5) * matrix[j].y;
          } else if (getItem("dryerType") == "dryerElectric") {
            if (getItem("enableDryerGrid") == "true") {
              parameters[j][i] =
                getSavedNumber("dryerGrid", 5) * (matrix[j].v * 0.0992);
            } else if (getItem("enableDryerLowCarbon") == "true") {
              parameters[j][i] =
                getSavedNumber("dryerLowCarbon", 5) * matrix[j].x;
            }
          } else if (getItem("dryerType") == "dryerHP") {
            if (getItem("enableDryerGrid") == "true") {
              parameters[j][i] =
                getSavedNumber("dryerGrid", 5) * (matrix[j].u * 0.0992);
            } else if (getItem("enableDryerLowCarbon") == "true") {
              parameters[j][i] =
                getSavedNumber("dryerLowCarbon", 5) * (matrix[j].u * 0.0992);
            }
          }
        } else if (i == 6) {
          if (
            getItem("enableElectricTruck") == "true" ||
            getItem("enableElectricTruck") == null
          ) {
            parameters[j][i] =
              getSavedNumber("electricTruck", 100) * (matrix[j].k / 100) * 2;
          } else if (getItem("enableDieselTruck") == "true") {
            parameters[j][i] =
              getSavedNumber("dieselTruck", 100) * (matrix[j].j / 100) * 2;
          }
        } else if (i == 7) {
          parameters[j][i] =
            ((getSavedNumber("repurposing", 25) / 100) *
              (getSavedNumber("pet", 100) * (-0.2 * (matrix[j].c / 0.73)) +
                getSavedNumber("trilaminate", 0) * (-0.2 * matrix[j].d)) +
              (getSavedNumber("repurposingER", 25) / 100) *
                (matrix[j].z -
                  (matrix[j].af * 0.93 + matrix[j].ag * 6.07) +
                  getSavedNumber("trilaminate", 0) *
                    (matrix[j].ad -
                      0.29 * (matrix[j].af * 1.35 + matrix[j].ag * 8.74))) -
              0.71 * (matrix[j].af * 0.84 + matrix[j].ag * 5.43) +
              (getSavedNumber("repurposingNER", 25) / 100) *
                (getSavedNumber("pet", 100) * matrix[j].z +
                  getSavedNumber("trilaminate", 0) *
                    (matrix[j].aa * 0.29 * matrix[j].ab * 0.71)) +
              (getSavedNumber("landfill", 25) / 100) *
                (getSavedNumber("pet", 100) * matrix[j].ac +
                  getSavedNumber("trilaminate", 0) *
                    (matrix[j].ad * 0.29 + matrix[j].ae * 0.71))) /
            getSavedNumber("uses", 60) /
            100;
        }
      }
    }
    setParameters([...parameters]);
  }, []);

  return parametersC;
}

export default useParametric;
