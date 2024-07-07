import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { DialogConfirm, DialogForm } from "../../elements/dialog";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { Navigate } from "react-router-dom";
import ManageBarber from "./manageBarber";
import ManageCashier from "./ManageCashier";

const ManageStaffLayout = () => {
  const api = process.env.API;

  const [staffs, setStaffs] = useState([]);

  const [getuuid, setuuid] = useState();
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getRole, setRole] = useState("");
  const [getStatus, setStatus] = useState("");
  const [getEmployed, setEmployed] = useState("");
  const [errors, setErrors] = useState("");

  //get staff
  useEffect(() => {
    fetchStaffs();
  }, []); // Dependency array kosong berarti efek ini hanya akan dijalankan sekali

  const fetchStaffs = async () => {
    const res = await axios.get(`${api}/staff`);
    setStaffs(res.data); // Mengambil data dari properti `data`
  };

  //delete staff
  const deleteStaff = async (id) => {
    await axios.delete(`${api}/staff/${id}`);
    setOpenConfirm(!openConfirm);
    fetchStaffs();
  };

  const addStaff = async (e) => {
    const validationErrors = validate();
    setErrors(validationErrors);
    try {
      await axios.post(`${api}/staff`, {
        name: getName,
        email: getEmail,
        password: "orangsukses",
        employed: formatDate(getEmployed),
        phone_number: getPhone,
        role: getRole,
        status: getStatus,
      });
      setOpenFormAdd(!openFormAdd);
      fetchStaffs();
      // Navigate("/staff/admin")
    } catch (error) {
      setErrors(error);
    }
  };
  const editStaff = async (id) => {
    const validationErrors = validate();
    setErrors(validationErrors);
    try {
      await axios.patch(`${api}/staff/${id}`, {
        name: getName,
        email: getEmail,
        password: "orangsukses",
        employed: getEmployed,
        phone_number: getPhone,
        role: getRole,
        status: getStatus,
      });
      setOpenFormEdit(!openFormEdit);
      fetchStaffs();
    } catch (error) {
      setErrors(error);
    }
  };

  //untuk handle dialog
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const handleOpenConfirm = (uuid) => {
    setuuid(uuid);
    setOpenConfirm(!openConfirm);
  };

  const [openFormAdd, setOpenFormAdd] = React.useState(false);
  const handleOpenFormAdd = () => setOpenFormAdd(!openFormAdd);

  const [openFormEdit, setOpenFormEdit] = React.useState(false);
  const handleOpenFormEdit = (
    uuid,
    name,
    email,
    phone_number,
    role,
    status,
    employed
  ) => {
    setuuid(uuid);
    setName(name);
    setEmail(email);
    setPhone(phone_number);
    setRole(role);
    setStatus(status);
    setEmployed(employed);
    setOpenFormEdit(!openFormEdit);
  };

  // Fungsi untuk memvalidasi form
  const validate = () => {
    const errors = {};

    // Validasi email
    if (!getName) {
      errors.getName = "Name is required";
    }

    if (!getEmail) {
      errors.getEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(getEmail)) {
      errors.getEmail = "Email address is invalid";
    }
    if (!getPhone) {
      errors.getPhone = "phone is required";
    } else if (getPhone.length < 8 || getPhone.length > 13) {
      errors.getPhone = "nomer hp harus lebih dari 8-13 digit";
    }

    // Validasi password
    if (!getPassword) {
      errors.getPassword = "Password is required";
    } else if (getPassword.length < 6) {
      errors.getPassword = "Password must be at least 6 characters";
    }
    if (!getEmployed) {
      errors.getEmployed = "Employed is required";
    }
    if (!getStatus) {
      errors.getStatus = "status is required";
    }
    if (!getRole) {
      errors.getRole = "role is required";
    }

    return errors;
  };

  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Monitored",
      value: "monitored",
    },
    {
      label: "Unmonitored",
      value: "unmonitored",
    },
  ];

  let inputProps = {
    // placeholder: 'Employed',
    className:
      "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900",
  };

  const handleChange = (date) => {
    setEmployed(date);
  };
  const TABLE_HEAD = ["Staff", "Role", "Status", "Employed", ""];
  const [roles] = useState(["admin", "manager", "barber", "cashier"]);
  const [status] = useState(["available", "unvailable"]);

  function formatDate(inputDate) {
    // Membuat objek Date dari string input
    let dateObj = new Date(inputDate.toDate());

    // Mendapatkan tahun, bulan, dan hari
    let year = dateObj.getFullYear();
    let month = (dateObj.getMonth() + 1).toString().padStart(2, "0"); // getMonth() dimulai dari 0
    let day = dateObj.getDate().toString().padStart(2, "0");

    // Menggabungkan menjadi format YYYY-MM-DD
    let formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-7">
        <div className="h-full w-full md:w-3/4  bg-white dark:bg-slate_900  rounded-lg">
          {/* manage all staff */}
          <Card className="h-full w-full static z-20">
            <CardHeader
              floated={false}
              shadow={false}
              className="rounded-none static px-4 py-4"
            >
              <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Staff list
                  </Typography>
                  <Typography color="gray" className="mt-1 font-normal">
                    See information about all staffs
                  </Typography>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                  <Button
                    className="flex items-center gap-3"
                    size="sm"
                    onClick={handleOpenFormAdd}
                  >
                    <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add
                    staff
                  </Button>

                  <DialogForm
                    open={openFormAdd}
                    title="Add Staff"
                    btnName="Submit"
                    handleOpen={handleOpenFormAdd}
                    confirm={addStaff}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3">
                      <div className="relative">
                        <Input
                          variant="Outlined"
                          type="text"
                          label="Nama"
                          value={getName}
                          onChange={(e) => setName(e.target.value)}
                        />
                        {errors.getName && (
                          <p className="text-red-500 text-sm">
                            {errors.getName}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <Input
                          variant="Outlined"
                          type="email"
                          label="Email"
                          value={getEmail}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.getEmail && (
                          <p className="text-red-500 text-sm">
                            {errors.getEmail}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <Input
                          disabled
                          variant="Outlined"
                          type="password"
                          label="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* {errors.password && (
                          <p className="text-red-500 text-sm">{errors.password}</p>
                        )} */}
                      </div>
                      <div className="relative">
                        <Input
                          variant="Outlined"
                          type="number"
                          label="Nomer HP"
                          value={getPhone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        {errors.getPhone && (
                          <p className="text-red-500 text-sm">
                            {errors.getPhone}
                          </p>
                        )}
                      </div>
                      <div class="relative">
                        <select
                          onChange={(e) => setRole(e.target.value)}
                          class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        >
                          <option>Pilih</option>
                          {roles.map((role, index) => (
                            <option key={index} value={role}>
                              {role.charAt(0).toUpperCase() + role.slice(1)}
                            </option>
                          ))}
                        </select>
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Role
                        </label>
                        {errors.getRole && (
                          <p className="text-red-500 text-sm">
                            {errors.getRole}
                          </p>
                        )}
                      </div>
                      <div class="relative">
                        <select
                          onChange={(e) => setStatus(e.target.value)}
                          class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        >
                          <option>Pilih</option>
                          {status.map((state, index) => (
                            <option key={index} value={state}>
                              {state.charAt(0).toUpperCase() + state.slice(1)}
                            </option>
                          ))}
                        </select>
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Status
                        </label>
                        {errors.getStatus && (
                          <p className="text-red-500 text-sm">
                            {errors.getStatus}
                          </p>
                        )}
                      </div>
                      <div class="relative">
                        <Datetime
                          dateFormat="DD-MM-YYYY"
                          timeFormat={false}
                          inputProps={inputProps}
                          // onChange={(e) => setEmployed(e.target.value)}
                          onChange={handleChange}
                        />
                        <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                          Employed
                        </label>
                        {errors.getEmployed && (
                          <p className="text-red-500 text-sm">
                            {errors.getEmployed}
                          </p>
                        )}
                      </div>
                    </div>
                  </DialogForm>
                </div>
              </div>
              <div className="flex flex-col static items-center justify-between gap-4 md:flex-row">
                <Tabs value="all" className="w-full md:w-max static z-0">
                  <TabsHeader>
                    {TABS.map(({ label, value }) => (
                      <Tab key={value} value={value}>
                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                      </Tab>
                    ))}
                  </TabsHeader>
                </Tabs>
                <div className="w-full md:w-72">
                  <Input
                    label="Search"
                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  />
                </div>
              </div>
            </CardHeader>
            <CardBody className=" overflow-scroll px-4 static z-0">
              <table className="mt-4 w-full min-w-max table-auto text-left border-2">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head, index) => (
                      <th
                        key={head}
                        className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                        >
                          {head}{" "}
                          {index !== TABLE_HEAD.length - 1 && (
                            <ChevronUpDownIcon
                              strokeWidth={2}
                              className="h-4 w-4"
                            />
                          )}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {staffs.map(
                    (
                      {
                        name,
                        email,
                        phone_number,
                        role,
                        status,
                        employed,
                        uuid,
                      },
                      index
                    ) => {
                      const isLast = index === staffs.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={name}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              {/* <Avatar src={img} alt={name} size="sm" /> */}
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {name}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal opacity-70"
                                >
                                  {email}
                                </Typography>
                              </div>
                            </div>
                          </td>
                          <td className={classes}>
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {role}
                              </Typography>
                            </div>
                          </td>
                          <td className={classes}>
                            <div className="w-max">
                              <Chip
                                variant="ghost"
                                size="sm"
                                value={status}
                                color={
                                  status == "available" ? "green" : "blue-gray"
                                }
                              />
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {employed}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Tooltip content="Edit User">
                              <IconButton
                                variant="text"
                                onClick={() =>
                                  handleOpenFormEdit(
                                    uuid,
                                    name,
                                    email,
                                    phone_number,
                                    role,
                                    status,
                                    employed
                                  )
                                }
                              >
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>

                            <Tooltip content="Delete User">
                              <IconButton
                                variant="text"
                                onClick={() => handleOpenConfirm(uuid, email)}
                              >
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
              <DialogForm
                size="md"
                open={openFormEdit}
                title="Edit Staff"
                btnName="Update"
                handleOpen={handleOpenFormEdit}
                confirm={() => editStaff(getuuid)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3">
                  <div className="relative">
                    <Input
                      variant="Outlined"
                      type="text"
                      label="Nama"
                      value={getName}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.getName && (
                      <p className="text-red-500 text-sm">{errors.getName}</p>
                    )}
                  </div>
                  <div className="relative">
                    <Input
                      variant="Outlined"
                      type="email"
                      label="Email"
                      value={getEmail}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.getEmail && (
                      <p className="text-red-500 text-sm">{errors.getEmail}</p>
                    )}
                  </div>
                  <div className="relative">
                    <Input
                      disabled
                      variant="Outlined"
                      type="password"
                      label="Password"
                    />
                  </div>
                  <div className="relative">
                    <Input
                      variant="Outlined"
                      type="number"
                      label="Nomer HP"
                      value={getPhone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.getPhone && (
                      <p className="text-red-500 text-sm">{errors.getPhone}</p>
                    )}
                  </div>
                  <div class="relative">
                    <select
                      onChange={(e) => setRole(e.target.value)}
                      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    >
                      <option>Pilih</option>
                      {roles.map((role, index) => (
                        <option key={index} value={role}>
                          {role.charAt(0).toUpperCase() + role.slice(1)}
                        </option>
                      ))}
                    </select>
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Role
                    </label>
                    {errors.getRole && (
                      <p className="text-red-500 text-sm">{errors.getRole}</p>
                    )}
                  </div>
                  <div class="relative">
                    <select
                      onChange={(e) => setStatus(e.target.value)}
                      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    >
                      <option>Pilih</option>
                      {status.map((state, index) => (
                        <option key={index} value={state}>
                          {state.charAt(0).toUpperCase() + state.slice(1)}
                        </option>
                      ))}
                    </select>
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Status
                    </label>
                    {errors.getStatus && (
                      <p className="text-red-500 text-sm">{errors.getStatus}</p>
                    )}
                  </div>
                  <div class="relative">
                    <Datetime
                      dateFormat="DD-MM-YYYY"
                      timeFormat={false}
                      inputProps={inputProps}
                      value={getEmployed}
                      // onChange={(e) => setEmployed(e.target.value)}
                      onChange={handleChange}
                    />
                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Employed
                    </label>
                    {errors.getEmployed && (
                      <p className="text-red-500 text-sm">
                        {errors.getEmployed}
                      </p>
                    )}
                  </div>
                </div>
              </DialogForm>
              <DialogConfirm
                open={openConfirm}
                title="Apakah kamu yakin delete?"
                handleOpen={handleOpenConfirm}
                confirm={() => deleteStaff(getuuid)}
              />
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                Page 1 of 10
              </Typography>
              <div className="flex gap-2">
                <Button variant="outlined" size="sm">
                  Previous
                </Button>
                <Button variant="outlined" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="h-20 w-full md:w-1/5  bg-white dark:bg-slate_900  rounded-lg">
        </div>
        <div className="h-80 rounded-lg w-full  md:w-5/12">
          <ManageBarber />
        </div>
        <div className="h-80 rounded-lg w-full  md:w-5/12">
          <ManageCashier />
        </div>
      </div>
    </div>
  );
};

export default ManageStaffLayout;
