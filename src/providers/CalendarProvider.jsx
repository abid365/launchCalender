import { createContext, useState } from "react";

export const CalendarContext = createContext(null);

const CalendarProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    const CalendarInfo = {
        user,
        setUser
    }

    return (
        <CalendarContext.Provider value={CalendarInfo}>
            {children}
            
        </CalendarContext.Provider>
    );
};

export default CalendarProvider;