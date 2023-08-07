/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { loginUser,  logoutUser } from "../api/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

    const login = async (inputs) => {
        const res = await loginUser(inputs);
        setCurrentUser(res.data);
    }
    const logout = async (inputs) => {
        await logoutUser(inputs);    
        setCurrentUser(null);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>{children}</AuthContext.Provider>
    )
};