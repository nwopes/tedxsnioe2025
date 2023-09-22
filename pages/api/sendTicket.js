import nodemailer from "nodemailer";
import { FinalTicketTemplate } from "../../public/Templates/FinalTicket";
async function SendFinalTicket(req, res) {
    const body = await req.body;
    let emailList = [];
    if (body.email1 !== '') {
        emailList.push(body.email1);
    }
    if (body.email2 !== '') {
        emailList.push(body.email2);
    }
    try {
        await sendConfirmationMail(emailList)
        res.send({ status: 200, message: "Emails sent successfully" });
    } catch (e) {
        console.log(e);
        res.send({ status: 500, message: "Emails sent successfully" });
    }
}

async function sendConfirmationMail(email) {
    var mailOptions = {
        to: email,
        from: 'TEDxShivNadarIoE <tedx.club@snu.edu.in>',
        subject: `TEDxShivNadarUniversity | Tickets Inside | Attendee Itinerary`,
        html: FinalTicketTemplate(),
        attachments: [
            {
                filename: 'tedx_ticket.png',
                path: '/Users/aryansethia/Desktop/tedxsnioe2023/public/Images/tedx_ticket.png',
                cid: 'tedx@unique'
            },
            {
                filename: 'tedx_it.png',
                path: '/Users/aryansethia/Desktop/tedxsnioe2023/public/Images/tedx_it.png',
                cid:'tedx@uniqueIt'
            }
        ]
    };
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

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
    });
}

export default SendFinalTicket;
