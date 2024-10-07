import React, { useEffect, useState } from "react";
import service from "../appwrite/config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BudgetCard, Colors, Spinner } from "../components";
import GuestPage from "./GuestPage";

const Home = () => {
  const user = useSelector((state) => state.auth.userData);
  if (!user) {
    return <GuestPage />;
  }
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalLoan, setTotalLoan] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);

  const sumIncome = async (id) => {
    const income = await service.sumIncome(id);
    const expense = await service.sumExpense(id);
    const loan = await service.sumLoan(id);
    const investment = await service.sumInvestment(id);
    setTotalIncome(income);
    setTotalExpense(expense);
    setTotalLoan(loan);
    setTotalInvestment(investment);
    setLoading(false);
  };

  useEffect(() => {
    sumIncome(user.$id);
  }, [user]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="home mt-14 p-5">
        <Colors />
        <div className="welcome flex flex-col justify-center p-3">
          <h1 className="font-semibold text-2xl m-auto">
            Hello, {user.name.toUpperCase()} !
          </h1>
          <h1 className="text-lg m-auto">
            Welcome to 'Spend Wise'! Your daily money tracker to manage your
            wealth more efficiently.
          </h1>
        </div>
        <div className="finance mx-10 my-7">
          <h2 className="text-xl font-semibold">
            Here is a summary of your finances
          </h2>
        </div>
        <div className="cards grid grid-cols-2 grid-flow-row gap-10 place-items-center">
          <BudgetCard
            text="Current Balance"
            amount={totalIncome - totalExpense}
            colour="green"
          />
          <BudgetCard
            text="Balance after rebalancing Investments and Loans"
            amount={totalIncome - totalExpense}
            colour="green"
          />
          <BudgetCard text="Income" amount={totalIncome} colour="green" />
          <BudgetCard text="Expense" amount={totalExpense} colour="red" />
          <BudgetCard text="Loan" amount={totalLoan} colour="orange" />
          <BudgetCard
            text="Investment"
            amount={totalInvestment}
            colour="blue"
          />
        </div>
      </div>
    );
  }
};

export default Home;
