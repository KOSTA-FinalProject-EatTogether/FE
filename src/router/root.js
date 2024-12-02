import {Suspense,lazy} from "react";
import memberRouter from "./memberRouter";
import myPageRouter from "./myPageRouter";
import ownerRouter from "./ownerRouter";
import reservationRouter from "./reservationRouter";
import restaurantRouter from "./restaurantRouter";
import lineUpRouter from "./lineUpRouter";
import MainPage from "../pages/main/MainPage";
const {createBrowserRouter} = require("react-router-dom")
import BasicBodyLayout from "../layouts/common/BasicBodyLayout";
const Loading = <div className="bg-red-700">Loading..</div>
import {Outlet} from "react-router-dom";
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
                path : "member",
                children: memberRouter()
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
                path : "line",
                children: lineUpRouter()
            }
        ]
    }
])

export default root
