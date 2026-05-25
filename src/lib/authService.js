// Registrar usuário
export const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })

    if (error) console.error(error)
    return { data, error }
}

