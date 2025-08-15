import { useEffect, useState } from "react";
import { useEncriptador } from "../hooks/useEncriptador";
import type { InputValue } from "../types";

export default function MessageInput() {

  const { encriptar, setMensajeProcesado, procesarMensaje } = useEncriptador();
  const [inputValue, setInputValue] = useState<InputValue>("");

  useEffect(() => {
    procesarMensaje( inputValue.trim() );
  }, [encriptar]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    const value = e.target.value.trim();

    procesarMensaje( value );
  };

  const handleClick = () => {
    setInputValue("");
    setMensajeProcesado("");
  }

  return (
    <div className="my-6 sm:my-7">
      <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-5">Mensaje de Entrada</h2>

      <textarea
        className="w-full h-30 sm:h-40 p-4 border-slate-700 rounded-2xl text-gray-50 text-lg sm:text-xl bg-gray-900 border-2 focus:outline-none focus:border-slate-500 resize-none"
        placeholder="Ingresa tu mensaje aquí"
        id="input"
        value={inputValue}
        onChange={handleChange}
      />

      {inputValue && (
        <div className="relative">
          <button 
            className="w-5 sm:5.5 rounded-xl transition-colors bg-gray-500 hover:bg-gray-400 absolute right-1.5 -top-30.5 sm:-top-40.5 cursor-pointer"
            onClick={handleClick}
          >
            <img 
              src="close.svg" 
              alt="cerrarBtn" 
            />
          </button>
        </div>
      )}
    </div>
  )
}