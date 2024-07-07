import React from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import DarkMode from "../fragments/DarkMode";
import { Link } from "react-router-dom";

export function StickyNavbar({navLists, btnName}) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navLists.map((link, index) => (

      <li key= {index}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href={link.url} className="flex items-center text-gray-800 dark:text-gray-200">
          {link.label}
        </a>
      </li>
      ))}

      <DarkMode></DarkMode>
    </ul>
  );
  const mainbutton = (

    <Link to={btnName[0].url}>
       <Button
        variant="text"
        size="sm"
        className="hidden lg:inline-block bg-primary hover:bg-secondary "
      >
        <span className="text-gray-200 hover:text-gray-700">{btnName[0].label}</span>
      </Button>
      </Link>
  )


  return (
      <Navbar className=" sticky top-0 z-50 h-max max-w-full rounded-none px-4 pb-2 border-0 lg:px-8 lg:pb-4 bg-white dark:bg-dark_primary dark:bg-opacity-75">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex items-center justify-between text-blue-gray-900">
            <h1
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium text-3xl  text-gray-800 dark:text-gray-200"
            >
              D'MENS BARBERSHOP
            </h1>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                {mainbutton}
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6  text-gray-800 dark:text-gray-200"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6  text-gray-800 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm" className="bg-primary hover:bg-secondary" >
              <span>Log In</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
  );
}

export default StickyNavbar;
