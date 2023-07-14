import {createContext} from "react";
import {ContenedorContextObjeto} from "@/app/f_use_context/Interfaces/ContenedorContextObjeto";
import {create} from "domain";

export const ContenedorContext = createContext(
    {} as ContenedorContextObjeto
)