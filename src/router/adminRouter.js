import {Suspense, lazy} from "react";
import TopAdminReviewManagement from "../components/admin/TopAdminReviewManagement";
import TopAdminRestaurantManagement from "../components/admin/TopAdminRestaurantManagement";
import TopAdminRestaurantRegistration from "../components/admin/TopAdminRestaurantRegistration";
import TopAdminRestaurantStatus from "../components/admin/TopAdminRestaurantStatus";
import TopAdminUserManagement from "../components/admin/TopAdminUserManagement";
import ReviewList from "../components/reviews/ReviewListAndPreviewComponent";
const Loading = <div>Loading..</div>

const SignUp = lazy(()=>import("../pages/member/SignUpPage"))
const SignIn = lazy(() => import("../pages/member/SignInPage"))

const adminRouter = () => {
    return [
        {
            path: "reviewmanage",
            element : <Suspense fallback={Loading}><ReviewList/></Suspense>
        },{
            path: "usermanage",
            element:<Suspense fallback={Loading}><TopAdminUserManagement/></Suspense>
        }, {
            path: "restaurant",
            children: [
                {
                    path: "manage",
                    element: <Suspense fallback={Loading}><TopAdminRestaurantManagement/></Suspense>
                },
                {
                    path: "register",
                    element: <Suspense fallback={Loading}><TopAdminRestaurantRegistration/></Suspense>
                },
                {
                    path: "status",
                    element: <Suspense fallback={Loading}><TopAdminRestaurantStatus/></Suspense>
                }
            ]
        }
    ]
}

export default adminRouter