import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducers from "./slices/Category-slice";
import taskReducers from "./slices/Task-slice";


const rootReducer = combineReducers({
  category: categoryReducers,
  task: taskReducers,
});
export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
