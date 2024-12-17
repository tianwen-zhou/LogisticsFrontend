// in src/DeliveryTask.tsx
import { useMediaQuery, Theme } from "@mui/material";
import {
    List,
    Datagrid,
    DatagridConfigurable,
    TextField,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    SimpleList,
    DateField,
    DateInput,
    WrapperField,
    EditButton
} from "react-admin";
import { Link } from 'react-router-dom';
import { useRecordContext } from 'react-admin';


export const DeliveryTaskList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.taskNumber}
                    secondaryText={(record) => record.taskType}
                    tertiaryText={(record) => record.assignedTo}
                />
            ) : (
                <DatagridConfigurable rowClick={false}>
                    <TextField source="id"/>
                    <WrapperField label="Task Number">
                        <TaskNumberLink />
                    </WrapperField>
                    <TextField source="taskType" />
                    <TextField source="assignedTo" />
                    <TextField source="taskStatus" />
                    <DateField source="createdTime" />
                    <DateField source="updatedTime" />
                    <WrapperField label="Actions">
                        <EditButton />
                    </WrapperField>
                </DatagridConfigurable>
            )}
        </List>
    );
};

const TaskNumberLink = () => {
    const record = useRecordContext(); // 获取当前行的 record
    if (!record) return null; // 防止 record 为 undefined
    
    return (
        <Link 
            to={`/tasks/map/${record.taskNumber}`} 
            style={{ color: '#007bff', textDecoration: 'underline' }}
            target="_blank" // 在新标签页中打开
            rel="noopener noreferrer" // 增强安全性，防止潜在的恶意攻击
        >
            {record.taskNumber}
        </Link>
    );
};


export const DeliveryTaskEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="taskNumber" />
            <TextInput source="taskType" />
            <TextInput source="assignedTo" />
            <TextInput source="taskStatus" />
            <DateInput source="createdTime" disabled />
            <DateInput source="updatedTime" disabled />
        </SimpleForm>
    </Edit>
);

export const DeliveryTaskCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="taskNumber" />
            <TextInput source="taskType" />
            <TextInput source="assignedTo" />
            <TextInput source="taskStatus" />
            <DateInput source="createdTime" />
            <DateInput source="updatedTime" />
        </SimpleForm>
    </Create>
);
