import { Suspense, lazy } from "react";
const Loading = <div>Loading..</div>;

const OwnerMain = lazy(() => import("../pages/owner/OwnerMainPage"))

const OwnerRestaurantIntroModifyComponent = lazy(() => import("../pages/owner/OwnerRestaurantIntroModifyPage"))

const OwnerMenuList = lazy(() => import("../pages/restaurant/menus/MenuListPage"));


const BusinessHourList = lazy(() => import("../pages/owner/BusinessHoursPage"));
const BusinessHourModify = lazy(() => import("../pages/owner/BusinessHourModifyPage"));

const ReservationMain = lazy(() => import("../pages/restaurant/reservationManage/ReservationManageMainPage"))
const ReservationAdd = lazy(() => import("../pages/restaurant/reservationManage/ReservationManageManageAddPage"))
const ReservationTimeSetting =lazy(() => import("../pages/restaurant/reservationManage/ReservationManageTimeSettingPage"))

const QueueMain = lazy(() => import("../pages/queue/QueueMainPage"))
const QueueHistory = lazy(() => import("../pages/queue/QueueHistoryPage"))

const NewsAdd = lazy(() => import("../pages/restaurant/restaurantNews/RestaurantNewsAddPage"))
const NewsList = lazy(() => import("../pages/restaurant/restaurantNews/RestaurantNewsListPage"))
const NewsModify = lazy(() => import("../pages/restaurant/restaurantNews/RestaurantNewsModifyPage"))

const ReviewManageMain = lazy(() => import("../pages/reviews/ReviewManageMainPage"))



const ownerRouter = () => {
    return [
        {
            path: "main",
            element: <Suspense fallback={Loading}><OwnerMain /></Suspense>
        },
        {
            path: "basic",
            children: [
                {
                    path: "intro",
                    element: <Suspense fallback={Loading}><OwnerRestaurantIntroModifyComponent /></Suspense>
                },
                {
                    path: "menu",
                    element: <Suspense fallback={Loading}><OwnerMenuList /></Suspense>
                },
                {
                    path: "hours",
                    children: [
                        {
                            path: "list",
                            element: <Suspense fallback={Loading}><BusinessHourList /></Suspense>
                        },
                        {
                            path: "modify",
                            element: <Suspense fallback={Loading}><BusinessHourModify /></Suspense>
                        }
                    ]
                }
            ]
        },
        {
            path: "reservation",
            children: [
                {
                    path: "main",
                    element: <Suspense fallback={Loading}><ReservationMain /></Suspense>
                },
                {
                    path: "add",
                    element: <Suspense fallback={Loading}><ReservationAdd /></Suspense>
                },
                {
                    path: "timesetting",
                    element: <Suspense fallback={Loading}><ReservationTimeSetting /></Suspense>
                }
            ]
        },
        {
            path: "queue",
            children: [
                {
                    path: "main",
                    element: <Suspense fallback={Loading}><QueueMain /></Suspense>
                },
                {
                    path: "history",
                    element: <Suspense fallback={Loading}><QueueHistory /></Suspense>
                }
            ]
        },
        {
            path: "news",
            children: [
                {
                    path: "list",
                    element: <Suspense fallback={Loading}><NewsList /></Suspense>
                },
                {
                    path: "add",
                    element: <Suspense fallback={Loading}><NewsAdd /></Suspense>
                },
                {
                    path: "modify",
                    element: <Suspense fallback={Loading}><NewsModify /></Suspense>
                }
            ]
        },
        {
            path: "review",
            element: <Suspense fallback={Loading}><ReviewManageMain /></Suspense>
        }
    ];
};


export default ownerRouter;
