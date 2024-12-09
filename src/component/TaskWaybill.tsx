import { useMediaQuery, Theme } from "@mui/material";
import {
    List,
    Datagrid,
    TextField,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    SimpleList,
} from "react-admin";

// List Component
export const TaskWaybillList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => `Task Number: ${record.taskNumber}`}
                    secondaryText={(record) => `Waybill Number: ${record.waybillNumber}`}
                    tertiaryText={(record) => `Status: ${record.status}, Order: ${record.order}`}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="taskNumber" label="Task Number" />
                    <TextField source="waybillNumber" label="Waybill Number" />
                    <TextField source="status" label="Status" />
                    <TextField source="order" label="Order" />
                </Datagrid>
            )}
        </List>
    );
};

// Edit Component
export const TaskWaybillEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="taskNumber" label="Task Number" />
            <TextInput source="waybillNumber" label="Waybill Number" />
            <TextInput source="status" label="Status" />
            <NumberInput source="order" label="Order" />
        </SimpleForm>
    </Edit>
);

// Create Component
export const TaskWaybillCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="taskNumber" label="Task Number" />
            <TextInput source="waybillNumber" label="Waybill Number" />
            <TextInput source="status" label="Status" />
            <NumberInput source="order" label="Order" />
        </SimpleForm>
    </Create>
);
