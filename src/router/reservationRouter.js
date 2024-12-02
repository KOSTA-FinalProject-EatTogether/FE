import {Suspense, lazy} from "react";
const Loading = <div>Loading..</div>

const ReservationMain = lazy(()=>import("../pages/reservations/ReservationMainPage"))
const ReservationConfirm = lazy(()=>import("../pages/reservations/ReservationConfirmPage"))
const ReservationPayment = lazy(()=>import("../pages/reservations/ReservationPaymentPage"))

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
        }
    ]
}

export default reservationRouter