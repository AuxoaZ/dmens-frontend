import React, { Children } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogBody
} from "@material-tailwind/react";

export const DialogConfirm = ({ open, title, handleOpen, confirm }) => {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size={"xs"}
      className="dark:bg-slate_900"
    >
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
    </Dialog>
  );
};

export const DialogForm = ({ size, open, title, children,handleOpen, confirm, btnName }) => {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size={size}
      className="dark:bg-slate_900"
    >
      <DialogHeader className=" text-lg dark:text-blue-gray-400">
        {title}
      </DialogHeader>
      <DialogBody>
        {children}
      </DialogBody>
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
          <span>{btnName}</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
