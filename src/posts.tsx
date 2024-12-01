// in src/posts.tsx
import { List, Datagrid, TextField, ReferenceField, EditButton } from "react-admin";

export const PostList = () => (
    <List>
        <Datagrid rowClick={false}>
            {/* <TextField source="id" /> */}
            {/* <ReferenceField source="userId" reference="users" /> */}
            <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);
