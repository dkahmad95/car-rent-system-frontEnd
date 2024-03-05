import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Button from "../sharedComponents/Button";
import FileInput from "../sharedComponents/FileInput";
import Input from "../sharedComponents/Input";
import Radio from "../sharedComponents/Radio";
import Select from "../sharedComponents/Select";
import { useDispatch, useSelector } from "react-redux";
import { getSponsors } from "../../redux/apiCalls/SponsersApi";
import { RootState } from "../../redux/store";
import { Sponsors } from "../../redux/sponsorsRedux";
import { addClient } from "../../redux/apiCalls/ClientDetailsApi";
import { useNavigate } from "react-router-dom";

export interface CreateClient {
  name: string;
  address: string;
  phone: string;
  front_id_image: File | null;
  back_id_image?: File | null;
  sponsor_status: string;
  sponsor_id?: string;
  sponsor_name?: string;
  sponsor_number?: string;
}

const CreateClientForm: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getSponsors(dispatch);
  }, [dispatch]);

  const sponsors: any = useSelector(
    (state: RootState) => state.sponsors.sponsors
  );
  const addClientError: any = useSelector(
    (state: RootState) => state.addClient.error
  );
  const navigate = useNavigate();
  const sponsorsArray: any = sponsors.sponsors;

  // function to get an array of sponsers and IDs
  function sponsorIdAndName({ array }: { array: Sponsors[] }) {
    return array.map(({ id, name }) => ({ name: name, value: id }));
  }
  const sponsoesIdAndNames = sponsorIdAndName({ array: sponsorsArray });

  const [formData, setFormData] = useState<CreateClient>({
    name: "",
    address: "",
    phone: "",
    front_id_image: null,
    back_id_image: null,
    sponsor_status: "without",
    sponsor_id: "",
    sponsor_name: "",
    sponsor_number: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileInputChange = (file: File | null, name: string) => {
    setFormData({
      ...formData,
      [name]: file,
    });
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Append the files
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "front_id_image" || key === "back_id_image") {
        
        if (value) {
          formDataToSend.append(key, value);
        }
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      await addClient(dispatch, formDataToSend);
      if(addClientError === false){
        navigate("/");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <form onSubmit={handleFormSubmit} className="mx-8 mb-8">
      {/* client Info input */}
      <div className="w-full mb-6 bg-gray-600 h-[1px]"></div>
      <div>
        <Input
          id="client-name"
          name="name"
          type="text"
          autoComplete="text"
          required={true}
          placeholder="Client Name"
          className="h-10"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Input
          id="client-phone"
          name="phone"
          type="number"
          autoComplete="number"
          required={true}
          placeholder="Client Phone"
          className="h-10"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <Input
          id="client-address"
          name="address"
          type="text"
          autoComplete="text"
          required={true}
          placeholder="Client Address"
          className="h-10"
          value={formData.address}
          onChange={handleInputChange}
        />
      </div>
      {/* Docs Input */}
      <div className="w-full mb-6 bg-gray-600 h-[1px]"></div>
      <div>
        <FileInput
          id="front-id"
          name="front_id_image"
          label="*Front ID Picture"
          required={true}
          onChange={(file) => handleFileInputChange(file, "front_id_image")}
        />
        <FileInput
          id="back-id"
          name="back_id_image"
          required={false}
          label="Back ID Picture (optional if you have passport or a driving license)"
          onChange={(file) => handleFileInputChange(file, "back_id_image")}
        />
      </div>

      {/* sponsor details */}
      <div className="w-full mb-6 bg-gray-600 h-[1px]"></div>
      <div className="mb-8">
        <Radio
          id="sponsorStatus"
          name="sponsor_status"
          label="Sponsor Details"
          options={[
            { value: "exist", label: "Have a Sponsor" },
            { value: "new", label: "New Sponsor" },
            { value: "without", label: "Without Sponsor" },
          ]}
          required={true}
          onChange={handleInputChange}
        />
        {formData.sponsor_status === "exist" && (
          <Select
            id="sponsor"
            name="sponsor_id"
            label="Select a Sponsor"
            required={true}
            options={sponsoesIdAndNames}
            className="mb-4"
            value={formData.sponsor_id}
            onChange={handleInputChange}
          />
        )}
        {formData.sponsor_status === "new" && (
          <>
            <Input
              id="sponsor-name"
              name="sponsor_name"
              type="text"
              autoComplete="text"
              required={true}
              placeholder="Sponsor Name"
              value={formData.sponsor_name}
              onChange={handleInputChange}
            />
            <Input
              id="sponsor-number"
              name="sponsor_number"
              type="number"
              autoComplete="number"
              required={true}
              placeholder="Sponsor NUmber"
              value={formData.sponsor_number}
              onChange={handleInputChange}
            />
          </>
        )}
      </div>
      {addClientError === false && (
        <span className="my-2 text-red-500">
          Error: Failed to add client. Please try again later.
        </span>
      )}
      <Button type="submit" className="w-full">
        Add Client
      </Button>
    </form>
  );
};

export default CreateClientForm;
