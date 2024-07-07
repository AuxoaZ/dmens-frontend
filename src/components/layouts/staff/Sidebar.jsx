import React from "react";
import { Card, List } from "@material-tailwind/react";
import { AdminList, CashierList } from "./ListLink";
import { useDispatch, useSelector } from "react-redux";

export function SideBar({ isOpen, toggleSidebar }) {
  const dispatch = useDispatch();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card
      className={`bg-slate_800 dark:bg-slate_900 fixed md:sticky top-0  shadow-md h-screen rounded-none z-30 transform ${
        isOpen ? "translate-x-0 " : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out `}
    >
      <div className="mb-2 p-4 text-blue-gray-300 text-4xl">Dmens</div>
      <button
        className="absolute top-4 right-4 text-gray-600 hover:rotate-180 md:hidden"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <List>
        
        {user && (user.role === "admin" || user.role === "manager") ? (
          <AdminList />
        ) : user && user.role === "cashier" ? (
          <CashierList />
        ) : null}
      </List>
    </Card>
  );
}
