import React, { useState, useEffect } from "react";
import service from "../appwrite/config";
import {
  Button,
  TransactionCard,
  SuccessfulAlert,
  ErrorAlert,
  AddAlert,
  Heading,
  Spinner,
  Colors,
} from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  // console.log(user.$id)
  const user = useSelector((state) => state.auth.userData);
  const alert = useSelector((state) => state.alert.alertVal);
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    service
      .listTransactions()
      .then((response) => {
        // console.log(response)
        setTransactions(response.documents);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [transactions]);

  if (!loading) {
    return (
      <div className="px-40">
        <Colors />
        <div className="my-16">
          {alert === 1 && (
            <AddAlert text="Transaction added/updated successfully" />
          )}
          {alert === 2 && (
            <SuccessfulAlert text="Transaction deleted successfully" />
          )}
          {alert === 3 && (
            <ErrorAlert text="Some error occured ...... Try again later !!!" />
          )}
        </div>
        <div>
          <Heading title="All Transactions" />
          <div className="p-5 m-5">
            <ul>
              {transactions.map(
                (transaction) =>
                  transaction.userId === user.$id && (
                    <li key={transaction.$id}>
                      {/* <li key={transaction.$id}> */}
                      <TransactionCard
                        title={transaction.title}
                        amount={transaction.amount}
                        note={transaction.note}
                        flow={transaction.flow}
                        id={transaction.$id}
                      />
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
        <div>
          <Heading title="Income" />
          <div className="p-5 m-5">
            <ul>
              {transactions.map(
                (transaction) =>
                  transaction.userId === user.$id &&
                  transaction.flow === "Income" && (
                    <li key={transaction.$id}>
                      <TransactionCard
                        title={transaction.title}
                        amount={transaction.amount}
                        note={transaction.note}
                        flow={transaction.flow}
                        id={transaction.$id}
                      />
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
        <div>
          <Heading title="Expense" />
          <div className="p-5 m-5">
            <ul>
              {transactions.map(
                (transaction) =>
                  transaction.userId === user.$id &&
                  transaction.flow === "Expense" && (
                    <li key={transaction.$id}>
                      <TransactionCard
                        title={transaction.title}
                        amount={transaction.amount}
                        note={transaction.note}
                        flow={transaction.flow}
                        id={transaction.$id}
                      />
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
        <div>
          <Heading title="Loan" />
          <div className="p-5 m-5">
            <ul>
              {transactions.map(
                (transaction) =>
                  transaction.userId === user.$id &&
                  transaction.flow === "Loan" && (
                    <li key={transaction.$id}>
                      <TransactionCard
                        title={transaction.title}
                        amount={transaction.amount}
                        note={transaction.note}
                        flow={transaction.flow}
                        id={transaction.$id}
                      />
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
        <div>
          <Heading title="Investment" />
          <div className="p-5 m-5">
            <ul>
              {transactions.map(
                (transaction) =>
                  transaction.userId === user.$id &&
                  transaction.flow === "Investment" && (
                    <li key={transaction.$id}>
                      <TransactionCard
                        title={transaction.title}
                        amount={transaction.amount}
                        note={transaction.note}
                        flow={transaction.flow}
                        id={transaction.$id}
                      />
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>

        {/* Add Transaction Button  */}
        <div className="fixed bottom-10 right-10">
          <Button
            onClick={() => navigate("/add-transaction")}
            className="rounded-full bg-blue-500 text-white w-16 h-16 size-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="h-14 w-14 m-auto"
            >
              <rect
                x="20"
                y="47.5"
                width="60"
                height="5"
                rx="2.5"
                ry="2.5"
                fill="white"
              />
              <rect
                x="47.5"
                y="20"
                width="5"
                height="60"
                rx="2.5"
                ry="2.5"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default Transactions;
