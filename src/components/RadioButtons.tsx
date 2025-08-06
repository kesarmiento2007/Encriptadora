import { useEncriptador } from "../hooks/useEncriptador";

export default function RadioButtons() {

  const { setEncriptar } = useEncriptador();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.id === "cifrarRadio" ? setEncriptar(true) : setEncriptar(false);
  };

  return (
    <div className="my-8">
      <h2 className="text-xl md:text-2xl font-bold mb-5">Acción</h2>

      <form>
        <div className="flex gap-3 bg-gray-900 p-2 rounded-2xl">
          
          <label
            htmlFor="decifrarRadio"
            className="w-full py-1 md:py-2 flex justify-center rounded-lg text-gray-400 has-checked:bg-slate-950 has-checked:text-white cursor-pointer"
          >
            <input 
              type="radio" 
              name="action"
              id="decifrarRadio"
              className="opacity-0 absolute"
              onChange={handleChange}
            />
            <span className="text-xl">Desencriptar</span>
          </label>

          <label 
            htmlFor="cifrarRadio" 
            className="w-full py-1 md:py-2 flex justify-center rounded-lg text-gray-400 has-checked:bg-slate-950 has-checked:text-white cursor-pointer"
            >
              <input 
                type="radio"
                name="action"
                id="cifrarRadio"
                className="opacity-0 absolute"
                defaultChecked
                onChange={handleChange}
              />
              <span className="text-lg md:text-xl">Encriptar</span>

          </label>
        </div>

      </form>
    </div>
  )
}