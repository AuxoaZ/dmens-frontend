import React from "react";
import DarkMode from "../../fragments/DarkMode";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../../features/authSlice";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { DialogConfirm } from "../../elements/dialog";

const NavbarSideBar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <nav className="bg-white dark:bg-slate_900 sticky p-4 h-14 top-0 z-20 shadow-md">
      <div className="container  flex justify-between items-center  px-4 mx-auto relative">
        <button className="dark:text-white sm:hidden" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div></div>
        <div className="flex items-center space-x-4">
          <DarkMode />
          <button
            onClick={handleOpen}
            className="text-800 dark:text-blue-gray-300 hover:text-primary"
          >
            Logout
          </button>
          {/* <Dialog open={open} handler={handleOpen} size={"xs"} className="dark:bg-slate_900">
            <DialogHeader className=" text-lg dark:text-blue-gray-400">
              {title}
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button variant="gradient" color="green" onClick={confirm}>
                <span>Confirm</span>
              </Button>
            </DialogFooter>
          </Dialog> */}

          <DialogConfirm open={open} title= "Apakah kamu yakin keluar?" handleOpen={handleOpen} confirm={Logout}/>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSideBar;
