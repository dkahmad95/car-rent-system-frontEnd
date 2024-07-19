import React from "react";
import { formatDateToLocal } from "../../lib/utils";

interface Props {
  phone: string;
  hasRented: boolean;
  sponsor_name?: string | null;
  sponsor_number?: string | null;
  address: string;
  renting_start_date: string;
  renting_end_date: string;
}

const ClientInfo: React.FC<Props> = ({
  phone,
  hasRented,
  sponsor_name,
  sponsor_number,
  address,
  renting_start_date,
  renting_end_date,
}) => {
  return (
    <div className="flex justify-center items-center flex-col p-4   ">
      <div className="w-[350px] flex flex-col gap-3 p-4 border-2 rounded-xl ">
        {/* phone and status */}
        <div className="flex flex-row justify-between items-center ">
          {/* phone */}
          <div className="flex flex-row gap-2">
            <span>
              <b>Phone:</b>
            </span>
            <span>{phone}</span>
          </div>
          {/* status */}
          <div className="flex flex-row gap-2">
            <span>
              <b>Renting?</b>
            </span>
            <span>{hasRented ? "Yes" : "No"}</span>
          </div>
        </div>{" "}
        {hasRented && (
          <div className="flex flex-row justify-between border-t gap-2">
            <span>
              <b>Start:</b> {formatDateToLocal(renting_start_date)}
            </span>
            <span>
              <b>End:</b> {formatDateToLocal(renting_end_date)}
            </span>
          </div>
        )}
        {/* sponsord Info */}
        <div className="flex justify-between flex-row  border-t">
          {/* has sponsor */}
          <div className="flex flex-col">
            <span>
              <b>Sponser?</b>
            </span>
            <span>{sponsor_name ? "Yes" : "No"}</span>
          </div>
          {sponsor_name && (
            <>
              {/* sponsor name */}
              <div className="flex flex-col">
                <span>
                  <b>Name:</b>
                </span>
                <span>{sponsor_name}</span>
              </div>
              {/* sponsor number */}
              <div className="flex flex-col">
                <span>
                  <b>Number:</b>
                </span>
                <span>{sponsor_number}</span>
              </div>
            </>
          )}
        </div>
        {/* address */}
        <div className="flex flex-col justify-center items-center border-t">
          <span>
            <b>Address</b>
          </span>
          <span>{address}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
