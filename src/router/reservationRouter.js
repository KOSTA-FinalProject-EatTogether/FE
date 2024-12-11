import {Suspense, lazy} from "react";
const Loading = <div>Loading..</div>

const ReservationConfirm = lazy(()=>import("../pages/restaurant/reservations/ReservationConfirmPage"))
const ReservationPayment = lazy(()=>import("../pages/restaurant/reservations/ReservationPaymentPage"))
const ReservationComplete = lazy(()=>import("../pages/restaurant/reservations/ReservationCompletePage"))
const ReservationAll = lazy(()=>import("../components/reservations/ReservationList"))


const reservationRouter = () => {
    return [
        {
            path: "confirm",
            element : <Suspense fallback={Loading}><ReservationConfirm/></Suspense>
        },{
            path: "payment",
            element : <Suspense fallback={Loading}><ReservationPayment/></Suspense>
        },{
            path: "reservationAll",
            element : <Suspense fallback={Loading}><ReservationAll/></Suspense>
        },{
            path: "complete",
            element : <Suspense fallback={Loading}><ReservationComplete/></Suspense>
        }
    ]
}

export default reservationRouter