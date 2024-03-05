import Dashboard from "../../ui/homePage/Dashboard";
import DataTable from "../../ui/homePage/ClientTable";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col mx-10">
      <div className="flex flex-col lg:flex-row lg:max-w-6xl justify-center items-center lg:gap-x- w-full lg:justify-around ">
        <div className="hidden my-6 h-[300px] w-[500px] lg:flex overflow-hidden ">
          <img
            className="object-cover rounded-3xl"
            src="public\assets\carRentLogo.jpg"
            alt=""
          />
        </div>
        <div className="w-full lg:w-[500px]">
          <Dashboard />
        </div>
      </div>
      <div className="w-full mb-10 lg:m-15 ">
        <span className="text-2xl">Clients:</span>
        <DataTable />
      </div>
     
    </div>
  );
};

export default Home;
