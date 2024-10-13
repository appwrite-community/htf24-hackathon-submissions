import { Client, Account, Databases } from "appwrite";

const client = new Client().setProject('670c225300290452f2fc')

const account = new Account(client)

const databases = new Databases(client)

export { client, account, databases }