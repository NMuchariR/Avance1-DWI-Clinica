import {useNavigate} from 'react-router-dom'
import {cerrarSesion} from '../auth'

function Nav({nombre, rol, titulo}) {
    const navigate = useNavigate()

    function salir() {
        cerrarSesion()
        navigate('/login')
    }

    return (
        <div className="side">
            <div className="logo">Clínica InnovaSalud</div>

            <div className="user">
                <div className="name">{nombre}</div>
                <div className="role">{rol}</div>
            </div>

            <button className="btn" onClick={salir}>Cerrar sesión</button>
        </div>
    )
}

export default Nav