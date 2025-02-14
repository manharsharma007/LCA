import React, { useEffect, useState } from "react";

type props = {
  pet: number;
  trilaminate: number;
  truck: number;
  sea: number;
  rail: number;
  air: number;
  temperature: number;
  coldTemperature: number;
  load: number;
  washingTime: number;
  electricityType: string;
  electricityConsumption: number;
  waterConsumption: number;
  sodiumHygroxide: number;
  hydrogenPeroxide: number;
  citricAcid: number;
  nonIonicDetergent: number;
  dryerType: string;
  dryerUsage: number;
  exitTransportation: string;
  exitTransportationDistance: number;
};

function useStorage() {
  const getItem = (key: string) => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem(key);
    return value;
  };
  const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, value);
  };

  return { getItem, saveToLocalStorage };
}

export default useStorage;
