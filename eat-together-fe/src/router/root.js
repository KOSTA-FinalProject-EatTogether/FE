import {Suspense,lazy} from "react";
import memberRouter from "./memberRouter";
import myPageRouter from "./myPageRouter";
import ownerRouter from "./ownerRouter";

const {createBrowserRouter} = require("react-router-dom")

const Loading = <div className="bg-red-700">Loading..</div>

const root = createBrowserRouter([
    {
        path : "member",
        children: memberRouter()
    },{
        path: "mypage",
        children : myPageRouter()
    },{
        path: "owner",
        children: ownerRouter()
    }
])

export default root
