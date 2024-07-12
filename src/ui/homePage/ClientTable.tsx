import {  useNavigate } from "react-router-dom";
import Button from "../sharedComponents/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { formatDateToLocal } from "../../lib/utils";
import { getClientDetails } from "../../redux/apiCalls/ClientDetailsApi";

const Table = () => {
  type Client = {
    clientName: string;
    clientNumber: string;
    client_id: number;
    created_at: string;
    rentingCount: number;
    rentingNow: boolean;
  };
  // const clients: Client[] = useSelector(
  //   (state: RootState) => state.home.home
  // ).clients;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clients: Client[] = [
    {
      clientName: "John Doe",
      clientNumber: "123-456-7890",
      client_id: 1,
      created_at: "2023-01-15T10:30:00Z",
      rentingCount: 5,
      rentingNow: true,
    },
    {
      clientName: "Jane Smith",
      clientNumber: "234-567-8901",
      client_id: 2,
      created_at: "2023-02-20T14:45:00Z",
      rentingCount: 3,
      rentingNow: false,
    },
    {
      clientName: "Alice Johnson",
      clientNumber: "345-678-9012",
      client_id: 3,
      created_at: "2023-03-10T08:00:00Z",
      rentingCount: 8,
      rentingNow: true,
    },
    {
      clientName: "Bob Brown",
      clientNumber: "456-789-0123",
      client_id: 4,
      created_at: "2023-04-25T16:20:00Z",
      rentingCount: 2,
      rentingNow: false,
    },
    {
      clientName: "Charlie Davis",
      clientNumber: "567-890-1234",
      client_id: 5,
      created_at: "2023-05-30T12:15:00Z",
      rentingCount: 6,
      rentingNow: true,
    },
  ];
  
  return (
    <div
      className="m-6 flow-root overflow-y-auto"
      style={{ maxHeight: "70vh" }}
    >
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {clients?.map((client) => (
              <div
                key={client.client_id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>
                        Name: <b>{client.clientName}</b>
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">
                      Phone:<b> {client.clientNumber}</b>
                    </p>
                  </div>

                  <p className="text-sm text-gray-500">
                    Renting Count: <b>{client.rentingCount}</b>
                  </p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-sm font-medium">
                      <b>{client.rentingNow ? "Renting" : "Not Renting"}</b>
                    </p>
                    <p> {formatDateToLocal(client.created_at)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      onClick={async () => {
                        await getClientDetails(
                          dispatch,
                          client.client_id.toString()
                        );
                        navigate("/clientDetails/" + client.client_id);
                      }}
                    >
                      More Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Phone
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Renting Count
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {clients?.map((client) => (
                <tr
                  key={client.client_id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{client.clientName}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {client.clientNumber}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {client.rentingCount}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(client.created_at)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {client.rentingNow ? "Renting" : "Not Renting"}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <Button
                        onClick={async () => {
                          await getClientDetails(
                            dispatch,
                            client.client_id.toString()
                          ),
                          navigate("/clientDetails/" + client.client_id);
                        }}
                      >
                        More Details
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
