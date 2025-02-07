// src/config/appwrite.ts
import { Client, Account, Databases, Realtime, Storage } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://YOUR_APPWRITE_ENDPOINT/v1') // Your Appwrite Endpoint
  .setProject('YOUR_PROJECT_ID');                   // Your Appwrite Project ID

export const account = new Account(client);
export const database = new Databases(client);
export const realtime = new Realtime(client);
export const storage = new Storage(client);
