import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";
import { SideBar } from "../../../components/layouts/staff/Sidebar";
import NavbarSideBar from "../../../components/layouts/staff/NavbarSideBar";
import Main from "../../../components/layouts/staff/Dashboard";

const Cashier = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
        navigate("/");
    }
  }, [isError, navigate]);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
  };


  return (
    <div>
      {/* <SideBar/> */}
      <div className="flex flex-row">
        <SideBar  isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <div className="fle flex-col w-full">
          <NavbarSideBar toggleSidebar={toggleSidebar} />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Cashier;
