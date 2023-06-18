import React, { useState } from 'react';
import { connectUser, inscriptionUser } from '../api/user';

export function useTest() {
    const [login, setLogin] = useState("")
    const [mdp, setMdp] = useState("")

    const validForm = (event) => {

        event.preventDefault()
        const submitValue = event.target.elements.submit.value;
        console.log(submitValue);

        if (submitValue === "Connexion") {
            connectUser(login, mdp).then(data => {
                alert(JSON.stringify(data))
                sessionStorage.setItem("token", data.token)
                console.log(data.token);
            }) 
        }else{
            inscriptionUser(login,mdp).then(data => {
                alert(JSON.stringify(data))
            }) 
        }
    }
    return {
        login,
        setLogin,
        mdp,
        setMdp,
        validForm
    }
}