// in src/users.tsx
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
                </Datagrid>
            )}
        </List>
    );
};

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
        </SimpleForm>
    </Edit>
);

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
        </SimpleForm>
      </Create>
    );