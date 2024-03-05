import React from "react";
import AccountingDash from "../../ui/accountingPage/AccountingDash";
import { Transaction } from "../../redux/accountingRedux";



interface AccTransProps {
  transactions: Transaction[];
}

const AccTrans: React.FC<AccTransProps> = ({ transactions }) => {
  console.log("trans",transactions)
  return (
    <div  className="overflow-y-auto" style={{ maxHeight: "50vh" }}>
      {transactions.map((transaction, index) => (
        <AccountingDash
          key={index}
          title={transaction.trans_type === 1 ? "Income" : "Expense"}
          value={transaction.trans_amount}
          desc={transaction.trans_desc}
        />
      ))}
    </div>
  );
};

export default AccTrans;
