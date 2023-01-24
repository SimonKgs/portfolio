import { Navigate, Route, Routes } from "react-router-dom"
import { Examples } from "../pages"
import { BlackJack} from "../pages/ExamplesPages/BlackJack"

export const ExamplesRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Examples />}/>
            <Route path="/blackjack" element={<BlackJack />}/>
            <Route path="/*" element={<Navigate to={"/ejemplos"} />} />
        </Routes>
    
    </>
  )
}