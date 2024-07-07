import React from "react";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import {
  ListChecks,
  NotebookPen,
  ShoppingCart,
  Star,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

export const AdminList = () => {
  return (
    <div>
            <Link to="/staff/admin/">
      <ListItem className="text-blue-gray-300 hover:bg-blue-gray-100 ">
        <ListItemPrefix>
          <PresentationChartBarIcon className="h-5 w-5" />
        </ListItemPrefix>
        Dashboard
      </ListItem>
      </Link>

      <ListItem className="text-blue-gray-300 hover:bg-blue-gray-100">
        <ListItemPrefix>
          <NotebookPen className="h-5 w-5" />
        </ListItemPrefix>
        Report
      </ListItem>

      <Link to="/staff/admin/manage_staff">
        <ListItem className="text-blue-gray-300 hover:bg-blue-gray-100">
          <ListItemPrefix>
            <User className="h-5 w-5" />
          </ListItemPrefix>
          Staff
        </ListItem>
      </Link>
      <ListItem className="text-blue-gray-300 hover:bg-blue-gray-100">
        <ListItemPrefix>
          <Star className="h-5 w-5" />
        </ListItemPrefix>
        Review & Feedback
      </ListItem>
      <ListItem className="text-blue-gray-300 hover:bg-blue-gray-100">
        <ListItemPrefix>
          <ListChecks className="h-5 w-5" />
        </ListItemPrefix>
        Service
      </ListItem>
      <ListItem className="text-blue-gray-300 hover:bg-blue-gray-100">
        <ListItemPrefix>
          <ShoppingCart className="h-5 w-5" />
        </ListItemPrefix>
        Product
      </ListItem>
      <ListItem className="text-blue-gray-300 hover:bg-blue-gray-100">
        <ListItemPrefix>
          <Cog6ToothIcon className="h-5 w-5" />
        </ListItemPrefix>
        Settings
      </ListItem>
    </div>
  );
};
export const CashierList = () => {
  return (
    <div>
      <ListItem className="text-blue-gray-300">
        <ListItemPrefix>
          <PresentationChartBarIcon className="h-5 w-5" />
        </ListItemPrefix>
        Dashboard
      </ListItem>
      <ListItem className="text-blue-gray-300">
        <ListItemPrefix>
          <NotebookPen className="h-5 w-5" />
        </ListItemPrefix>
        Report
      </ListItem>
      <ListItem className="text-blue-gray-300">
        <ListItemPrefix>
          <User className="h-5 w-5" />
        </ListItemPrefix>
        Barber
      </ListItem>
      <ListItem className="text-blue-gray-300">
        <ListItemPrefix>
          <Star className="h-5 w-5" />
        </ListItemPrefix>
        Review & Feedback
      </ListItem>
      <ListItem className="text-blue-gray-300">
        <ListItemPrefix>
          <ListChecks className="h-5 w-5" />
        </ListItemPrefix>
        Service
      </ListItem>
      <ListItem className="text-blue-gray-300">
        <ListItemPrefix>
          <ShoppingCart className="h-5 w-5" />
        </ListItemPrefix>
        Product
      </ListItem>
      <ListItem className="text-blue-gray-300">
        <ListItemPrefix>
          <Cog6ToothIcon className="h-5 w-5" />
        </ListItemPrefix>
        Settings
      </ListItem>
    </div>
  );
};
