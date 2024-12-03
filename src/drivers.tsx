// in src/users.tsx
import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, TextField} from "react-admin";

export const DriverList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.phone}
                    tertiaryText={(record) => record.gender}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="phone" />
                    <TextField source="gender" />
                    <TextField source="licensePhoto" />
                    <TextField source="companyName" />
                </Datagrid>
            )}
        </List>
    );
};
