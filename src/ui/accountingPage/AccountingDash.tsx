import React from "react";
import clsx from "clsx";

interface AccountingDashProps {
  title: string;
  value: number;
  textColor?: string;
  desc?: string;
}

const AccountingDash: React.FC<AccountingDashProps> = ({
  title,
  value,

  desc,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full lg:max-w-3xl rounded-md shadow-md bg-wight p-4 flex border-2 justify-between items-center mx-6">
        <div className="flex flex-col">
          <span
            className={clsx("font-semibold", "text-xl", {
              "text-red-600": title === "Expense",
              "text-green-600": title === "Income",
            })}
          >
            {title}
          </span>
        </div>
        <div className="font-semibold text-gray-600">{desc}</div>
        <div
          className={clsx("font-semibold", "text-xl", {
            "text-red-600": title === "Expense",
            "text-green-600": title === "Income",
          })}
        >
          ${value}
        </div>
      </div>
    </div>
  );
};

export default AccountingDash;
