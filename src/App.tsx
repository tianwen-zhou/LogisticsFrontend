// in src/App.tsx
// import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from './dataProvider';
import { UserList } from "./users";
import { PostList } from "./posts";

export const App = () => (
  <Admin dataProvider={dataProvider}>
     {/* <Resource name="posts" list={ListGuesser} /> */}
     <Resource name="posts" list={PostList} />
{/* +    <Resource name="users" list={UserList} /> */}
     <Resource name="users" list={UserList} show={ShowGuesser}  />
  </Admin>
);
