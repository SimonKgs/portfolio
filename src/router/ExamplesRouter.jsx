import { Navigate, Route, Routes } from "react-router-dom"
import { Examples, BlackJack, Calculadora, TresRaya } from "../pages"
import { Calendario } from "../pages/Examples/Calendario"

export const ExamplesRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Examples />}/>
            <Route path="/blackjack" element={<BlackJack />}/>
            <Route path="/calculadora" element={<Calculadora />}/>
            <Route path="/tresenraya" element={<TresRaya />}/>
            <Route path="/calendario" element={<Calendario />}/>
            <Route path="/*" element={<Navigate to={"/ejemplos"} />} />
        </Routes>
    
    </>
  )
}