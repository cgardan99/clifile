// A mock function to mimic making an async request for data
export function login(payload) {
    return new Promise((resolve) =>
        setTimeout(() => resolve( {
            data: {
                user: {
                    name: 'daniel',
                },
                message: 'El usuario daniel ha iniciado sesión con éxito',
                error: null
            }
        }), 1200)
    );
}

export function logout(payload) {
    return new Promise((resolve) =>
        setTimeout(() => resolve( {
            data: {
                message: 'El usuario ha cerrado sesión con éxito.',
                error: null
            }
        }), 1200)
    );
}

