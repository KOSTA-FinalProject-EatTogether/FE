import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/main/MainPage';
import KakaoPage from   '../pages/map/KakaoMapPage';
import BasicBodyLayout from '../layouts/common/BasicBodyLayout';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import userRouter from './userRouter';
import myPageRouter from './myPageRouter';
import ownerRouter from './ownerRouter';
import reservationRouter from './reservationRouter';
import restaurantRouter from './restaurantRouter';
import lineUpRouter from './lineUpRouter';
import adminRouter from './adminRouter';
import AdminRoute from '../components/routes/AdminRoute';


const Loading = <div className="bg-red-700">Loading..</div>;

const BasicOutlet = () => (
  <BasicBodyLayout>
    <Suspense fallback={Loading}>
      <Outlet />
    </Suspense>
  </BasicBodyLayout>
);

const root = createBrowserRouter([
  {
    element: <BasicOutlet />,
    children: [
      { path: 'main', element: <MainPage /> },
      { path: 'user', children: userRouter() },
      { path: 'mypage', children: myPageRouter() },
      { path: 'owner', children: ownerRouter() },
      { path: 'reservation', children: reservationRouter() },
      { path: 'restaurant', children: restaurantRouter() },
      { path: 'admin', element: <AdminRoute />, children: adminRouter() },
      { path: 'queue', children: lineUpRouter() },
      { path: 'kakaomap', element: <KakaoPage/>},

    ],
  },
]);

export default root;
