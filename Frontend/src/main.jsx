import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import App from './App.jsx';
import Header from './Header.jsx';
import Supportingitems from './Supportingitem.jsx';
import './index.css';
import LoginSignup from './Components/LoginSignup/LoginSignup.jsx';
const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: [<AppLayout />],
    children: [
      {
        path: "/",
        element: (
          <>
          <Header />
          <Supportingitems />
          <App />
          </>
        ),
      },
      {
        path: "/Login-Signup",
        element: (
          <>
            <LoginSignup/>
            <App />
          </>
        ),
      },
    ],
  },
]);

const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(<RouterProvider router={appRouter} />);
