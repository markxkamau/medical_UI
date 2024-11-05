import React, { useEffect } from "react";

const RegisterUser =  (props) => {

    const {user} = props

    useEffect(()=>{
        localStorage.setItem("USER", JSON.stringify(user))
    }, [user])
}