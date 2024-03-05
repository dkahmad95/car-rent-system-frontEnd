
import Button from "../sharedComponents/Button";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCarDetails } from "../../redux/apiCalls/CarDetaislsApi";
import { RootState } from "../../redux/store";
import { formatDateToLocal } from "../../lib/utils";
import { getCarDetailsClean } from "../../redux/carDetailsRedux";

const CarDetailsTable = () => {
  const location = useLocation();
  const carID = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    getCarDetails(dispatch, carID);

    return ()=> {getCarDetailsClean}
  }, [dispatch]);

  const carDetails: any[] = useSelector(
    (state: RootState) => state.carDetails.carDetails
  );

  return (
    <div className="m-6 flow-root">
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
              <div key={index} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <>
                    <div>
                      <div className="mb-2 flex items-center">
                        <p>
                          Client: <b>{car.client_name}</b>
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">Number:</p>
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
                    <Link to={`/${car.insurance_video}`}>
                      <Button>Video</Button>
                    </Link>
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
                    <p>
                      {car.client_name}
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  #
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
                  <Link to={`/${car.insurance_video}`}>
                      <Button>Video</Button>
                    </Link>
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
