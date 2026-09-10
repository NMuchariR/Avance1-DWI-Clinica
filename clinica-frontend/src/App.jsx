import {Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/Admin'
import Patient from './pages/Patient'
import Guard from './components/Guard'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Register/>}/>

            <Route
                path="/admin"
                element={
                    <Guard rolPermitido="ADMINISTRADOR">
                        <Admin/>
                    </Guard>
                }
            />

            <Route
                path="/paciente"
                element={
                    <Guard rolPermitido="PACIENTE">
                        <Patient/>
                    </Guard>
                }
            />
        </Routes>
    )
}

export default App