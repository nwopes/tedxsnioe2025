import db from '../lib/prisma'

export async function createPayment(data) {
    return db.payment.create({
        data,
    })
}