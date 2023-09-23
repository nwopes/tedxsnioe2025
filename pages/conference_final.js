import { findPayments } from "../services/paymentServer"
import '../styles/routes/admin.scss'

export default function PME({ payments }) {
    let srNo = 1;
    let dSrNo = 1;
    return (
        <div className="AdminMainContainer">
            <p className="AdminMainContainer__title">PME</p>
            <p>Single Ticket Purches</p>
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => {
                        {
                            return (
                                payment['noOfPeople'] == 1 ?
                                    <tr key={index} className="AdminMainContainer__details">
                                        <td>{payment["name1"]}</td>

                                    </tr>
                                    :
                                    <tr key={index}></tr>
                            )
                        }
                    })}
                </tbody>
            </table>
            <p>Double Ticket Purchases</p>
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>Name 1</th>
                        <th>Name 2</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => {
                        return (
                            payment['noOfPeople'] == 1 ?
                                <tr key={index}></tr>
                                :
                                <tr key={index}>
                                    <td>{payment["name1"]}</td>
                                    <td>{payment["name2"]}</td>
                                </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export async function getServerSideProps(context) {
    const response = await findPayments();
    return {
        props: {
            payments: response,
        }
    }
}