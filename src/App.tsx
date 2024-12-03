// in src/App.tsx
// import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from './dataProvider';
import { DriverList } from "./drivers";
import { PostList, PostEdit,PostCreate } from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';



export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} >
        <Resource
            name="Drivers"
            list={DriverList}
            show={ShowGuesser}
            icon={UserIcon}
        />
  </Admin>
);
