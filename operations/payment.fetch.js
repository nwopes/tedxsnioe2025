export async function payment(formData) {
    return fetch("/api/payment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
}

export async function sendEmail(formData) {
    return await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((res) => {
        return res.json();
    });
}

export async function paymentverified(formData) {
    return fetch("/api/verifyPayment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
}

export async function emailSentRoute(formData) {
    return fetch("/api/email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
}