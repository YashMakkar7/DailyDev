import { PrismaClient } from "@prisma/client";

// similar to import {mongoose} from mongoose 

const client = new PrismaClient(); // generates instance of prisma client class

async function createUser() {
    await client.users.create({
        data:{
            username:"yash",
            password:"yash123",
            age:20,
            city:"Faridabad"
        }
    })
}
async function findAndInfo() {
    const user = await client.users.findFirst({
        where:{
            id:1,
        },
        select:{ // only give username
            username:true
        }
    })
    console.log(user?.username)
}

async function deleteUser() {
    await client.users.delete({
        where:{
            id:1
        }
    })
}
async function updateUser() {
    await client.users.update({
        where:{
            id:1
        },
        data:{
            username:"yashMakkar"
        }
    })
}
async function findUser() {
    await client.users.findFirst({ // find for all entry and findFirst for one entry 
        where:{
            id:1
        }
    })
}

createUser();
findAndInfo();