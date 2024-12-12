import React from 'react';
import { Menu, MenuItemLink, useResourceDefinitions } from 'react-admin';
import MapIcon from '@mui/icons-material/Map';
import TaskIcon from "@mui/icons-material/Task";

export const MyMenu = (props: any) => {
    // 获取所有资源定义
    const resources = useResourceDefinitions();

    return (
        <Menu {...props}>
            <Menu.DashboardItem />
            {/* 使用 resources 动态渲染资源菜单项 */}
            {Object.keys(resources).map(resource => (
                <MenuItemLink
                    key={resource}
                    to={`/${resource}`}
                    primaryText={resources[resource].name}
                    leftIcon={<TaskIcon />}
                />
            ))}

            {/* 固定的菜单项 */}
            <MenuItemLink
                to="/google-map"
                primaryText="Google Map"
                leftIcon={<MapIcon />}
            />

            <MenuItemLink
                to="/openstreetmap"
                primaryText="Openstreet Map"
                leftIcon={<MapIcon />}
            />
        </Menu>
    );
};
