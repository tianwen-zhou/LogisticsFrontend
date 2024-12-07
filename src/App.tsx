// in src/App.tsx
// import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { Admin, Resource } from "react-admin";
import myDataProvider from "./dataProvider";
import { DriverList, DriverEdit, DriverCreate } from "./drivers";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={myDataProvider} dashboard={Dashboard} >
        <Resource
            name="Drivers"
            list={DriverList}
            edit={DriverEdit} 
            create={DriverCreate} 
            icon={UserIcon}
        />
  </Admin>
);
