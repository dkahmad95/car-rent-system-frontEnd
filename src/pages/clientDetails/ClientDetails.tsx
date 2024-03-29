import Hero from "../../ui/sharedComponents/Hero";

import ClientDocs from "../../ui/clientDetailsPage/ClientDocs";
import ClientInfo from "../../ui/clientDetailsPage/ClientInfo";
import ClientRentForm from "../../ui/clientDetailsPage/ClientRentForm";


import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getClientDetails } from "../../redux/apiCalls/ClientDetailsApi";

const ClientDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const clientId = location.pathname.split("/")[2];
  useEffect(() => {
    getClientDetails(dispatch, clientId);
  }, [dispatch]);

  const client: any = useSelector(
    (state: RootState) => state.clientDetails.clientDetails
  );

  const { clientDetails } = client;
  console.log(clientDetails);
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
        <div className="lg:w-1/2 mb-6 flex flex-col gap-8 lg:gap-16">
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
        <div className="lg:w-1/2">
          <ClientRentForm />
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
