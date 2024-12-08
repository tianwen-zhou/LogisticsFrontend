// in src/DeliveryTask.tsx
import { useMediaQuery, Theme } from "@mui/material";
import {
    List,
    Datagrid,
    TextField,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    SimpleList,
    DateField,
    DateInput,
} from "react-admin";

export const DeliveryTaskList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.taskNumber}
                    secondaryText={(record) => record.taskType}
                    tertiaryText={(record) => record.assignedTo}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="taskNumber" />
                    <TextField source="taskType" />
                    <TextField source="assignedTo" />
                    <TextField source="taskStatus" />
                    <DateField source="createdTime" />
                    <DateField source="updatedTime" />
                </Datagrid>
            )}
        </List>
    );
};

export const DeliveryTaskEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="taskNumber" />
            <TextInput source="taskType" />
            <TextInput source="assignedTo" />
            <TextInput source="taskStatus" />
            <DateInput source="createdTime" disabled />
            <DateInput source="updatedTime" disabled />
        </SimpleForm>
    </Edit>
);

export const DeliveryTaskCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="taskNumber" />
            <TextInput source="taskType" />
            <TextInput source="assignedTo" />
            <TextInput source="taskStatus" />
            <DateInput source="createdTime" />
            <DateInput source="updatedTime" />
        </SimpleForm>
    </Create>
);
