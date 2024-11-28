import {Suspense, lazy} from "react";
const Loading = <div>Loading..</div>

const UserMyPage = lazy(()=>import("../pages/mypages/UserMyPage"))
const ModifyUser = lazy(()=>import("../pages/mypages/ModifyProfilePage"))

const memberRouter = () => {
    return [
        {
            path: "user",
            element : <Suspense fallback={Loading}><UserMyPage/></Suspense>
        },{
            path: "modify",
            element : <Suspense fallback={Loading}><ModifyUser/></Suspense>
        }
    ]
}

export default memberRouter