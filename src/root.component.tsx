import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout";
import { DashboardProvider } from "./dashboard-context";
import PrivateRoute from "./private-route";
// @ts-ignore
import { Home } from "@myorg/home-page";
// @ts-ignore
import { Users } from "@myorg/users-page";
// @ts-ignore
import { Issues } from "@myorg/issues-page";

export default function Root(props) {
  if (window.location.pathname === "/") {
    return null;
  }

  return (
    <DashboardProvider>
      <BrowserRouter>
        {/* <DashboardLayout> */}
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route
              path="home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="users"
              element={
                <PrivateRoute>
                  <Users />
                </PrivateRoute>
              }
            />
            <Route
              path="issues/*"
              element={
                <PrivateRoute>
                  <Issues />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
        {/* </DashboardLayout> */}
      </BrowserRouter>
    </DashboardProvider>
  );
}
