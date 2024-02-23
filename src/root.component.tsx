import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout";
import { DashboardProvider } from "./dashboard-context";
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
        <DashboardLayout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/issues/*" element={<Issues />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </DashboardProvider>
  );
}
