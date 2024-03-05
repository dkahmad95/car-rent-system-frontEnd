import React, { useState } from "react";
import Button from "../sharedComponents/Button";
import Input from "../sharedComponents/Input";
import Radio from "../sharedComponents/Radio";
import { userRequest } from "../../lib/requestMethods";
import { getAccounting } from "../../redux/apiCalls/AccountingApi";
import { useDispatch } from "react-redux";

interface FormProps {
  onClose: () => void;
}

const AccountingForm: React.FC<FormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    type: "0",
    desc: "",
    amount: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData);
const dispatch = useDispatch()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("type", formData.type);
    formDataToSend.append("desc", formData.desc);
    formDataToSend.append("amount", formData.amount);
  
    try {
      await userRequest.post("/addTransaction", formDataToSend);
      console.log("Form data:", formDataToSend);
      await getAccounting(dispatch)
      onClose(); 
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center my-6">
      <div className="flex justify-center w-full">
        <form
          className="flex flex-col w-full lg:max-w-3xl p-4 border-2"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex flex-row justify-center items-center text-2xl">
            <Radio
              id="type"
              name="type"
              options={[
                { value: "0", label: "Expense" },
                { value: "1", label: "Income" },
              ]}
              required={true}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <Input
              id="desc"
              name="desc"
              type="text"
              autoComplete="text"
              required={true}
              placeholder="Description"
              className="h-10"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <Input
              id="value"
              name="amount"
              type="number"
              autoComplete="number"
              required={true}
              placeholder="Value in $"
              className="h-10"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-around">
            <Button type="submit" className="bg-green-600 w-1/3">
              Add
            </Button>
            <Button className="bg-red-600 w-1/3" onClick={onClose}>
              Abort
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountingForm;
