import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import idbs from "../utils/idb";
import reducers from "./reducer";
import { getStoredAuthToken } from "../utils/authToken";


//consoleLog(process.env, "process");
const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    typeof window !== "undefined" &&
    (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"])) ||
  compose;

const checkStorage = async ({ state, commit }) => {
  state.dataFields.forEach(async (field) => {
    try {
      let data = await idbs.checkStorage(field);
      if (data === undefined) data = [];
      if (data === null) data = [];

      
    } catch (e) {
      commit("setState", { field, data: [] });
    }
  });
};

const getKey = () => {
  let val = getStoredAuthToken();
  if (val) {
    // consoleLog(val);
    // consoleLog(val.split(".")[0]);
    // return val.split(".")[0];
  }
  return "FCClientKey";
};

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: getKey(),
      onError: function(error) {
        // Handle the error.
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const saveStorage = async ({ state }) => {
  // consoleLog(state);
  try {
    await Promise.all(
      state.dataFields.map((field) =>
        idbs.saveToStorage(field, state[field])
      )
    );
  } catch (e) {
    return;
  }
};

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

//consoleLog(store.getState())
const allState = store.getState();
store.subscribe(() => saveStorage(store.getState()));
