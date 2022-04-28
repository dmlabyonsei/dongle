import { configureStore } from "@reduxjs/toolkit";
import testType from "./testType";

export const store = configureStore({
  reducer: { testType },
});
