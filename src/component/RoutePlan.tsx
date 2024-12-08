// RoutePlan.tsx
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

export const RoutePlanList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => `Plan Name: ${record.planName}`}
                    secondaryText={(record) => `Driver ID: ${record.driverId}`}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="planName" />
                    <TextField source="driverId" label="Driver ID" />
                </Datagrid>
            )}
        </List>
    );
};

export const RoutePlanEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="planName" />
            <NumberInput source="driverId" label="Driver ID" />
        </SimpleForm>
    </Edit>
);

export const RoutePlanCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="planName" />
            <NumberInput source="driverId" label="Driver ID" />
        </SimpleForm>
    </Create>
);
