import React from "react";
import Analyticscard from "./analyticscard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ChecklistIcon from "@mui/icons-material/Checklist";
import Sidebar from "./DashBoardSidebar";
import CustomerTable from "./customertable";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <h2>Welcome to ERP Dashboard</h2>
          <div className="cards">
            <Analyticscard
              icon={<TrendingUpIcon style={{ fontSize: "50px" }} />}
              heading="Total Customers"
              number={1000}
            />
            <Analyticscard
              icon={<ChecklistIcon style={{ fontSize: "50px" }} />}
              heading="Total Products"
              number={1000}
            />
            <Analyticscard
              icon={<AttachMoneyIcon style={{ fontSize: "50px" }} />}
              heading="Total Revenue"
              number={"5000$"}
            />
          </div>
          <div className="customers">
            <h2>Customers</h2>
            <CustomerTable/>
          </div>
        </div>
      </div>
    </>
  );
}
