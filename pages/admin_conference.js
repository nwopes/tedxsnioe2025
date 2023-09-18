import { findPayments } from "../services/paymentServer"
import '../styles/routes/admin.scss'

export default function AdminConference({ payments }) {
    let srNo = 1;
    return (
        <>
            <div className="AdminMainContainer">
                <p className="AdminMainContainer__title">Conference Single Ticket</p>
                <table className="bordered-table">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Delegate Kit Assigned</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => {
                            if (payment["paymentVerified"]) {
                                return (
                                    payment['noOfPeople'] == 1 ?
                                        <tr key={index} className="AdminMainContainer__details">
                                            <td>{srNo++}</td>
                                            <td>{payment["name1"]}</td>
                                            <td>{payment["email1"]}</td>
                                            <td>{payment["phone1"]}</td>
                                            <td>
                                                <button>Delegate Kit Assigned</button>
                                            </td>

                                        </tr>
                                        :
                                        <tr key={index}></tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
                <p className="AdminMainContainer__title">Conference Double Ticket</p>
                <table className="bordered-table">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name 1</th>
                            <th>Email 1</th>
                            <th>Phone Number 1</th>
                            <th>Name 2</th>
                            <th>Email 2</th>
                            <th>Phone Number 2</th>
                            <th>Delegate Kit Assigned</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => {
                            if (payment["paymentVerified"]) {
                                return (
                                    payment['noOfPeople'] == 2 ?
                                        <tr key={index} className="AdminMainContainer__details">
                                            <td>{srNo++}</td>
                                            <td>{payment["name1"]}</td>
                                            <td>{payment["email1"]}</td>
                                            <td>{payment["phone1"]}</td>
                                            <td>{payment["name2"]}</td>
                                            <td>{payment["email2"]}</td>
                                            <td>{payment["phone2"]}</td>
                                            <td>
                                                <button>Delegate Kit Assigned</button>
                                            </td>

                                        </tr>
                                        :
                                        <tr key={index}></tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const response = await findPayments();
    console.log(response)
    return {
        props: {
            payments: response,
        }
    }
}