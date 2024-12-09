import { Suspense, lazy } from 'react';

const Loading = <div>Loading..</div>;

const RestaurantDetail = lazy(() => import('../pages/restaurant/restaurantDetails/RestaurantDetailsPage'));
const RestaurantModify = lazy(() => import('../pages/restaurant/restaurantDetails/RestaurantModifyPage'));
const RestaurantPreviewPage = lazy(() => import('../pages/restaurant/restaurantPreview/RestaurantPreviewPage'));

const restaurantRouter = () => [
  {
    path: 'preview',
    element: <Suspense fallback={Loading}><RestaurantPreviewPage /></Suspense>,
  },
  {
    path: 'detail/:rsId',
    element: <Suspense fallback={Loading}><RestaurantDetail /></Suspense>,
  },
  {
    path: 'modify',
    element: <Suspense fallback={Loading}><RestaurantModify /></Suspense>,
  },
];

export default restaurantRouter;
