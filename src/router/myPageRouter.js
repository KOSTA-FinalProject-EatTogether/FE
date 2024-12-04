import {Suspense, lazy} from "react";
const Loading = <div>Loading..</div>

const UserMyPage = lazy(()=>import("../pages/mypages/UserMyPage"))
const ModifyUser = lazy(()=>import("../pages/mypages/ModifyProfilePage"))
const UserPast = lazy(()=>import("../pages/mypages/UserPastPage"))
const UserReviewWrite = lazy(()=>import("../pages/mypages/UserReviewWritePage"))
const UserReviewDetailComponent =  lazy(()=>import("../components/mypage/UserReviewDetailComponent"))
const userRouter = () => {
    return [
        {
            path: "user",
            element : <Suspense fallback={Loading}><UserMyPage/></Suspense>
        },{
            path: "modify",
            element : <Suspense fallback={Loading}><ModifyUser/></Suspense>
        },{
            path : "past",
            element : <Suspense fallback={Loading}><UserPast/></Suspense>
        },{
            path : "reviewwrite",
            element : <Suspense fallback={Loading}><UserReviewWrite/></Suspense>
        },{
            path: "tempreview",
            element : <Suspense fallback={Loading}><UserReviewDetailComponent/></Suspense>
        }
    ]
}

export default userRouter