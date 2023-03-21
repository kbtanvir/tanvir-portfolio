import { createStore } from "@poly-state/poly-state";
import { useStore } from "@poly-state/react";
import { CommonStore } from "../types/store";

import { withDevToolsExtention } from "./withDevtoolExtension";
// import { demoTM } from '../data/demo'

export const initialStore: CommonStore.Cupertino = {
  cursor: null,
};

export const cupertinoStore = createStore(initialStore);

export const useCupertinoStore = () => useStore<CommonStore.Cupertino>(cupertinoStore);

if (process.env.NODE_ENV === "development") {
  withDevToolsExtention(cupertinoStore, "CUPERTINO");
}
