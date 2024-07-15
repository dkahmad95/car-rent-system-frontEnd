import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../sharedComponents/Button";
import Input from "../sharedComponents/Input";
import Select from "../sharedComponents/Select";


const ClientRentForm = () => {
  const location = useLocation();
  const clientId = location.pathname.split("/")[2];
  interface Car {
    id: number;
    name: string;
    model: string;
    image: string;
    licence_plate_number: string;
    isRented: number;
    client_name: string | null;
    starting_date: string | null;
    ending_date: string | null;
  }
  const cars:Car[] = [
    {
      id: 1,
      name: "Tesla Model S",
      model: "2022",
      image: "https://i.pinimg.com/736x/64/d4/da/64d4daec943260c734023be29a7027f1.jpg",
      licence_plate_number: "ABC123",
      isRented: 0,
      client_name: null,
      starting_date: null,
      ending_date: null
    },
    {
      id: 2,
      name: "BMW i8",
      model: "2021",
      image: "https://i.pinimg.com/564x/9b/09/91/9b0991ae263a5f9dceffb04dda0043a7.jpg",
      licence_plate_number: "XYZ789",
      isRented: 1,
      client_name: null,
      starting_date: null,
      ending_date: null
    },
    {
      id: 3,
      name: "Audi R8",
      model: "2020",
      image: "https://i.pinimg.com/736x/cf/8e/30/cf8e309adb184b8d16ce2743522b78f1.jpg",
      licence_plate_number: "LMN456",
      isRented: 0,
      client_name: null,
      starting_date: null,
      ending_date: null
    },
    {
      id: 4,
      name: "Porsche 911",
      model: "2023",
      image: "https://i.pinimg.com/564x/e4/36/a7/e436a705e3ff3165d1fc943ef0cbb629.jpg",
      licence_plate_number: "QWE123",
      isRented: 1,
      client_name: "Jane Smith",
      starting_date: "2024-07-05",
      ending_date: "2024-07-15"
    },
    {
      id: 5,
      name: "Lamborghini Huracan",
      model: "2019",
      image: "https://i.pinimg.com/564x/09/85/3a/09853a4ce0f63ed66bf0a6716acf6e02.jpg",
      licence_plate_number: "RTY789",
      isRented: 0,
      client_name: null,
      starting_date: null,
      ending_date: null
    },
    {
      id: 6,
      name: "Tesla Model S",
      model: "2022",
      image: "https://i.pinimg.com/736x/64/d4/da/64d4daec943260c734023be29a7027f1.jpg",
      licence_plate_number: "ABC123",
      isRented: 0,
      client_name: null,
      starting_date: null,
      ending_date: null
    },
    {
      id: 7,
      name: "BMW i8",
      model: "2021",
      image: "https://i.pinimg.com/564x/9b/09/91/9b0991ae263a5f9dceffb04dda0043a7.jpg",
      licence_plate_number: "XYZ789",
      isRented: 1,
      client_name: null,
      starting_date: null,
      ending_date: null
    },
    {
      id: 8,
      name: "Audi R8",
      model: "2020",
      image: "https://i.pinimg.com/736x/cf/8e/30/cf8e309adb184b8d16ce2743522b78f1.jpg",
      licence_plate_number: "LMN456",
      isRented: 0,
      client_name: null,
      starting_date: null,
      ending_date: null
    }
  ];
  
  const carsArray :Car[] = cars
  console.log(carsArray)
  
  function carIdAndNameAndNotRented({ array }: { array: Car[] }): { name: string; value: number }[] {
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
      const response = formDataToSend
      //  await userRequest.post("/newRent", formDataToSend);
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
    <div className="flex flex-col justify-center items-center mt-6 md:mt-0 ">
    
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 border rounded-xl"
        encType="multipart/form-data"
      >  <h1 className="text-l mb-4 text-center">*Rent Him A Car</h1>
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
