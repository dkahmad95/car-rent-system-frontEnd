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

  const carData: any = useSelector((state: RootState) => state.carData.carData);

  return (
    <div className="flex flex-col items-center m-6">
      <Button className="mb-8" onClick={handleCarForm}>
        Add New Car
      </Button>
      {carForm && <AddCarForm onClose={handleClose} />}
      {/* list of cars */}
      <div className="flex flex-wrap justify-center gap-8">
        {carData.carData.map((car:any) => {
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
