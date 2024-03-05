import React from 'react';

interface Props {
  phone: string;
  hasRented: boolean;
  sponsor_name?: string | null;
  sponsor_number?: string | null;
  address: string;
}

const ClientInfo: React.FC<Props> = ({ phone, hasRented, sponsor_name, sponsor_number, address }) => {
  return (
    <div className="flex justify-center items-center flex-col mx-12">
      <div className="w-[300px]">
        {/* phone and status */}
        <div className="flex justify-between items-center flex-row mb-4">
          {/* phone */}
          <div className="flex flex-col">
            <span>
              <b>Phone</b>
            </span>
            <span>{phone}</span>
          </div>
          {/* status */}
          <div className="flex flex-col">
            <span>
              <b>Renting?</b>
            </span>
            <span>{hasRented ? 'Yes' : 'No'}</span>
          </div>
        </div>
        {/* sponsord Info */}
        <div className="flex justify-between flex-row mb-4">
          {/* has sponsor */}
          <div className="flex flex-col">
            <span>
              <b>Sponser?</b>
            </span>
            <span>{sponsor_name ? 'Yes' : 'No'}</span>
          </div>
          {sponsor_name && (
            <>
              {/* sponsor name */}
              <div className="flex flex-col">
                <span>
                  <b>Name</b>
                </span>
                <span>{sponsor_name}</span>
              </div>
              {/* sponsor number */}
              <div className="flex flex-col">
                <span>
                  <b>Number</b>
                </span>
                <span>{sponsor_number}</span>
              </div>
            </>
          )}
        </div>
        {/* address */}
        <div className="flex flex-col justify-center items-center">
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
