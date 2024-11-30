import fakeRestDataProvider from "ra-data-fakerest";
import jsonServerProvider from 'ra-data-json-server';
import data from "./data.json";

// export const dataProvider = fakeRestDataProvider(
//   data,
//   process.env.NODE_ENV !== "test",
//   300,
// );

export const dataProvider = jsonServerProvider(
    import.meta.env.VITE_JSON_SERVER_URL
);
