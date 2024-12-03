import {Suspense, lazy} from "react";
const Loading = <div>Loading..</div>

const LineReservation = lazy(()=>import("../pages/line/LineReservationPage"))
const LineUpComplete = lazy(() => import("../components/line/LineUpComplete"))
const LineUpMenuSelection = lazy(() => import("../pages/line/LineUpMenuSelectionPagew"))
const LineUpMenunextSelection = lazy(() => import("../components/line/LineUpMenunextSelection"))
const LineUpPayment = lazy(() => import("../components/line/LineUpPayment"))
const LineUpPaymentComplete = lazy(() => import("../components/line/LineUpPaymentComplete"))
const LineUpDetails = lazy(() => import("../components/line/LineUpDetails"))
const MenuDetailPage  = lazy(() => import("../components/line/MenuDetailPage"))
import {useNavigate} from "react-router-dom";

const lineUpRouter = () => {
    return [
        {
            path: "lineReservation",
            element : <Suspense fallba ck={Loading}><LineReservation/></Suspense>
        },{
            path: "LineUpComplete",
            element:<Suspense fallback={Loading}><LineUpComplete/></Suspense>
        },{
            path: "menuSelect",
            element:<Suspense fallback={Loading}><LineUpMenuSelection/></Suspense>
        },{
            path: "menuNextSelect",
            element:<Suspense fallback={Loading}><LineUpMenunextSelection/></Suspense>
        },{
            path: "payment",
            element:<Suspense fallback={Loading}><LineUpPayment/></Suspense>
        },{
            path: "paymentComplete",
            element:<Suspense fallback={Loading}><LineUpPaymentComplete/></Suspense>
        },{
            path: "queuedetails",
            element:<Suspense fallback={Loading}><LineUpDetails/></Suspense>
        },{
            path: "menuDetails",
            element:<Suspense fallback={Loading}><MenuDetailPage/></Suspense>
        }
    ]
}

export default lineUpRouter