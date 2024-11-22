"use client";

import { ResultInterface } from "@/types/global";
import { createContext, useReducer } from "react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const initialState = {
  results: [],
  busStopResults: [],
  power: [],
  charlie: [],
  self: [],
};
interface StateProp {
  results: ResultInterface[];
  busStopResults: ResultInterface[]
  power: ResultInterface[]
  charlie: ResultInterface[]
  self:  ResultInterface[]
}
const reducer = (state: StateProp, { type, payload }: any) => {
  switch (type) {
    case "setResults":
      return {
        ...state,
        results: payload,
      };
    case "setBusStopResults":
      return {
        ...state,
        busStopResults: payload,
      };
    case "setPowerResults":
      return {
        ...state,
        power: payload,
      };
    case "setCharlieResults":
      return {
        ...state,
        charlie: payload,
      };
    case "setSelf":
      return {
        ...state,
        self: payload, 
      };
    default:
      return state;
  }
};


export const ResultContext = createContext<{
  state: StateProp | undefined;
  dispatch: React.Dispatch<any>;
}>({ state: undefined, dispatch: () => null });

export default ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ResultContext.Provider value={{ state, dispatch }}>
      {children}
    </ResultContext.Provider>
  );
};
