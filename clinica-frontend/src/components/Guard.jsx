import {Navigate} from 'react-router-dom'
import {obtenerSesion} from '../auth'

function Guard({rolPermitido, children}) {
    const sesion = obtenerSesion()

    if (!sesion) {
        return <Navigate to="/login" replace/>
    }

    if (sesion.rol !== rolPermitido) {
        return <Navigate to="/login" replace/>
    }

    return children
}

export default Guard