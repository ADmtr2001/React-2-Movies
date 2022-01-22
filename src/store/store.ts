import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {rootReducer} from "./reducers/rootReducer";
import {setUser} from "./reducers/user/userSlice";

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [setUser.type]
      }
    })
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];