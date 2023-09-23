import nodemailer from "nodemailer";
import { FinalTicketTemplate } from "../../public/Templates/FinalTicket";

async function SendFinalTicket(req, res) {
    const body = await req.body;
    let emailList = [];
    let nameList = [];

    if (body.email1 !== '') {
        emailList.push(body.email1);
        nameList.push(body.name1); // Add the corresponding name
    }

    if (body.email2 !== '') {
        emailList.push(body.email2);
        nameList.push(body.name2); // Add the corresponding name
    }

    try {
        await sendConfirmationMails(emailList, nameList); // Pass both email and name lists
        res.send({ status: 200, message: "Emails sent successfully" });
    } catch (e) {
        console.log(e);
        res.send({ status: 500, message: "Emails sent successfully" });
    }
}

async function sendConfirmationMails(emailList, nameList) {
    // Create a transporter instance outside the loop
    let transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        from: 'tedx.club@snu.edu.in',
        auth: {
            user: "tedx.club@snu.edu.in",
            pass: process.env.GMAIL_PASS,
        },
        secure: true,
    });

    // Iterate through the emailList and send personalized emails
    for (let i = 0; i < emailList.length; i++) {
        const email = emailList[i];
        const name = nameList[i];
        console.log(email, name);
        var mailOptions = {
            to: email,
            from: 'TEDxShivNadarIoE <tedx.club@snu.edu.in>',
            subject: `TEDxSNU | Ticket Confirmation | Conference’23 Attendee Itinerary`,
            html: FinalTicketTemplate(name), // Pass the name as a parameter to your template function
            attachments: [
                {
                    filename: 'tedx_ticket.png',
                    path: '/Images/tedx_ticket.png',
                    cid: 'tedx@unique'
                },
                {
                    filename: 'tedx.png',
                    path: '/Images/tedx.png',
                    cid: 'tedx@uniqueIt'
                },
            ]
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            }
        });
    }
}

export default SendFinalTicket;
