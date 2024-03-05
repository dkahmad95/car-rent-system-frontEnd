import { useEffect, useState } from "react";
import Button from "../../ui/sharedComponents/Button";
import Hero from "../../ui/sharedComponents/Hero";
import AccountingDash from "../../ui/accountingPage/AccountingDash";
import AccountingForm from "../../ui/accountingPage/AccountingForm";
import AccTrans from "../../ui/accountingPage/AccTrans";
import { useDispatch, useSelector } from "react-redux";
import { getAccounting } from "../../redux/apiCalls/AccountingApi";
import { RootState } from "../../redux/store";
import { AccountingData } from "../../redux/accountingRedux";

const Accounting = () => {

  const [newForm, setNewForm] = useState(false);
  const handleNewForm = () => {
    setNewForm(true);
  };
  const handleClose = () => {
    setNewForm(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getAccounting(dispatch);
  }, [dispatch]);

  const accountingData: AccountingData  = useSelector(
    (state: RootState) => state.acoounting.accounting
  );
  console.log("accountingData",accountingData)

  return (
    <div className="m-6 flex flex-col justify-center">
      {/* accounting Hero */}
      <Hero
        coverImage="public\assets\calculater.jpg"
        icon="public\assets\income&expenseIcon.jpg"
        title="Income & Expense"
      />
      {/* accountiong dashboard */}
      <AccountingDash title="Total" value={accountingData.revenue}  />
      <AccountingDash title="Income" value={accountingData.income} textColor="green" />
      <AccountingDash title="Expense" value={accountingData.outcome} textColor="red" />
      {/* accounting form  */}
      <div className="flex justify-center items-center">
        {!newForm && (
          <Button className="m-6  text-center" onClick={handleNewForm}>
            Add New Transaction
          </Button>
        )}
      </div>
      {newForm && <AccountingForm onClose={handleClose} />}
      {/* Acc transaction history */}
      <div className="flex justify-center items-center">
        <span className="text-3xl my-9">Transactions:</span>
      </div>
      <AccTrans transactions={accountingData.transactions} />
    </div>
  );
};

export default Accounting;
