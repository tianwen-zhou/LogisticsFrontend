// in src/App.tsx
import { Admin, Resource, CustomRoutes } from "react-admin";
import { Route } from 'react-router-dom';
import GoogleMapPage from './component/GoogleMapPage';
import myDataProvider from "./dataProvider";
import { DriverList, DriverEdit, DriverCreate } from "./component/Driver";
import { WayBillList, WayBillEdit, WayBillCreate } from "./component/WayBills";
import { PostalAreaList, PostalAreaEdit, PostalAreaCreate } from "./component/PostalArea";
import { DeliveryTaskEdit, DeliveryTaskCreate, DeliveryTaskList } from "./component/DeliveryTask";
import { TaskWaybillList, TaskWaybillEdit, TaskWaybillCreate } from "./component/TaskWaybill";
import { RoutePlanList, RoutePlanEdit, RoutePlanCreate } from "./component/RoutePlan";
import UserIcon from "@mui/icons-material/Group";
import PostIcon from "@mui/icons-material/Book";
import RouteIcon from "@mui/icons-material/AltRoute";
import TaskIcon from "@mui/icons-material/Task";
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';
import { MyLayout } from './MyLayout';


export const App = () => (    
  <Admin layout={MyLayout} authProvider={authProvider} dataProvider={myDataProvider} dashboard={Dashboard} >
        {/* Drivers Resource */}
        <Resource
            name="Drivers"
            list={DriverList}
            edit={DriverEdit} 
            create={DriverCreate} 
            icon={UserIcon}
        />
        
        {/* Waybills Resource */}
        <Resource
            name="WayBills"
            list={WayBillList}
            edit={WayBillEdit} 
            create={WayBillCreate} 
            icon={PostIcon}
        />

        {/* PostalAreas Resource */}
        <Resource
            name="PostalAreas"
            list={PostalAreaList}
            edit={PostalAreaEdit} 
            create={PostalAreaCreate} 
            icon={PostIcon}
        />

        {/* DeliveryTask Resource */}
        <Resource
            name="DeliveryTasks"
            list={DeliveryTaskList}
            edit={DeliveryTaskEdit} 
            create={DeliveryTaskCreate} 
            icon={TaskIcon}
        />

        {/* TaskWaybill Resource */}
        <Resource
            name="TaskWayBills"
            list={TaskWaybillList}
            edit={TaskWaybillEdit}
            create={TaskWaybillCreate}
            icon={TaskIcon}
        />

        {/* RoutePlan Resource */}
        <Resource
            name="RoutePlans"
            list={RoutePlanList}
            edit={RoutePlanEdit}
            create={RoutePlanCreate}
            icon={RouteIcon}
        />
        <CustomRoutes>
            <Route path="/google-map" element={<GoogleMapPage />} />
        </CustomRoutes>
  </Admin>
);