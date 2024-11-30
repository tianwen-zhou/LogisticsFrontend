// in src/App.tsx
// import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { Admin, Resource } from "react-admin";
import { dataProvider } from './dataProvider';
import { UserList } from "./users";


export const App = () => (
  <Admin dataProvider={dataProvider}>
+    <Resource name="users" list={UserList} />
  </Admin>
);
