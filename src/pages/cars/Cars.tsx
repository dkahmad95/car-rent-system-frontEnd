import { useEffect, useState } from "react";
import Button from "../../ui/sharedComponents/Button";
import AddCarForm from "../../ui/carPage/AddCarForm";
import MediaCard from "../../ui/carPage/Card";
import { useDispatch, useSelector } from "react-redux";
import { getCarData } from "../../redux/apiCalls/CarDataApi";
import { RootState } from "../../redux/store";

const Cars = () => {
  const [carForm, setCarForm] = useState(false);
  const handleCarForm = () => {
    setCarForm(true);
  };
  const handleClose = () => {
    setCarForm(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getCarData(dispatch);
  }, [dispatch]);

  // const carData: any = useSelector((state: RootState) => state.carData.carData);
  
  const carData = [
    {
      id: 1,
      name: "Tesla Model S",
      model: "2022",
      image: "https://i.pinimg.com/736x/64/d4/da/64d4daec943260c734023be29a7027f1.jpg",
      licence_plate_number: "ABC123",
      isRented: false,
    },
    {
      id: 2,
      name: "BMW i8",
      model: "2021",
      image: "https://i.pinimg.com/564x/9b/09/91/9b0991ae263a5f9dceffb04dda0043a7.jpg",
      licence_plate_number: "XYZ789",
      isRented: true,
    },
    {
      id: 3,
      name: "Audi R8",
      model: "2020",
      image: "https://i.pinimg.com/736x/cf/8e/30/cf8e309adb184b8d16ce2743522b78f1.jpg",
      licence_plate_number: "LMN456",
      isRented: false,
    },
    {
      id: 4,
      name: "Porsche 911",
      model: "2023",
      image: "https://i.pinimg.com/564x/e4/36/a7/e436a705e3ff3165d1fc943ef0cbb629.jpg",
      licence_plate_number: "QWE123",
      isRented: true,
    },
    {
      id: 5,
      name: "Lamborghini Huracan",
      model: "2019",
      image: "https://i.pinimg.com/564x/09/85/3a/09853a4ce0f63ed66bf0a6716acf6e02.jpg",
      licence_plate_number: "RTY789",
      isRented: false,
    },
    {
      id: 6,
      name: "Tesla Model S",
      model: "2022",
      image: "https://i.pinimg.com/736x/64/d4/da/64d4daec943260c734023be29a7027f1.jpg",
      licence_plate_number: "ABC123",
      isRented: false,
    },
    {
      id: 7,
      name: "BMW i8",
      model: "2021",
      image: "https://i.pinimg.com/564x/9b/09/91/9b0991ae263a5f9dceffb04dda0043a7.jpg",
      licence_plate_number: "XYZ789",
      isRented: true,
    },
    {
      id: 8,
      name: "Audi R8",
      model: "2020",
      image: "https://i.pinimg.com/736x/cf/8e/30/cf8e309adb184b8d16ce2743522b78f1.jpg",
      licence_plate_number: "LMN456",
      isRented: false,
    },
    {
      id: 9,
      name: "Porsche 911",
      model: "2023",
      image: "https://i.pinimg.com/564x/e4/36/a7/e436a705e3ff3165d1fc943ef0cbb629.jpg",
      licence_plate_number: "QWE123",
      isRented: true,
    },
    {
      id: 10,
      name: "Lamborghini Huracan",
      model: "2019",
      image: "https://i.pinimg.com/564x/09/85/3a/09853a4ce0f63ed66bf0a6716acf6e02.jpg",
      licence_plate_number: "RTY789",
      isRented: false,
    },
  ];

  return (
    <div className="flex flex-col items-center m-6">
      <Button className="mb-8" onClick={handleCarForm}>
        Add New Car
      </Button>
      {carForm && <AddCarForm onClose={handleClose} />}
      {/* list of cars */}
      <div className="flex flex-wrap justify-center gap-8">
        {carData.map((car:any) => {
          return <MediaCard key={car.id}
          carId={car.id}
          name={car.name}
          model={car.model}
          image={car.image}
          licence_plate_number={car.licence_plate_number}
          isRented={car.isRented} />;
        })}
      </div>
    </div>
  );
};

export default Cars;
