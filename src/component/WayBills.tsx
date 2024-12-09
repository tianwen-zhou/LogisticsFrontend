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
} from "react-admin";

// List component
export const WayBillList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.id}
                    secondaryText={(record) => record.waybillNumber}
                    tertiaryText={(record) => record.postCode}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="waybillNumber" />
                    <TextField source="sender" />
                    <TextField source="senderAddress" />
                    <TextField source="senderPhone" />
                    <TextField source="recipient" />
                    <TextField source="recipientAddress" />
                    <TextField source="recipientPhone" />
                    <TextField source="postCode" />
                    <TextField source="routeCode" />
                    <TextField source="parcelValue" />
                    <TextField source="deliveryTime" />
                    <TextField source="senderLatitude" label="Sender Latitude" />
                    <TextField source="senderLongitude" label="Sender Longitude" />
                    <TextField source="recipientLatitude" label="Recipient Latitude" />
                    <TextField source="recipientLongitude" label="Recipient Longitude" />
                </Datagrid>
            )}
        </List>
    );
};

// Edit component
export const WayBillEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="waybillNumber" />
            <TextInput source="sender" />
            <TextInput source="senderAddress" />
            <TextInput source="senderPhone" />
            <TextInput source="recipient" />
            <TextInput source="recipientAddress" />
            <TextInput source="recipientPhone" />
            <TextInput source="postCode" />
            <TextInput source="routeCode" />
            <TextInput source="parcelValue" />
            <TextInput source="deliveryTime" />
            <TextInput source="senderLatitude" label="Sender Latitude" />
            <TextInput source="senderLongitude" label="Sender Longitude" />
            <TextInput source="recipientLatitude" label="Recipient Latitude" />
            <TextInput source="recipientLongitude" label="Recipient Longitude" />
        </SimpleForm>
    </Edit>
);

// Create component
export const WayBillCreate = () => (
    <Create>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="waybillNumber" />
            <TextInput source="sender" />
            <TextInput source="senderAddress" />
            <TextInput source="senderPhone" />
            <TextInput source="recipient" />
            <TextInput source="recipientAddress" />
            <TextInput source="recipientPhone" />
            <TextInput source="postCode" />
            <TextInput source="routeCode" />
            <TextInput source="parcelValue" />
            <TextInput source="deliveryTime" />
            <TextInput source="senderLatitude" label="Sender Latitude" />
            <TextInput source="senderLongitude" label="Sender Longitude" />
            <TextInput source="recipientLatitude" label="Recipient Latitude" />
            <TextInput source="recipientLongitude" label="Recipient Longitude" />
        </SimpleForm>
    </Create>
);
