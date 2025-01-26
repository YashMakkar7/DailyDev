import { PrismaClient } from "@prisma/client"

const client = new PrismaClient();

async function createDummyUsers() {
   await client.users.create({
        data: {
            username: "harkirasdadsat",
            age: 21,
            password: "123123",
            city: "Delhi",
            todos: {
                create: {
                    description: "Go to gym",
                    title: "Gym",
                    done: false
                }
            }
        }
    })
}

createDummyUsers()