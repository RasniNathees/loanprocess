import React from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
    return (
        <div className="admin-layout">
            <aside>mobile sidebar</aside>
            <aside className="w-full max-w[250px] hidden lg:block">side bar</aside>
            <aside className="children">
                <Outlet />
            </aside>
        </div>
    );
}
export default DashboardLayout;