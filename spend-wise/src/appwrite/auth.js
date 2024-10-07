import env_import from "../env_import/env_import";

import { Client, Account, ID } from "appwrite";

export class AuthServices{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(env_import.appwriteUrl)
            .setProject(env_import.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){

        try {
            const newUser = await this.account.create(ID.unique(), email, password, name);
            if (newUser) {
                console.log("User created successfully")
                return this.login({email, password});
            }
            else{
                return newUser;
            }     
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password); 
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error)
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(error)
        }
    }
}

const authService = new AuthServices()

export default authService