const {PrismaClient} = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data:[
                {name: "Famous People"},
                {name: "Mucisians"},
                {name: "GAmes"},
                {name: "Animals"},
                {name: "Philosophy"},
                {name: "Scientist"},
            ]
        })
    }
    catch (error){
        console.error("Error seeding default categories",error)

    } finally {
        await db.$disconnect();
    }

}

main();