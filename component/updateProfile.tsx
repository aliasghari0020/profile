import { useSelector } from "react-redux";
import type { NextPage } from "next";
import type { Appstate } from "../store/store";
import Clases from './updateProfile.module.css'
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { TextField } from "@mui/material";
const UpdateProfile: NextPage = () => {

    const item = useSelector((state: Appstate) => state.showProfile.userInfo)
    const [formData, setFormData] = useState({});
    const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        setFormData(prevState => ({ ...prevState, [e.target.id]: e.target.value }));
        
        setFormData(e.target.value)
    }

    return (
        <div className={Clases.container}>
            <form action="" className={Clases.form}>
                <div className={Clases.field} >
                    <TextField label="User Name" defaultValue={item.username} variant="filled" fullWidth onChange={changeHandler} />
                </div>
                <div className={Clases.field}>
                    <TextField label="Full Name" defaultValue={item.fullName} variant="filled" fullWidth onChange={changeHandler} />
                </div>
                <div className={Clases.field}>
                    <TextField label="Email" defaultValue={item.email} variant="filled" fullWidth onChange={changeHandler} />
                </div>

            </form>
        </div>
    )




}
export default UpdateProfile