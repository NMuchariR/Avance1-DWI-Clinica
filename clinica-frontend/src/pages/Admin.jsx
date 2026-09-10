import {useEffect, useState} from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import {obtenerUsuarios} from '../api'
import {obtenerSesion} from '../auth'
import '../css/admin.css'

function Admin() {
    const sesion = obtenerSesion()
    const [usuarios, setUsuarios] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        async function cargar() {
            try {
                const data = await obtenerUsuarios(sesion.token)
                setUsuarios(data)
            } catch (err) {
                setError(err.message)
            }
        }

        cargar()
    }, [])

    return (
        <div className="dash">
            <Nav nombre={`${sesion.nombre} ${sesion.apellido}`} rol={sesion.rol}/>

            <div className="main">
                <div className="head">
                    <h1>Panel de administrador</h1>
                </div>

                <div className="grid">
                    <Card titulo="Cantidad de usuarios" valor={usuarios.length}/>
                </div>

                {error && <p className="error">{error}</p>}

                <div className="box">
                    <table>
                        <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Rol</th>
                        </tr>
                        </thead>
                        <tbody>
                        {usuarios.map((u) => (
                            <tr key={u.id}>
                                <td>{u.nombre}</td>
                                <td>{u.apellido}</td>
                                <td>{u.correo}</td>
                                <td>{u.rol}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Admin