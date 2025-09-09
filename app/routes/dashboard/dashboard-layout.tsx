import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../../components/index";

const DashboardLayout = () => {
    return (
        <div className="admin-layout">
            <aside className="lg:hidden">mobile sidebar</aside>
            <aside className="w-[250px]  hidden lg:block ">
                <Navbar />
            </aside>
            <div className="flex flex-col  bg-[var(---light)]  lg:w-[calc(100vw-250px)]  ">
                <div className="mx-4">
                    <div className=" flex flex-row justify-between items-center text-black  
                    px-8 py-4  border-b-2 border-gray-100  w-full">
                        <h2 className="text-xl font-bold">Borrower Pipeline</h2>
                        <div className="flex flex-row items-center">
                            <img
                                src="https://i.pravatar.cc/40"
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full mr-4"
                            />
                                <div>
                                    <div>Robert Turner</div>
                                    <small>Loan Officer</small>
                                </div>
                        </div>
                    </div>
                </div>
                <aside className="children ">
                    <div className="mx-4">
                        <Outlet />
                    </div>
                </aside>
            </div>

        </div>
    );
}
export default DashboardLayout;