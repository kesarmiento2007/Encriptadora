import { useState, createContext } from "react";
import { cifrarMensaje, decifrarMensaje } from "../services/CodeService";

type EncriptadorContextProps = {
  encriptar: boolean,
  setEncriptar: React.Dispatch<React.SetStateAction<boolean>>,
  mensajeProcesado: string,
  setMensajeProcesado: React.Dispatch<React.SetStateAction<string>>,
  cifrarMensaje: (mensaje: string) => string,
  decifrarMensaje: (mensaje: string) => string
}

type EncriptadorProviderProps = {
  children: React.ReactNode
}

export const EncriptadorContext = createContext<EncriptadorContextProps>(null!);

export const EncriptadorProvider = ({ children } : EncriptadorProviderProps) => {

  const [encriptar, setEncriptar] = useState(true);
  const [mensajeProcesado, setMensajeProcesado] = useState("");

  return (
    <EncriptadorContext.Provider 
        value={{
            encriptar,
            setEncriptar,
            mensajeProcesado,
            setMensajeProcesado,
            cifrarMensaje,
            decifrarMensaje
        }}
    >
      {children}
    </EncriptadorContext.Provider>
  )
}