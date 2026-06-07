import { createGuess } from "../../services/paymentServer";

async function CreateGuess(req,res) {
    const body = await req.body;
    try {
        const response = await createGuess(body);
        res.send({ status: 200, message: response });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "INTERNAL SERVER ERROR" });
    }
}

export default CreateGuess;