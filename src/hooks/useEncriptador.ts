import { useContext } from "react"
import { EncriptadorContext } from "../context/EncriptadorContext"

export const useEncriptador = () => {
    const context = useContext(EncriptadorContext);

    if (!context) {
        throw new Error("useEncriptador must be used within an EncriptadorProvider");
    }

    return context;
}