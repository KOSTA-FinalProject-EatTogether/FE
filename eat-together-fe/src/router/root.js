import {Suspense,lazy} from "react";
import memberRouter from "./memberRouter";

const {createBrowserRouter} = require("react-router-dom")

const Loading = <div className="bg-red-700">Loading..</div>

const root = createBrowserRouter([
    {
        path : "member",
        children: memberRouter()
    }
])

export default root
