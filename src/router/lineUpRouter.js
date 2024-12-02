import {Suspense, lazy} from "react";
const Loading = <div>Loading..</div>

const LineReservation = lazy(()=>import("../pages/line/LineReservationPage"))
const LineUpRequest = lazy(() => import("../components/line/LineUpRequest"))
const LineUpMenuSelection = lazy(() => import("../pages/line/LineUpMenuSelectionPagew"))
const LineUpMenunextSelection = lazy(() => import("../components/line/LineUpMenunextSelection"))
const LineUpPayment = lazy(() => import("../components/line/LineUpPayment"))
const LineUpPaymentComplete = lazy(() => import("../components/line/LineUpPaymentComplete"))
const LineUpReservation = lazy(() => import("../pages/member/SignInPage"))

const lineUpRouter = () => {
    return [
        {
            path: "lineReservation",
            element : <Suspense fallba ck={Loading}><LineReservation/></Suspense>
        },{
            path: "request",
            element:<Suspense fallback={Loading}><LineUpRequest/></Suspense>
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
            path: "lineUpReservation",
            element:<Suspense fallback={Loading}><LineUpReservation/></Suspense>
        }
    ]
}

export default lineUpRouter