// in src/posts.tsx
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
} from "react-admin";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostList = () => (
    <List filters={postFilters}>
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

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{ disabled: true }} />
            <ReferenceInput source="userId" reference="users" link="show" />
            {/* <TextInput source="id" /> */}
            <TextInput source="title" />
            {/* <TextInput source="body" /> */}
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
      <Create>
        <SimpleForm>
          <ReferenceInput source="userId" reference="users" />
          <TextInput source="title" />
          <TextInput source="body" multiline rows={5} />
        </SimpleForm>
      </Create>
    );
