import React, { useEffect, useState } from "react";
import axios from "axios";
import AsyncSelect from "react-select/async";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
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
import { DialogForm } from "../../elements/dialog";
import { TrashIcon } from "lucide-react";

const ManageCashier = () => {
  const api = process.env.API;

  const [cashiers, setCashiers] = useState([]);
  const [openFormAddCashier, setOpenFormAddCashier] = React.useState(false);
  const handleOpenFormAddCashier = () =>
    setOpenFormAddCashier(!openFormAddCashier);

  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedBarbershop, setSelectedBarbershop] = useState(null);
  //   const [errors, setErrors] = useState("");

  useEffect(() => {
    getCashiers()
  }, [])
  //fungsi untuk mengambil semua Cashiers
  const getCashiers = async () => {
    const response = await axios.get(`${api}/cashiers`);
    setCashiers(response.data);
  };

  // Fungsi untuk memuat data staff berdasarkan input
  const loadStaffOptions = (inputValue, callback) => {
    axios
      .get(`${api}/staff-cashier?name=${inputValue}`)
      .then((response) => {
        const options = response.data.map((staff) => ({
          value: staff.id,
          label: staff.name,
        }));
        callback(options);
      })
      .catch((error) => {
        console.error("There was an error fetching the staff data!", error);
      });
  };

  // Fungsi untuk memuat data barbershop berdasarkan input
  const loadBarbershopOptions = (inputValue, callback) => {
    axios
      .get(`${api}/barbershop?name=${inputValue}`)
      .then((response) => {
        const options = response.data.map((barbershop) => ({
          value: barbershop.id,
          label: barbershop.name,
        }));
        callback(options);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the barbershop data!",
          error
        );
      });
  };

  const handleSubmit = async () => {
    // console.log(selectedStaff);
    // console.log(selectedBarbershop);
    try {
      await axios.post(`${api}/cashiers`, {
        staffId: selectedStaff.value,
        barberShopId: selectedBarbershop.value,
        status: "oke",
      });
      getCashiers()
      setOpenFormAddCashier(!openFormAddCashier);
    } catch (error) {
      console.log(error);
    }
  };

  const TABLE_HEAD = ["Name", "Barbershop", ""];

  return (
    <Card className="h-full w-full">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none  px-3 py-6 mb-2"
      >
        <div className=" flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
            Daftar Kasir
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all Barbers
            </Typography>
          </div>
          <Button
            className="flex items-center gap-3"
            size="sm"
            onClick={handleOpenFormAddCashier}
          >
            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add cashier
          </Button>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-4 z-20 ">
        <table className=" w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cashiers.map((cashier, index) => {
              const isLast = index === cashiers.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={cashier.staff.name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      {/* <Avatar src={img} alt={name} size="sm" /> */}
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {cashier.staff.name}
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
                        {cashier.barbershop.name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <IconButton
                        variant="text"
                        onClick={() =>
                          handleOpenFormEdit(
                            uuid,
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
            })}
          </tbody>
        </table>
      </CardBody>
      <DialogForm
        size="sm"
        open={openFormAddCashier}
        title="Tambah barber"
        handleOpen={handleOpenFormAddCashier}
        btnName="Submit"
        confirm={handleSubmit}
      >
        <div className="px-5">
          <div className="mb-6">
            <label htmlFor="staff">Staff:</label>
            <AsyncSelect
              id="staff"
              cacheOptions
              loadOptions={loadStaffOptions}
              onChange={setSelectedStaff}
              defaultOptions
            />
          </div>
          <div>
            <label htmlFor="barbershop">Barbershop:</label>
            <AsyncSelect
              id="barbershop"
              cacheOptions
              loadOptions={loadBarbershopOptions}
              onChange={setSelectedBarbershop}
              defaultOptions
            />
          </div>
        </div>
      </DialogForm>
    </Card>
  );
};

export default ManageCashier;
