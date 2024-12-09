import {Suspense, lazy} from "react";
const Loading = <div>Loading..</div>

const ReservationMain = lazy(()=>import("../pages/restaurant/reservations/ReservationMainPage"))
const ReservationConfirm = lazy(()=>import("../pages/restaurant/reservations/ReservationConfirmPage"))
const ReservationPayment = lazy(()=>import("../pages/restaurant/reservations/ReservationPaymentPage"))
const ReservationAll = lazy(()=>import("../components/reservations/ReservationList"))
const reservationRouter = () => {
    return [
        {
            path: "main",
            element : <Suspense fallback={Loading}><ReservationMain/></Suspense>
        },{
            path: "confirm",
            element : <Suspense fallback={Loading}><ReservationConfirm/></Suspense>
        },{
            path: "payment",
            element : <Suspense fallback={Loading}><ReservationPayment/></Suspense>
        },{
            path: "reservationAll",
            element : <Suspense fallback={Loading}><ReservationAll/></Suspense>
        }
    ]
}

export default reservationRouter