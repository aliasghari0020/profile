import type { NextPage } from "next";
import Classes from "./Profile.module.css"
import queryProfile from "../pages/api/get-data-profile";
import { FormEvent, useEffect, useState } from "react";
import type { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import {showResult} from '../store/sohw-profile'
const Profile: NextPage = () => {
    const dispatch:AppDispatch = useDispatch()
    const [input, setInput] = useState("")
    const clickHndler = (ev: FormEvent) => {
        ev.preventDefault();
        queryProfile(input).then(respons => {
            console.log(respons.data)
            dispatch(showResult(respons.data.profile));
        }).catch(() => {
            console.log(' error500!')
        })
    }
    return (
        <form className={Classes.profile} onSubmit={clickHndler}>
            <input type="text" className={Classes.input} value={input} onChange={event => setInput(event.currentTarget.value)} />
            <button className={Classes.button} >Accept</button>
        </form>
    )
}
export default Profile





    // useEffect(() => {
    //     queryProfile('ajfowiejfoweijfaowfijio' , 1).then(respons=>{
    //         console.log(respons)
    //     })
    // }, []);