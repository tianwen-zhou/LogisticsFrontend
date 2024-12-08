// TaskWaybill.tsx
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

export const TaskWaybillList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => `Task ID: ${record.taskId}`}
                    secondaryText={(record) => `Waybill ID: ${record.waybillId}`}
                    tertiaryText={(record) => `Status: ${record.status}`}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="taskId" label="Task ID" />
                    <TextField source="waybillId" label="Waybill ID" />
                    <TextField source="status" />
                </Datagrid>
            )}
        </List>
    );
};

export const TaskWaybillEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" />
            <NumberInput source="taskId" label="Task ID" />
            <NumberInput source="waybillId" label="Waybill ID" />
            <TextInput source="status" />
        </SimpleForm>
    </Edit>
);

export const TaskWaybillCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="taskId" label="Task ID" />
            <NumberInput source="waybillId" label="Waybill ID" />
            <TextInput source="status" />
        </SimpleForm>
    </Create>
);
