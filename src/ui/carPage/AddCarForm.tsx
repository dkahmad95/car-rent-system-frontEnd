import React, { FormEvent, useState } from "react"; // Import FormEvent and useState
import Button from "../sharedComponents/Button";
import FileInput from "../sharedComponents/FileInput";
import Input from "../sharedComponents/Input";

interface AddCarFormProps {
  onClose: () => void;
}
type CarData = {
  name: string;
  licence_plate_number: string;
  model: string;
  image: File | null;
};

const AddCarForm: React.FC<AddCarFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<CarData>({
    name: "",
    licence_plate_number: "",
    model: "",
    image: null,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (file: File | null) => {
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit =async (event: FormEvent) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "image") {
        if (value) {
          formDataToSend.append("image", value);
        }
      } else {
        formDataToSend.append(key, value as string);
      }
    });
    try {
      console.log(formDataToSend)
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log("Form data:", formData);
    onClose();
  };

  return (
    <div className="flex justify-center flex-col lg:flex-row lg:gap-x-8 border-2 p-6 mb-8">
      <form onSubmit={handleSubmit}>
        <FileInput
          id="car-pic"
          name="image"
          label="Add a Car Photo"
          required={true}
          onChange={handleFileChange}
        />
        <Input
          id="car-name"
          name="name"
          type="text"
          autoComplete="text"
          required={true}
          placeholder="Car Name"
          className="h-10"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          id="car-plate"
          name="licence_plate_number"
          type="text"
          autoComplete="text"
          required={true}
          placeholder="Car Plate"
          className="h-10"
          value={formData.licence_plate_number}
          onChange={handleChange}
        />
        <Input
          id="car-model"
          name="model"
          type="number"
          autoComplete="number"
          required={true}
          value={formData.model}
          placeholder="Car Model"
          className="h-10"
          onChange={handleChange}
        />
        {/* buttons */}
        <div className="flex justify-around   lg:h-12">
          <Button type="submit" className="bg-blue-500 w-1/3">
            Add
          </Button>
          <Button className="bg-red-500 w-1/3" onClick={onClose}>
            Abort
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCarForm;
