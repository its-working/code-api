import { Client, Account, Databases } from "appwrite";

const client = new Client();

client.setEndpoint(process.env.VUE_APP_APPWRITE_ENDPOINT).setProject(process.env.VUE_APP_APPWRITE_PROJECT_ID);

export const account = new Account(client);

//Database
export const databases = new Databases(client);

client
    .setEndpoint(process.env.VUE_APP_APPWRITE_ENDPOINT) 
    .setProject(process.env.VUE_APP_APPWRITE_PROJECT_ID)
;
