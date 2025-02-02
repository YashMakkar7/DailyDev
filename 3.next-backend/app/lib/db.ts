import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global { // ts types declaration
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}
//             when this not exist   then run this line of code this is work of ??
const prisma = globalThis.prisma ?? prismaClientSingleton () // give global variable jisse sab ue kar pae 
//             window.prisma for frontend

// first time this logic run then globalThis.prisma is undefined so new prisma client created 
// this file run again and again then new client nahi banega due to logic in line no 17 

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

export default prisma