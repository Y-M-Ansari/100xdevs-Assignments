import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const main = async () => {
    const user = await prisma.user.create({
        data: {
            email: 'yousuf@gmail.com',
            name: 'Yousuf'
        },
    });
    console.log(user);
};
main()
    .catch((e) => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=create-user.js.map