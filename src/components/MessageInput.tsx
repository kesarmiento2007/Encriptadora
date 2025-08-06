import { useEffect, useState } from "react";
import { useEncriptador } from "../hooks/useEncriptador";

export default function MessageInput() {

  const { encriptar, setMensajeProcesado, cifrarMensaje, decifrarMensaje } = useEncriptador();
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    encriptar ? setMensajeProcesado(cifrarMensaje(inputValue)) : setMensajeProcesado(decifrarMensaje(inputValue));
  }, [encriptar]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    const value = e.target.value.trim();

    encriptar ? setMensajeProcesado(cifrarMensaje(value)) : setMensajeProcesado(decifrarMensaje(value));
  };

  const handleClick = () => {
    setInputValue("");
    setMensajeProcesado("");
  }

  return (
    <div className="my-7">
      <h2 className="text-xl md:text-2xl font-bold mb-5">Mensaje de Entrada</h2>

      <textarea
        className="w-full h-30 md:h-40 p-4 border-slate-700 rounded-2xl text-gray-50 text-lg bg-gray-900 border-2 focus:outline-none focus:border-slate-500"
        placeholder="Ingresa tu mensaje aquí"
        id="input"
        value={inputValue}
        onChange={handleChange}
      />

      <div className="relative">
        <button 
          className={`w-5.5 rounded-xl transition-colors bg-gray-500 hover:bg-gray-400 absolute right-1.5 -top-40.5 cursor-pointer ${inputValue ? "block" : "hidden"}`}
          onClick={handleClick}
        >
          <img 
            src="close.svg" 
            alt="cerrarBtn" 
          />
        </button>
      </div>
    </div>
  )
}