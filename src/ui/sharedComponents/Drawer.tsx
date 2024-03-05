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
        <img className="w-48 mb-10" src="public\assets\carRentLogo.jpg" alt="" />
        <div className="flex justify-center items-center">
          <NavLinks />
        </div>
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
