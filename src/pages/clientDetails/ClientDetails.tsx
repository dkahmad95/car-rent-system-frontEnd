import Hero from "../../ui/sharedComponents/Hero";

import ClientDocs from "../../ui/clientDetailsPage/ClientDocs";
import ClientInfo from "../../ui/clientDetailsPage/ClientInfo";
import ClientRentForm from "../../ui/clientDetailsPage/ClientRentForm";


const ClientDetails = () => {
  

  const clientDetails = {
    name: "John Doe",
    phone: "123-456-7890",
    hasRented: true,
    sponsor_name: "Jane Smith",
    sponsor_number: "234-567-8901",
    address: "123 Main St, Anytown, USA",
    renting_start_date: "2023-06-01",
    renting_end_date: "2023-12-01",
    front_id_image: "https://i.pinimg.com/564x/08/05/4d/08054df84b6d41ba86670a5ac823bc8d.jpg",
    back_id_image: "https://i.pinimg.com/564x/34/52/79/34527986ed9d6ecd78f68b224d99f69f.jpg",
  };
  
  return (
    <div className="flex justify-center flex-col gap-y-6">
      {/* Client hero */}
      <Hero
        coverImage={
          "https://i.pinimg.com/564x/d6/9b/51/d69b516c86555bac8f717587d1a41e2b.jpg"
        }
        icon={"https://i.pinimg.com/736x/5a/54/cf/5a54cfdb6320b05029b8fafb6fdb5f4e.jpg"}
        title="Client Details"
        name={clientDetails?.name}
      />

      {/* cleint info and form */}
      <div className="flex justify-center flex-col  lg:flex lg:flex-row lg:justify-between ">
        {/* client Info */}
        <div className="lg:w-1/2 mb-6 flex flex-col gap-8 lg:gap-16 0">
          <ClientInfo
            phone={clientDetails.phone}
            hasRented={clientDetails.hasRented}
            sponsor_name={clientDetails.sponsor_name}
            sponsor_number={clientDetails.sponsor_number}
            address={clientDetails.address}
            renting_start_date={clientDetails.renting_start_date}
            renting_end_date={clientDetails.renting_end_date}

          />
          <ClientDocs
            front_id_image={clientDetails.front_id_image}
            back_id_image={clientDetails.back_id_image}
          />
        </div>
        {/* client rent form */}
        <div className="lg:w-1/2 mb-6">
          <ClientRentForm />
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
