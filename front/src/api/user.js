export async function connectUser(login, mdp) {
    const response = await fetch(
        'http://localhost:3000/api/user/connexion',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: login,
                password: mdp
            })
        })
    const data = await response.json()

    console.log(data)
    return Promise.resolve(data)

}
export async function inscriptionUser(login, mdp) {
    const response = await fetch(
        'http://localhost:3000/api/user/inscription',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: login,
                password: mdp
            })
        })
    const data = await response.json()

    console.log(data)
    return Promise.resolve(data)

}