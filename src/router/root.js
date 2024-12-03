import {Suspense,lazy} from "react";
import userRouter from "./userRouter";
import myPageRouter from "./myPageRouter";
import ownerRouter from "./ownerRouter";
import reservationRouter from "./reservationRouter";
import restaurantRouter from "./restaurantRouter";
import lineUpRouter from "./lineUpRouter";
import adminRouter from "./adminRouter";

import MainPage from "../pages/main/MainPage";
import BasicBodyLayout from "../layouts/common/BasicBodyLayout";
import {Outlet} from "react-router-dom";
import AdminRoute from "../components/routes/AdminRoute";

const Loading = <div className="bg-red-700">Loading..</div>
const {createBrowserRouter} = require("react-router-dom")
const BasicOutlet = () => (
    <BasicBodyLayout>
        <Suspense fallback={Loading}>
            <Outlet />
        </Suspense>
    </BasicBodyLayout>
);

const root = createBrowserRouter([
    {
        element: <BasicOutlet />,
        children: [
            {
                path: "main",
                element: <MainPage />
            },{
                path : "user",
                children: userRouter()
            },{
                path: "mypage",
                children: myPageRouter()
            },{
                path: "owner",
                children: ownerRouter()
            },{
                path:"reservation",
                children: reservationRouter()
            },{
                path: "restaurant",
                children: restaurantRouter()
            },{
                path : "admin",
                element: <AdminRoute />,
                children: adminRouter()
            },{
                path: "queue",
                children: lineUpRouter()
            }
        ]
    }
])

export default root
