import * as React from "react";
import Drawer from "@mui/material/Drawer";
import NavLinks from "./NavLinks";

interface TemporaryDrawerProps {
  open: boolean;
  onClose: (open: boolean) => void;
}

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({ open, onClose }) => {
  const toggleDrawer = (newOpen: boolean) => () => {
    onClose(newOpen);
  };

  return (
    <div>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <img className="w-48 mb-10" src="https://i.pinimg.com/564x/39/ce/27/39ce27de1a92d42bd9daa88185bb2965.jpg" alt="" />
        <div className="flex justify-center items-center">
          <NavLinks />
        </div>
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
