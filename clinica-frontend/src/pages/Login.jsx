import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {login} from '../api'
import {guardarSesion} from '../auth'
import '../css/login.css'

function Login() {
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    async function manejarLogin(e) {
        e.preventDefault()
        setError('')

        try {
            const data = await login(correo, password)
            guardarSesion(data, correo)

            if (data.rol === 'ADMINISTRADOR') {
                navigate('/admin')
            } else {
                navigate('/paciente')
            }
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="login">
            <div className="side">
                <div className="icon">+</div>
                <div className="logo">Clínica InnovaSalud</div>
                <p>Tu salud, en buenas manos. Reserva y gestiona tus citas desde un solo lugar.</p>
            </div>

            <div className="main">
                <div className="card box">
                    <h1 className="title">Iniciar sesión</h1>
                    <p className="sub">Ingresa con tu correo y contraseña</p>

                    <form className="form" onSubmit={manejarLogin}>
                        <label>Correo</label>
                        <input
                            type="email"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />

                        <label>Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {error && <p className="error">{error}</p>}

                        <button className="btn" type="submit">Iniciar sesión</button>
                    </form>

                    <Link className="link" to="/registro">¿No tienes cuenta? Crea una aquí</Link>
                </div>
            </div>
        </div>
    )
}

export default Login