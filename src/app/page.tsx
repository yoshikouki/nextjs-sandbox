import { PrismaClient } from "@prisma/client";
import SessionShowcase from "./SessionShowcase";

const prisma = new PrismaClient;

export default async function Home() {
  const users = await prisma.user.findMany();
  const accounts = await prisma.account.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="m-auto">
        <h2>users count: {users.length}</h2>
        {users.map((user) => (
          <ul key={user.id}>
            <li>id: {user.id}</li>
            <li>name: {user.name}</li>
          </ul>
        ))}
      </div>

      <div className="m-auto">
        <h2>accounts count: {accounts.length}</h2>
        {accounts.map((account) => (
          <ul key={account.id}>
            <li>id: {account.id}</li>
            <li>userID: {account.userId}</li>
          </ul>
        ))}
      </div>

      <div className="m-auto">
        <SessionShowcase />
      </div>
    </main>
  );
}
