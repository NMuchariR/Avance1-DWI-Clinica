import Nav from '../components/Nav'
import Card from '../components/Card'
import {obtenerSesion} from '../auth'
import '../css/admin.css'
import '../css/patient.css'

function Patient() {
    const sesion = obtenerSesion()

    return (
        <div className="dash">
            <Nav nombre={`${sesion.nombre} ${sesion.apellido}`} rol={sesion.rol}/>

            <div className="main">
                <div className="head">
                    <h1>Bienvenido, {sesion.nombre}</h1>
                </div>

                <div className="box appt">
                    <h2>Reserva tu cita médica</h2>
                    <p>Muy pronto podrás reservar tu cita</p>
                    <button className="btn" disabled>Próximamente</button>
                </div>

                <div className="grid" style={{marginTop: 24}}>
                    <Card titulo="Nombre">
                        <p>{sesion.nombre} {sesion.apellido}</p>
                    </Card>
                    <Card titulo="Correo">
                        <p>{sesion.correo}</p>
                    </Card>
                    <Card titulo="Rol">
                        <p>{sesion.rol}</p>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Patient