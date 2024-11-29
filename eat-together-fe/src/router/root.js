import {Suspense,lazy} from "react";
import memberRouter from "./memberRouter";
import myPageRouter from "./myPageRouter";
import restaurantfixData from "../components/restaurantDetails/RestaurantfixData";

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
    path: "resdetail",
        children : restaurantfixData()
    }
])

export default root
