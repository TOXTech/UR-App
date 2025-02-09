import { Account, Client } from 'appwrite';

const client = new Client();
client.setEndpoint('http://localhost/v1').setProject('your-project-id');

const account = new Account(client);

export const loginUser = (email: string, password: string) => {
  return account.createSession(email, password);
};

export const signupUser = (email: string, password: string) => {
  return account.create('unique()', email, password);
};