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
  charlie: []
};
interface StateProp {
  results: ResultInterface[];
  busStopResults: ResultInterface[]
  power: ResultInterface[]
  charlie: ResultInterface[]
}
const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case "setResults":
      return (state = { ...state, results: payload });
      case "setBusStopResults":
        return (state = { ...state, busStopResults: payload });
        case "setPowerResults":
        return (state = { ...state, power: payload });
        case "setCharlieResults":
          return (state = { ...state, charlie: payload });
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
