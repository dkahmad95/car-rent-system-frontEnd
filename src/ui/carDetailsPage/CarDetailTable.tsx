import Button from "../sharedComponents/Button";
import { formatDateToLocal } from "../../lib/utils";

const CarDetailsTable = () => {
  const carDetails = [
    {
      client_name: "John Doe",
      client_number: "123-456-7890",
      sponsor_name: "Jane Smith",
      sponsor_number: "234-567-8901",
      start_date: "2023-01-15",
      end_date: "2023-02-15",
      insurance_video: "video1",
    },
    {
      client_name: "Alice Johnson",
      client_number: "345-678-9012",
      sponsor_name: "Bob Brown",
      sponsor_number: "456-789-0123",
      start_date: "2023-03-10",
      end_date: "2023-04-10",
      insurance_video: "video2",
    },
    {
      client_name: "Charlie Davis",
      client_number: "567-890-1234",
      sponsor_name: "Dave Wilson",
      sponsor_number: "678-901-2345",
      start_date: "2023-05-01",
      end_date: "2023-06-01",
      insurance_video: "video3",
    },
    {
      client_name: "Eve Martinez",
      client_number: "789-012-3456",
      sponsor_name: "Frank Thomas",
      sponsor_number: "890-123-4567",
      start_date: "2023-07-20",
      end_date: "2023-08-20",
      insurance_video: "video4",
    },
    {
      client_name: "Grace Lee",
      client_number: "901-234-5678",
      sponsor_name: "Henry Clark",
      sponsor_number: "012-345-6789",
      start_date: "2023-09-10",
      end_date: "2023-10-10",
      insurance_video: "video5",
    },
  ];

  return (
    <div className=" h-[500px] flow-root">
      {carDetails.length === 0 ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-lg font-bold text-gray-500">No details to show</p>
        </div>
      ) : (
        <div className="inline-block min-w-full align-middle">
          <div className="inline-block min-w-full align-middle">
            <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {carDetails?.map((car, index) => (
                  <div
                    key={index}
                    className="mb-2 w-full rounded-md bg-white p-4 border-t-2 border-blue-500"
                  >
                    <div className="flex flex-col items-start justify-between border-b pb-4">
                      <>
                        <div>
                          <div className="mb-2 flex items-center">
                            <p>
                              Client: <b>{car.client_name}</b>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="mb-2 flex items-center">
                            <p>
                              Sponsor: <b>{car.sponsor_name}</b>
                            </p>
                          </div>
                          <p className="text-sm text-gray-500">
                            Number: <b>{car.sponsor_number}</b>
                          </p>
                        </div>
                      </>
                    </div>
                    <div className="flex w-full items-center justify-between pt-4 ">
                      <div>
                        <p className="text-sm font-medium mb-2">
                          Start Rent: <b>{formatDateToLocal(car.start_date)}</b>
                        </p>
                        <p className="text-sm font-medium">
                          End Rent: <b>{formatDateToLocal(car.end_date)}</b>
                        </p>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button>Video</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full text-gray-900 md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Client
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Number
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Sponsor
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Sponsor Number
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Start Date
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      End Date
                    </th>
                    <th scope="col" className="relative py-3 pl-6 pr-3">
                      <span className="sr-only">Vidoe</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {carDetails?.map((car, index) => (
                    <tr
                      key={index}
                      className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                          <p>{car.client_name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        #{car.client_number}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {car.sponsor_name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {car.sponsor_number}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {formatDateToLocal(car.start_date)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {formatDateToLocal(car.end_date)}
                      </td>
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex justify-end gap-3">
                          <Button>Video</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailsTable;
