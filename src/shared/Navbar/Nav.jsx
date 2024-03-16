import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
   
  function NavList() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link to={'/'} className="flex items-center hover:text-blue-500 transition-colors">
            Home
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link to={'/petlisting'} className="flex items-center hover:text-blue-500 transition-colors">
            Pet Listing
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link to={'/donationcampaign'} className="flex items-center hover:text-blue-500 transition-colors">
            Donation Campaign
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link to={'/login'} className="flex items-center hover:text-blue-500 transition-colors">
            Login
          </Link>
        </Typography>
      </ul>
    );
  }
   
  export function NavbarSimple() {
    const [openNav, setOpenNav] = useState(false);
   
    const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false);
   
    useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
   
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
   
    return (
      <nav className="border-b-2  border-red-600 py-3">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            className="mr-4 cursor-pointer py-1.5"
          >
            <Link to={'/'}>
            
            <img src="" alt="logo" />
            </Link>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </nav>
    );
  }