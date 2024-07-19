import Dashboard from "../../ui/homePage/Dashboard";
import DataTable from "../../ui/homePage/ClientTable";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="flex flex-col lg:flex-row lg:max-w-6xl justify-center items-center lg:gap-x- w-full lg:justify-around ">
        <div className="hidden my-6 h-[300px] w-[500px] lg:flex overflow-hidden ">
          <img
            className="object-cover rounded-3xl"
            src="https://i.pinimg.com/564x/39/ce/27/39ce27de1a92d42bd9daa88185bb2965.jpg"
            alt=""
          />
        </div>
        <div className="w-full lg:w-[500px]">
          <Dashboard />
        </div>
      </div>
      <div className="w-full mb-10 lg:m-15 flex flex-col">
        <span className="text-2xl font-bold text-blue-500 ">Clients:</span>
        <DataTable />
      </div>
     
    </div>
  );
};

export default Home;
