import { createContext, useState, useEffect } from "react";
import { getCurrentUser } from "../service/supabase";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props;

    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        const user = await getCurrentUser();
        setUser(user);
    }
    
    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <AuthContext.Provider 
            value= {{
                user,
                setUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}