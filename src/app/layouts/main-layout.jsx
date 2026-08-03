import { Outlet } from "react-router-dom";
import { Sidebar } from "../../widgets/sidebar/sidebar";
import "./layout.scss";

export function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout__content">
        <Outlet />
      </main>
    </div>
  );
}