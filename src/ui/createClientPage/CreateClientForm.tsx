import React, { useState, ChangeEvent, FormEvent} from "react";
import Button from "../sharedComponents/Button";
import FileInput from "../sharedComponents/FileInput";
import Input from "../sharedComponents/Input";
import Radio from "../sharedComponents/Radio";
import Select from "../sharedComponents/Select";
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


  interface Sponsors {
    id: number;
    name: string;
    number: number;
    user_id: number;
    client_id: number;
    car_id: number | null;
    created_at: string;
    updated_at: string;
  }

  const sponsors:Sponsors[] = [
    {
      id: 18,
      name: "Ahmad",
      number: 987400,
      user_id: 5,
      client_id: 43,
      car_id: null,
      created_at: "2024-03-03T16:50:53.000000Z",
      updated_at: "2024-03-04T00:26:23.000000Z"
    },
    {
      id: 19,
      name: "Sara",
      number: 123456,
      user_id: 6,
      client_id: 44,
      car_id: null,
      created_at: "2024-04-01T12:30:45.000000Z",
      updated_at: "2024-04-02T09:15:10.000000Z"
    },
    {
      id: 20,
      name: "John",
      number: 654321,
      user_id: 7,
      client_id: 45,
      car_id: null,
      created_at: "2024-05-10T08:20:30.000000Z",
      updated_at: "2024-05-11T11:40:00.000000Z"
    },
    {
      id: 21,
      name: "Fatima",
      number: 789012,
      user_id: 8,
      client_id: 46,
      car_id: null,
      created_at: "2024-06-05T14:50:20.000000Z",
      updated_at: "2024-06-06T16:20:40.000000Z"
    },
    {
      id: 22,
      name: "David",
      number: 345678,
      user_id: 9,
      client_id: 47,
      car_id: null,
      created_at: "2024-07-01T10:00:00.000000Z",
      updated_at: "2024-07-02T12:30:30.000000Z"
    }
  ];
  

  const navigate = useNavigate();
  const sponsorsArray: Sponsors[] = sponsors;
  console.log('sponsorsArray',sponsorsArray)

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
     
      if(sponsors){
        navigate("/");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <form onSubmit={handleFormSubmit} className=" mb-8 border-2 p-2 flex flex-col gap-6 " >
      {/* client Info input */}
     
      <div className="">
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
    
      <div className="p-2">
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
   
      <div className="mb-8 p-2">
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
    
      <Button type="submit" className="w-full p-2">
        Add Client
      </Button>
    </form>
  );
};

export default CreateClientForm;
