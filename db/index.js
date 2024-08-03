import { PrismaClient } from '@prisma/client';

class PrismaInstance {
    static instance;

    static getInstance() {
        if (!PrismaInstance.instance) {
            if (process.env.NODE_ENV === 'production') {
                PrismaInstance.instance = new PrismaClient();
            } else {
                if (!global.prisma) {
                    global.prisma = new PrismaClient();
                }
                PrismaInstance.instance = global.prisma;
            }
        }
        return PrismaInstance.instance;
    }
}

export default PrismaInstance.getInstance();