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

  // const accountingData: AccountingData = useSelector(
  //   (state: RootState) => state.acoounting.accounting
  // );
  const accountingData = {
    revenue: 25,
    income: 500,
    outcome: 475,
    transactions: [
      { id: 1, trans_type: 0, trans_amount: 15, trans_desc: 'groceries' },
      { id: 2, trans_type: 1, trans_amount: 20, trans_desc: 'dining' },
      { id: 3, trans_type: 0, trans_amount: 50, trans_desc: 'salary' },
      { id: 4, trans_type: 1, trans_amount: 10, trans_desc: 'coffee' },
      { id: 5, trans_type: 0, trans_amount: 30, trans_desc: 'freelance' },
      { id: 6, trans_type: 1, trans_amount: 25, trans_desc: 'utilities' },
      { id: 7, trans_type: 0, trans_amount: 40, trans_desc: 'bonus' },
      { id: 8, trans_type: 1, trans_amount: 35, trans_desc: 'entertainment' },
      { id: 9, trans_type: 0, trans_amount: 100, trans_desc: 'project' },
    ]}
  console.log("accountingData", accountingData);

  return (
    <div className="m-6 flex flex-col justify-center">
      {/* accounting Hero */}
      <Hero
        coverImage="https://i.pinimg.com/564x/04/fd/cf/04fdcfa3e1c7e7461e536a0a2e9fdb4d.jpg"
        icon="https://i.pinimg.com/736x/58/1e/de/581ede52e2b1795ac047ec9f70b32d0e.jpg"
        title="Income & Expense"
      />
      {/* accountiong dashboard */}
      <AccountingDash title="Total" value={accountingData.revenue} />
      <AccountingDash
        title="Income"
        value={accountingData.income}
        textColor="green"
      />
      <AccountingDash
        title="Expense"
        value={accountingData.outcome}
        textColor="red"
      />
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
