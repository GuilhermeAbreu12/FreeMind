// Registrar usuário
export const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })

    if (error) console.error(error)
    return { data, error }
}

// Login
export const signIn = async (email, password) => {
    let data, error = null;
    
    try {
        const result = await supabase.auth.signInWithPassword({
            email,
            password
        });
        data = result.data
        error = result.error // Erro conhecido só pelo Supabase? Tome.
        if (error){
            if (error.message === "Invalid login credentials"){
                console.log('Erro: E-mail ou senha inválidos')
            }
            else console.log('Erro do supabase: ', error.message)
        }
    } catch (err) {
        error = err; // Erro conhecido pelo try catch, além do supabase? Tome.
        normalizeAuthError(err)
    }
    return { data, error }
}

// Logout
export const logout = async () => {
    await supabase.auth.signOut()
}

// Usuário atual
export const getUser = async () => {
    const { data } = await supabase.auth.getUser()
    return data.user
}

// Profiles
export const createProfile = async (userId, username) => {
    const { data, error } = await supabase
        .from('profiles')
        .insert([
            {
                id: userId,
                username: username,
                created_at: new Date(),
            }
    ]);

    if (error) {
        console.error('Erro ao criar perfil: ', error.message)
    } else {
        console.log('Perfil criado: ', data)
    }
}

