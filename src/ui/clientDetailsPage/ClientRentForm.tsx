import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../sharedComponents/Button";
import Input from "../sharedComponents/Input";
import Select from "../sharedComponents/Select";
import { RootState } from "../../redux/store";
import { CarData } from "../../redux/carDataRedux";
import { userRequest } from "../../lib/requestMethods";

const ClientRentForm = () => {
  const location = useLocation();
  const clientId = location.pathname.split("/")[2];

  const cars: any = useSelector((state: RootState) => state.carData.carData);
  const carsArray = cars.carData;
  console.log(carsArray)
  
  function carIdAndNameAndNotRented({ array }: { array: CarData[] }): { name: string; value: number }[] {
    return array
      .filter(car => car.isRented === 0)
      .map(({ id, name, model }) => ({
        name: `${name} ${model}`,
        value: id,
      }));
  }

  const carsOption = carIdAndNameAndNotRented({ array: carsArray });
  const [selectedCar, setSelectedCar] = useState("");
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
    video: null as File | null,
  });
  const Navigate = useNavigate();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileInputChange = (file: File | null) => {
    setFormData({
      ...formData,
      video: file,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("id", clientId);
    formDataToSend.append("car_id", selectedCar);
    formDataToSend.append("start_date", formData.start_date);
    formDataToSend.append("end_date", formData.end_date);
    if (formData.video) {
      formDataToSend.append("video", formData.video);
    }

    try {
      const response = await userRequest.post("/newRent", formDataToSend);
      if (response) {
        Navigate("/");
      } else if (!response) {
        console.error("Failed to rent car");
      }
    } catch (error) {
      console.log("Error renting car:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-8">
      <h1 className="text-l mb-4">*Rent Him A Car</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg"
        encType="multipart/form-data"
      >
        <Select
          id="car"
          name="car"
          label="Select a Car"
          required={true}
          options={carsOption}
          className="mb-4"
          onChange={(event) => setSelectedCar(event.target.value)}
        />
        <Input
          id="startRent"
          name="start_date"
          type="date"
          autoComplete="date"
          required={true}
          label="Start Rent Date"
          className="mb-4"
          onChange={handleInputChange}
        />
        <Input
          id="endRent"
          name="end_date"
          type="date"
          autoComplete="date"
          required={true}
          label="End Rent Date"
          className="mb-4"
          onChange={handleInputChange}
        />
        <Input
          id="carVideo"
          name="video"
          type="file"
          autoComplete="file"
          required={true}
          label="Car video"
          className="mb-4"
          onChange={(event) =>
            handleFileInputChange(
              event.target.files ? event.target.files[0] : null
            )
          }
        />
        <Button type="submit" className="w-full">
          Rent!
        </Button>
      </form>
    </div>
  );
};

export default ClientRentForm;
