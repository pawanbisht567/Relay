import { prisma } from "../../db/prisma";

async function main() {
    const user = await prisma.user.create({

        data: {
          email: 'adawdwa@gmail.com',
          username: 'adawdwa',
          first_name: 'Adaw',
          last_name: 'Dwa'
        }
    
      })
    
      console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })