import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import service from "../../appwrite/config";
import { Input, Button, Select } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { added } from "../../store/alertSlice";

const TransactionForm = ({post}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (post) {
      reset({
        title : post.title, 
        amount : post.amount, 
        note : post.note, 
        flow : post.flow})
    }
  }, [post]);

  const { register, handleSubmit, reset} = useForm();

  const submit = async (data) => {
    try {
      if (post) {
        console.log('update form data')
        const trans = await service.updateTransaction({
          ...data,
          id: post.$id,
        });
        if (trans) {
          navigate("/transactions");
        }
      } else {
        const trans = await service.newTransaction({
          ...data,
          userId: userData.$id,
        });
        if (trans) {
          navigate("/transactions");
        }
      }
      dispatch(added());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="py-20">
      <div className="addtransaction rounded-lg shadow-2xl bg-slate-200 p-5 sm:w-2/3 md:w-1/2 m-auto">
        <div className="heading flex justify-center">
          <h1 className="font-semibold text-3xl my-5">Add Transaction</h1>
        </div>
        <hr />
        <div className="form p-1 my-5">
          <form
            onSubmit={handleSubmit(submit)}
            className="px-7 mx-5 my-3 flex flex-col items-center gap-5"
          >
            <Input
              type="text"
              label="Title"
              name="title"
              placeholder="Title"
              {...register("title", {
                required: true,
              })}
            />
            <Input
              type="number"
              label="Amount"
              name="amount"
              placeholder="Amount"
              {...register("amount", {
                required: true,
                valueAsNumber: true,
              })}
            />
            <Input
              type="text"
              label="Note"
              name="note"
              placeholder="Note"
              {...register("note")}
            />
            <Select
              label="Transaction"
              name="flow"
              options={["Income", "Expense", "Investment", "Loan"]}
              {...register("flow", {
                required: true,
              })}
            />
            <Button
              className="text-white bg-blue-500 rounded-lg p-2 w-1/3 my-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              type="submit"
            >
              {post ? <p>Update</p> : <p>Add</p>}
            </Button>
          </form>
          <Button
            className="text-white bg-red-500 rounded-lg p-2 w-1/3 my-3 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
            onClick={() => navigate("/transactions")}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
