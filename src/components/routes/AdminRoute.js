// src/components/routes/AdminRoute.js
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  // 실제 구현에서는 로컬 스토리지나 전역 상태에서 사용자 정보를 가져옵니다
  const isAdmin = () => {
    const user = JSON.parse(localStorage.getItem('loginInfo'));
    return user && user.role === 'ADMIN';  // 실제 역할값에 맞게 수정
  };

  return isAdmin() ? <Outlet /> : <Navigate to="/member/signin" replace />;
};

export default AdminRoute;