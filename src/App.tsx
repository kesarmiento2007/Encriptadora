import MessageOutput from "./components/MessageOutput";
import MessageInput from "./components/MessageInput";
import RadioButtons from "./components/RadioButtons";

function App() {

  return (
    <>
      <div className="max-w-7xl w-11/12 mx-auto">

        <h1 className="text-center text-3xl font-bold py-6">Encriptador de Mensajes</h1>

        <MessageOutput />
        <MessageInput />
        <RadioButtons />

      </div>
    </>
  )
}

export default App
