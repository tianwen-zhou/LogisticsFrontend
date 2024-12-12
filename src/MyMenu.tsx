import React from 'react';
import { Menu, useResourceDefinitions } from 'react-admin';
import MapIcon from '@mui/icons-material/Map';

const MyMenu = (props: any) => {
    const resources = useResourceDefinitions();

    return (
        <Menu {...props}>
            <Menu.DashboardItem />
            {Object.keys(resources).map(resource => (
                <Menu.Item
                    key={resource}
                    to={`/${resource}`}
                    primaryText={resources[resource].name}
                />
            ))}
            <Menu.Item
                to="/google-map"
                primaryText="Google Map"
                leftIcon={<MapIcon />}
            />
        </Menu>
    );
};

export default MyMenu;
