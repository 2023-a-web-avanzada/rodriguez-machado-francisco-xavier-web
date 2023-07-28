'use client'

import {io} from "socket.io-client";
import {useEffect, useState} from "react";
import {MensajeChatProps} from "@/app/k_websockets/types/mensaje-chat-props";
import {useForm} from "react-hook-form";

const servidorWebsocket = 'http://localhost:11202';
const socket = io(servidorWebsocket);
export default function Page(){
    const [isConnected, setIsConnected] = useState(socket.connect);
    const [mensajes, setMensajes] = useState([] as MensajeChatProps[]);
    const {control, register, handleSubmit, formState: {errors, isValid}} =
        useForm({
        defaultValues:{
            salaId: '',
            nombre: '',
            mensaje: '',
        },
        mode: 'all'
    })
    useEffect(
        ()=>{

        },
        []
        )
    return (
        <></>
    )
}