import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { supabase } from "../lib/supabase";
import { getUser, getProfile } from "../lib/authService";

export const authContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(undefined)
    const [userID, setUserID] = useState(null)
    const [profile, setProfile] = useState(null)
    const [username, setUsername] = useState(null)
    const [loading, setLoading] = useState(true)

    const loadUser = async () => {
        const currentUser = await getUser() // Tenta pegar o usuário
        if (!currentUser) { 
            // Se não tiver, gera informações nulas para evitar erros
            setUser(null)
            setUserID(null)
            setProfile(null)
            setUsername(null)
            setLoading(false)
            return // Sai da função
        }
        const currentID = currentUser.id
        const profiles = await getProfile(currentID)
        const currentProfile = profiles?.[0] ?? null

        setUser(currentUser)
        setUserID(currentID)
        setUsername(currentProfile?.username ?? null)
        setProfile(currentProfile)
        setLoading(false)
    }

    // Verifica mudanças
    useEffect(() => {
        loadUser()

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            // if (session?.user) {
                loadUser()
                
            /*} else {
                setUser(null)
                setUserID(null)
                setProfile(null)
                setUsername(null)
                setLoading(false)
            }*/
        })

        return () => {
            authListener?.subscription?.unsubscribe()
        }
    }, [])

    return (
        <authContext.Provider value={{ loading, user, userID, username, profile }}>
            {children}
        </authContext.Provider>
    )
}
