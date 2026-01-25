// import { lazy } from 'react';
import { Navigate,  useRoutes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// layouts
// import SimpleLayout from './layouts/simple';
// import PlanPage from './pages/authPage/PlanPage';
// import Page404 from './pages/Page404';
import RootLayout from './layout/Root.layout';
import AuthPages from './pages/AuthPages';
import ConfirmOrder from './pages/ConfirmOrder';
import Pages from './pages/Pages';

// ----------------------------------------------------------------------
// const ProtectRoute = ({ children, protecting = true }) => {
//   const { token, isAuthenticated, planSelected } = useSelector((state) => state.auth);
//   const location = useLocation();
//   if (protecting) {
//     if (isAuthenticated && token && !planSelected) {
//       return <Navigate to="/plan&price" state={{ from: location }} replace />;
//     }
//     if (isAuthenticated && token && planSelected) {
//       return children;
//     }

//     return <Navigate to="/auth/login" state={{ from: location }} replace />;
//   }

//   if (isAuthenticated && token) {
//     return <Navigate to="/dashboard/app" state={{ from: location }} replace />;
//   }
//   return children;
// };
export default function Router() {
  const routes = useRoutes([
    {
      path:'/',
      element: <RootLayout />,
      children: [
        { element: <Navigate to="/a" />, index: true },
        { path: '/a', element: <Pages /> },
        { path: '/auth', element: <AuthPages /> },
        // { path: '*', element: <Navigate to="/404" /> },
        // {
        //   path: 'plan&price',
        //   element: <PlanPage />,
        // },
      ],
    },
    {
      path:'/confirmOrder',
      element:<ConfirmOrder/>
    }
    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
  ]);
  return routes;
}
