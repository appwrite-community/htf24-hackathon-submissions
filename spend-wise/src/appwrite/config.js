import { Client, Databases, ID, Query } from "appwrite";
import env_import from "../env_import/env_import";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(env_import.appwriteUrl)
      .setProject(env_import.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async newTransaction({ title, note, amount, flow, userId }) {
    try {
      const transaction = await this.databases.createDocument(
        env_import.appwriteDatabaseId,
        env_import.appwriteCollectionId,
        ID.unique(),
        {
          title,
          note,
          amount,
          flow,
          userId,
        }
      );
      return transaction;
    } catch (error) {
      console.log(error);
    }
  }

  async updateTransaction({ title, note, amount, flow, id }) {
    try {
      return await this.databases.updateDocument(
        env_import.appwriteDatabaseId,
        env_import.appwriteCollectionId,
        id,
        {
          title,
          note,
          amount,
          flow,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async deleteTransaction(id) {
    try {
      await this.databases.deleteDocument(
        env_import.appwriteDatabaseId,
        env_import.appwriteCollectionId,
        id
      );
      return true;
    } catch (error) {
      console.log(error);
    }
    return false;
  }

  async listTransactions() {
    try {
      return await this.databases.listDocuments(
        env_import.appwriteDatabaseId,
        env_import.appwriteCollectionId
        // [Query.orderAsc('')]
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  async getTransaction(id) {
    try {
      return await this.databases.getDocument(
        env_import.appwriteDatabaseId,
        env_import.appwriteCollectionId,
        id
      );
    } catch (error) {
      console.log(error);
    }
  }

  async sumIncome(id) {
    try {
      const allTransactions = await this.databases.listDocuments(
        env_import.appwriteDatabaseId,
        env_import.appwriteCollectionId
      );
      const transactions = allTransactions.documents;
      return transactions
        .filter(
          (transaction) =>
            transaction.userId === id && transaction.flow === "Income"
        )
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    } catch (error) {
      console.log(error);
    }
  }

  async sumExpense(id) {
    try {
      const allTransactions = await this.databases.listDocuments(
        env_import.appwriteDatabaseId,
        env_import.appwriteCollectionId
      );
      const transactions = allTransactions.documents;
      return transactions
        .filter(
          (transaction) =>
            transaction.userId === id && transaction.flow === "Expense"
        )
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    } catch (error) {
      console.log(error);
    }
  }

  async sumLoan(id) {
    try {
      const allTransactions = await this.databases.listDocuments(
        env_import.appwriteDatabaseId,
        env_import.appwriteCollectionId
      );
      const transactions = allTransactions.documents;
      return transactions
        .filter(
          (transaction) =>
            transaction.userId === id && transaction.flow === "Loan"
        )
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    } catch (error) {
      console.log(error);
    }
  }

  async sumInvestment(id) {
    try {
      const allTransactions = await this.databases.listDocuments(
        env_import.appwriteDatabaseId,
        env_import.appwriteCollectionId
      );
      const transactions = allTransactions.documents;
      return transactions
        .filter(
          (transaction) =>
            transaction.userId === id && transaction.flow === "Investment"
        )
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    } catch (error) {
      console.log(error);
    }
  }
}

const service = new Service();

export default service;
