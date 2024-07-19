import Input from "./Input";
import {
  BellAlertIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  Bars3Icon,
  PowerIcon,
} from "@heroicons/react/24/outline";

import TemporaryDrawer from "./Drawer";
import { useState } from "react";
import { logout } from "../../redux/userRedux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import BasicModal from "./Modal";

const Header = () => {
  const navigat = useNavigate();
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };


  const [open, setOpen] = useState(false);// for modal
  const handleLogout = () => {
    dispatch(logout());
    navigat("/login");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10 border-b-2 border-gray-200 mb-8 h-16">
      <div className="container mx-auto px-5 flex justify-between items-center h-full">
        <div>
          <button
            onClick={toggleDrawer}
            className="h-6 w-6 text-gray-600 focus:outline-none"
          >
            <Bars3Icon />
          </button>
        </div>

        {/* Logo */}

        <div className="">
          <h1 className=" text-lg md:text-3xl font-bold "><span className=" text-blue-500">Dekmak's</span> Rents.</h1>
        </div>

        {/* Search Bar */}
        {/* <div className="flex-1 flex items-center justify-center ">
          <Input
            id="search"
            name="search"
            type="search"
            autoComplete="search"
            required={true}
            placeholder="Search"
            className="w-full h-10 px-3 rounded-none text-center  "
          />
        </div> */}

        {/* Icons */}
        <div className="flex items-center gap-2">
          <BellAlertIcon className="h-6 w-6" />
          <Cog6ToothIcon className="h-6 w-6" />
          <UserCircleIcon className="h-6 w-6" />
          <BasicModal
            open={open}
            setOpen={setOpen}
            handleClick={handleLogout}
            Title={"Logout"}
            Body={"Are you sure?"}
          />
          <PowerIcon
            className="h-6 w-6 cursor-pointer"
            onClick={()=>setOpen(true)}
          />
        </div>
      </div>
      {/* Drawer */}
      <TemporaryDrawer open={drawerOpen} onClose={toggleDrawer} />
    </header>
  );
};

export default Header;
