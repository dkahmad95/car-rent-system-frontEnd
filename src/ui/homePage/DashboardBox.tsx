import { ReactNode } from "react";


interface DashboardBoxProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
}

const DashboardBox: React.FC<DashboardBoxProps> = ({ title, value, icon }) => {
  return (
    
      <div className="w-full rounded-md shadow-md bg-gray-50 flex justify-between px-5">
        <div className="flex justify-center items-start flex-col">
          <span className="font-bold text-gray-400">{title}</span>
          <span className="font-bold text-blue-500">{value}</span>
        </div>

        <div className="flex justify-center items-center">
          {icon}
        </div>
      
    </div>
  );
};

export default DashboardBox;
