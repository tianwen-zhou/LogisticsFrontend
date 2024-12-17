// in src/dataProvider.ts
// import jsonServerProvider from 'ra-data-json-server';

// export const dataProvider = jsonServerProvider(
//     import.meta.env.VITE_JSON_SERVER_URL
// );

import { fetchUtils } from "react-admin";

const apiUrl = import.meta.env.VITE_JSON_SERVER_URL;
const httpClient = fetchUtils.fetchJson;

const myDataProvider = {
    getList: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        
        const url = `${apiUrl}/${resource}?_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`;
        const response = await httpClient(url);

        return {
            data: response.json,
            total: parseInt(response.headers.get("X-Total-Count"), 10),
        };
    },
    
    getOne: async (resource, params) => {
        const response = await httpClient(`${apiUrl}/${resource}/${params.id}`);
        return { data: response.json };
    },

    create: async (resource, params) => {
        const response = await httpClient(`${apiUrl}/${resource}`, {
            method: "POST",
            body: JSON.stringify(params.data),
        });
        return { data: response.json };
    },

    update: async (resource, params) => {
        const response = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(params.data),
        });
        return { data: response.json };
    },

    delete: async (resource, params) => {
        await httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: "DELETE",
        });
        return { data: params.previousData };
    },
};

export default myDataProvider;

