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
    SelectInput,
    SimpleList,
} from "react-admin";

// List Component
export const RoutePlanList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => `Plan Name: ${record.planName}`}
                    secondaryText={(record) => `Driver ID: ${record.driverId}`}
                    tertiaryText={(record) => `Status: ${record.status}`}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="planName" />
                    <TextField source="driverId" label="Driver ID" />
                    <TextField source="taskNumber" label="Task Number" />
                    <TextField source="version" label="Version" />
                    <TextField source="status" />
                </Datagrid>
            )}
        </List>
    );
};

// Edit Component
export const RoutePlanEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="planName" />
            <NumberInput source="driverId" label="Driver ID" />
            <TextInput source="taskNumber" label="Task Number" />
            <NumberInput source="version" label="Version" />
            <SelectInput
                source="status"
                label="Status"
                choices={[
                    { id: 'Pending', name: 'Pending' },
                    { id: 'InProgress', name: 'In Progress' },
                    { id: 'Completed', name: 'Completed' },
                ]}
            />
        </SimpleForm>
    </Edit>
);

// Create Component
export const RoutePlanCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="planName" />
            <NumberInput source="driverId" label="Driver ID" />
            <TextInput source="taskNumber" label="Task Number" />
            <NumberInput source="version" label="Version" />
            <SelectInput
                source="status"
                label="Status"
                choices={[
                    { id: 'Pending', name: 'Pending' },
                    { id: 'InProgress', name: 'In Progress' },
                    { id: 'Completed', name: 'Completed' },
                ]}
            />
        </SimpleForm>
    </Create>
);
