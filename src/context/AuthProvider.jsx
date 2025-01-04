import { createContext } from "react";


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const UserInfo = {

    }
    return (
        <AuthContext.Provider>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;