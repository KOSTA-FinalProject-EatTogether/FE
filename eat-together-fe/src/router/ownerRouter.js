import { Suspense, lazy } from "react";
const Loading = <div>Loading..</div>;

const OwnerMain = lazy(() => import("../pages/owner/ownerMainPage"));
const OwnerMenuList = lazy(() => import("../pages/menus/MenuListPage"));
const OwnerMenuAdd = lazy(() => import("../pages/menus/MenuAddPage"));
const OwnerMenuModify = lazy(() => import("../pages/menus/MenuModifyPage"));

const ownerRouter = () => {
    return [
        {
            path: "main",
            element: (
                <Suspense fallback={Loading}>
                    <OwnerMain />
                </Suspense>
            ),
        },
        {
            path: "menulist",
            element: (
                <Suspense fallback={Loading}>
                    <OwnerMenuList />
                </Suspense>
            ),
        },
        {
            path: "menuadd",
            element: (
                <Suspense fallback={Loading}>
                    <OwnerMenuAdd />
                </Suspense>
            ),
        },
        {
            path: "menumodify",
            element: (
                <Suspense fallback={Loading}>
                    <OwnerMenuModify />
                </Suspense>
            ),
        },
    ];
};

export default ownerRouter;
