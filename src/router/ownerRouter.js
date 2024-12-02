import { Suspense, lazy } from "react";
const Loading = <div>Loading..</div>;

const OwnerMain = lazy(() => import("../pages/owner/OwnerMainPage"))

const OwnerRestaurantIntroModifyComponent = lazy(() => import("../pages/owner/OwnerRestaurantIntroModifyPage"))

const OwnerMenuList = lazy(() => import("../pages/menus/MenuListPage"));


const BusinessHourList = lazy(() => import("../pages/businesshours/BusinessHoursPage"));
const BusinessHourModify = lazy(() => import("../pages/businesshours/BusinessHourModifyPage"));

const ReservationMain = lazy(() => import("../pages/reservationManage/ReservationManageMainPage"))
const ReservationAdd = lazy(() => import("../pages/reservationManage/ReservationManageManageAddPage"))
const ReserationTimeSetting =lazy(() => import("../pages/reservationManage/ReservationManageTimeSettingPage"))

const QueueMain = lazy(() => import("../pages/queue/QueueMainPage"))
const QueueHistory = lazy(() => import("../pages/queue/QueueHistoryPage"))

const NewsAdd = lazy(() => import("../pages/restaurantNews/RestaurantNewsAddPage"))
const NewsList = lazy(() => import("../pages/restaurantNews/RestaurantNewsListPage"))
const NewsModify = lazy(() => import("../pages/restaurantNews/RestaurantNewsModifyPage"))

const ReviewManageMain = lazy(() => import("../pages/reviewManage/ReviewManageMainPage"))

const ownerRouter = () => {
    return [
        {
            path: "main",
            element: (
                <Suspense fallback={Loading}>
                    <OwnerMain />
                </Suspense>
            ),
        },{
            path: "intromodify",
            element:(
                <Suspense fallback={Loading}>
                    <OwnerRestaurantIntroModifyComponent />
                </Suspense>
            ),
        },{
            path: "menulist",
            element: (
                <Suspense fallback={Loading}>
                    <OwnerMenuList />
                </Suspense>
            ),
        },{
            path:"businesshour",
            element: (
                <Suspense fallback={Loading}>
                    <BusinessHourList />
                </Suspense>
            ),
        },{
            path:"businesshourmodify",
            element: (
                <Suspense fallback={Loading}>
                    <BusinessHourModify />
                </Suspense>
            ),
        },{
            path: "reservationmain",
            element: (
                <Suspense fallback={Loading}>
                    <ReservationMain />
                </Suspense>
            ),
        },{
            path: "reservationadd",
            element: (
                <Suspense fallback={Loading}>
                    <ReservationAdd />
                </Suspense>
            ),
        },{
            path: "reservationtimesetting",
            element: (
                <Suspense fallback={Loading}>
                    <ReserationTimeSetting/>
                </Suspense>
            ),
        },{
            path: "queuemain",
            element: (
                <Suspense fallback={Loading}>
                    <QueueMain/>
                </Suspense>
            ),
        },{
            path: "queuehistory",
            element: (
                <Suspense fallback={Loading}>
                    <QueueHistory/>
                </Suspense>
            ),
        },{
            path: "newsadd",
            element: (
                <Suspense fallback={Loading}>
                    <NewsAdd/>
                </Suspense>
            ),
        },{
            path: "newslist",
            element: (
                <Suspense fallback={Loading}>
                    <NewsList/>
                </Suspense>
            ),
        },{
            path: "newsmodify",
            element: (
                <Suspense fallback={Loading}>
                    <NewsModify/>
                </Suspense>
            ),
        },{
            path: "reviewmanagemain",
            element: (
                <Suspense fallback={Loading}>
                    <ReviewManageMain/>
                </Suspense>
            ),
        }

    ];
};

export default ownerRouter;
