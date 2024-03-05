import {
  BugAntIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import DashboardBox from "./DashboardBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHome } from "../../redux/apiCalls/HomeApI";
import { RootState } from "../../redux/store";
import { TOKEN, userRequest } from "../../lib/requestMethods";
import { getAllData } from "../../lib/utils";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    userRequest.defaults.headers.common["Authorization"] = `Bearer ${TOKEN()}`;// more more optimal request
    getHome(dispatch);
  }, [dispatch]);
  getAllData()

  const home = useSelector((state: RootState) => state.home.home);

  return (
    <div className=" my-10 min-w-max">
      <div className="flex justify-center items-center flex-col gap-y-4 ">
        {/* dashboard box 1*/}
        <DashboardBox
          title="Client Number"
          value={home.clientsCount}
          icon={<UserGroupIcon className="h-6 w-6 text-blue-500" />}
        />
        {/* dashboard box 2*/}
        <DashboardBox
          title="Cars Number"
          value={home.carsCount}
          icon={<BugAntIcon className="h-6 w-6 text-blue-500" />}
        />
        {/* dashboard box 3*/}
        <DashboardBox
          title="Expenses"
          value={`${"$"} ${home.expenses} `}
          icon={
            <ClipboardDocumentCheckIcon className="h-6 w-6 text-blue-500" />
          }
        />
        {/* dashboard box 4*/}
        <DashboardBox
          title="Income"
          value={`${"$"} ${home.income} `}
          icon={<CurrencyDollarIcon className="h-6 w-6 text-blue-500" />}
        />
      </div>
    </div>
  );
};

export default Dashboard;
