// in src/PostalArea.tsx
import { useMediaQuery, Theme } from "@mui/material";
import {
    List,
    Datagrid,
    TextField,
    BooleanField,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    BooleanInput,
    SimpleList,
} from "react-admin";

export const PostalAreaList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.city}
                    secondaryText={(record) => `Suburb: ${record.suburb}`}
                    tertiaryText={(record) => `PostCode: ${record.postCode}`}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="city" />
                    <TextField source="suburb" />
                    <TextField source="postCode" />
                    <TextField source="routeCode" />
                    <TextField source="zone" />
                    <BooleanField source="remoteArea" />
                    <TextField source="deliveryServiceProvider" label="Delivery Provider"/>
                    <TextField source="activationPlan" />
                    <TextField source="lmShippingStation" label="Shipping Station" />
                    <TextField source="lmDeliveryStation" label="Delivery Station" />
                </Datagrid>
            )}
        </List>
    );
};

export const PostalAreaEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="city" />
            <TextInput source="suburb" />
            <TextInput source="postCode" />
            <TextInput source="routeCode" />
            <TextInput source="zone" />
            <BooleanInput source="remoteArea" label="Is Remote Area?" />
            <TextInput source="deliveryServiceProvider" />
            <TextInput source="activationPlan" />
            <TextInput source="lmShippingStation" label="Shipping Station" />
            <TextInput source="lmDeliveryStation" label="Delivery Station" />
        </SimpleForm>
    </Edit>
);

export const PostalAreaCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="city" />
            <TextInput source="suburb" />
            <TextInput source="postCode" />
            <TextInput source="routeCode" />
            <TextInput source="zone" />
            <BooleanInput source="remoteArea" label="Is Remote Area?" />
            <TextInput source="deliveryServiceProvider" />
            <TextInput source="activationPlan" />
            <TextInput source="lmShippingStation" label="Shipping Station" />
            <TextInput source="lmDeliveryStation" label="Delivery Station" />
        </SimpleForm>
    </Create>
);