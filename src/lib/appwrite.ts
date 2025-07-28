import { Client, Account, Databases, Functions } from 'appwrite';

const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://[YOUR-ENDPOINT]')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '[YOUR-PROJECT-ID]');

export const appwrite = {
  client,
  account: new Account(client),
  databases: new Databases(client),
  functions: new Functions(client),
}; 