import CreateClientForm from "../../ui/createClientPage/CreateClientForm";

const CreateClient = () => {
  return (
    <div className="flex justify-center items-center flex-col p-5">
      {/* title */}
      <div className="flex flex-col justify-center items-center mb-6 gap-y-3">
        <span className="text-3xl">Client Info</span>
        <span className="">You can add a client here!</span>
        <div className="w-full bg-gray-600 h-[1px]"></div>
      </div>
      {/* createForm */}
      <CreateClientForm />
    </div>
  );
};

export default CreateClient;
