import { useState, createContext } from "react";
import { cifrarMensaje, decifrarMensaje } from "../services/CodeService";
import type { Encriptar, MensajeProcesado, InputValue } from "../types";

type EncriptadorContextProps = {
  encriptar: Encriptar,
  setEncriptar: React.Dispatch<React.SetStateAction<boolean>>,
  mensajeProcesado: MensajeProcesado,
  setMensajeProcesado: React.Dispatch<React.SetStateAction<string>>,
  procesarMensaje: (value : InputValue) => void
}

type EncriptadorProviderProps = {
  children: React.ReactNode
}

export const EncriptadorContext = createContext<EncriptadorContextProps>(null!);

export const EncriptadorProvider = ({ children } : EncriptadorProviderProps) => {

  const [encriptar, setEncriptar] = useState(true);
  const [mensajeProcesado, setMensajeProcesado] = useState("");

  const procesarMensaje = (value : InputValue) => {
    setMensajeProcesado( encriptar ? cifrarMensaje(value) : decifrarMensaje(value) );
  }

  return (
    <EncriptadorContext.Provider 
        value={{
            encriptar,
            setEncriptar,
            mensajeProcesado,
            setMensajeProcesado,
            procesarMensaje
        }}
    >
      {children}
    </EncriptadorContext.Provider>
  )
}