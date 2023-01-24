import { Navigate, Route, Routes } from "react-router-dom"
import { Home, CV, About } from "../pages"
import { ExamplesRouter } from "./ExamplesRouter"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cv" element={<CV />}/>
            <Route path="/ejemplos/*" element={<ExamplesRouter />}/>
            <Route path="/about" element={<About />}/>
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    
    </>
  )
}
