import { useEffect, useState } from "react";
import { useEncriptador } from "../hooks/useEncriptador"

export default function MessageOutput() {

  const { mensajeProcesado } = useEncriptador();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [mensajeProcesado]);

  const handleClick = () => {
    navigator.clipboard.writeText(mensajeProcesado);
    setCopied(true);
  }

  return (
    <div className="my-6 sm:my-7">
      <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-5">Mensaje Procesado</h2>

      <textarea
        className="w-full h-30 sm:h-40 p-4 border-slate-700 rounded-2xl text-gray-50 text-lg sm:text-xl bg-gray-900 border-2 focus:outline-none resize-none"
        value={mensajeProcesado}
        placeholder="El mensaje procesado aparecerá aquí"
        id="output"
        readOnly
      />

      <div className="relative mb-10 sm:mb-12">
        {mensajeProcesado && !copied && (
          <button 
            className="w-5 sm:w-5.5 rounded-xs transition-colors bg-gray-400 hover:bg-gray-300 absolute right-2 cursor-pointer"
            onClick={handleClick}
          >
            <img 
              src="copy.svg" 
              alt="copiarBtn" 
            />
          </button>
        )}

        {copied && (
          <img 
              src="checkmark-circle.svg"
              alt="check" 
              className="w-5 sm:5.5 rounded-xl bg-green-400 absolute right-2"
          />
        )}
      </div>
    </div>
  )
}