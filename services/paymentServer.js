import db from '../lib/prisma'

export async function createPayment(data) {
    return db.payment.create({
        data,
    })
}

export async function createGuess(data) {
    return db.guess.create({
        data,
    })
}

export async function findPayments() {
    return db.payment.findMany();
}

export async function verifyPayment(data) {
    return db.payment.update({
        where: {
            id: data.id,
        },
        data: {
            'paymentVerified': true,
        }
    })
}

export async function emailSent(data) {
    return db.payment.update({
        where: {
            id: data.id,
        },
        data: {
            'emailSent': true,
        }
    })
}

export async function ticketSent(data) {
    return db.payment.update({
        where: {
            id: data.id,
        },
        data: {
            'ticketEmail': true,
        }
    })
}

export async function deleteEntry(data) {
    return db.payment.delete({
        where: {
            id: data.id,
        },
    })
}

export async function fetchEmails(data) {
    return db.payment.findMany({
        where: {
            'paymentVerified': true,
        },
        select: {
            'email1': true,
            'email2': true,
        }
    })
}

export async function updateDelegate(data) {
    return db.payment.update({
        where: {
            'id': data.id,
        },
        data: {
            'delegateKit': true,
        }
    })
}

export async function updateDelegate2(data) {
    return db.payment.update({
        where: {
            'id': data.id,
        },
        data: {
            'delegateKit2': true,
        }
    })
}