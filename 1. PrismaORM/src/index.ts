import { PrismaClient } from "@prisma/client";
import express from "express";
// similar to import {mongoose} from mongoose
const client = new PrismaClient({ log: ["query"] }); // generates instance of prisma client class
const app = express();

//@ts-ignore
client.$on("query", (e) => {
    //@ts-ignore
  console.log("Query:", e.query); // Logs the raw SQL query
});

app.get("/users",async(req,res)=>{
    const users = await client.users.findMany();
    res.json({
        users
    })
})
app.get("/todos/:id",async(req,res)=>{
    const id = req.params.id as unknown as string;
    const user = await client.users.findFirst({
        where:{
            id:Number(id)
        },
        select:{
            todos:true
        }
    })
    res.json({user})
})

async function createUser() {
  await client.users.create({
    data: {
      username: "yash",
      password: "yash123",
      age: 20,
      city: "Faridabad",
    },
  });
}
async function findAndInfo() {
  const user = await client.users.findFirst({
    where: {
      id: 1,
    },
    select: {
      // only give username
      username: true,
    },
  });
  console.log(user?.username);
}
async function findAndTodos() {
  const user = await client.users.findFirst({
    where: {
      id: 1,
    },
    include: {
      todos: true,
    },
  });
  console.log(user);
}
async function deleteUser() {
  await client.users.delete({
    where: {
      id: 1,
    },
  });
}
async function updateUser() {
  await client.users.update({
    where: {
      id: 1,
    },
    data: {
      username: "yashMakkar",
    },
  });
}
async function findUser() {
  await client.users.findFirst({
    // find for all entry and findFirst for one entry
    where: {
      id: 1,
    },
  });
}


findAndTodos();

app.listen(3000,()=>{
    console.log("Server is running");
})