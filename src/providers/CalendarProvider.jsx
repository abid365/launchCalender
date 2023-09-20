import { createContext, useState } from "react";

export const CalendarContext = createContext(null);

const CalendarProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    const authInfo = {
        user,
        setUser
    }

    return (
        <CalendarContext.Provider value={authInfo}>
            {children}
            
        </CalendarContext.Provider>
    );
};

export default CalendarProvider;