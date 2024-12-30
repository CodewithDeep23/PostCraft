import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.account = new Account(this.client);
    }
    // services

    // create account
    async createAccount({email, password, name}){
        // For fail creation
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            // Check account create or not
            if(userAccount){
                // Call another method
                return this.loginAccount({email, password})
            }else return userAccount
        } catch (error) {
            throw error;
        }
    }

    // login
    async loginAccount({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password)
        }
        catch(error){
            throw error;
        }
    }

    // check account
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    // Logout
    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authservice = new AuthService()

export default authservice