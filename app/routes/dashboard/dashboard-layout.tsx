import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../../components/index";

const DashboardLayout = () => {
    return (
        <div className="admin-layout">
            <aside className="lg:hidden">mobile sidebar</aside>
            <aside className="w-[450px]  hidden lg:block ">
            <Navbar/>
            </aside>
            <aside className="children">
                <Outlet />
            </aside>
        </div>
    );
}
export default DashboardLayout;