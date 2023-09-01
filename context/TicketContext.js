import { createContext, useEffect, useState } from "react";

export const TicketContext = createContext({})

export function TicketProvider({children, ...props}) {
    const [noOfPeople, setNoOfPeople] = useState(true);
    const [ticketPrice,setTicketPrice]=useState(0);
    const [snu, setSnu] = useState(true);
    const ticket = {
        noOfPeople,
        setNoOfPeople,
        ticketPrice,
        setTicketPrice,
        snu,
        setSnu,
        ...props
    }

    return <TicketContext.Provider value={ticket}>{children}</TicketContext.Provider>
}