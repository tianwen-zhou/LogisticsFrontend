// in src/App.tsx
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
// import { dataProvider } from './dataProvider';

import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export const App = () => (
  <Admin dataProvider={dataProvider}>
+   <Resource name="users" list={ListGuesser} />
  </Admin>
);
