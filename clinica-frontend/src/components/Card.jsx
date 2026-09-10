function Card({titulo, valor, children}) {
    return (
        <div className="box card">
            {titulo && <h2>{titulo}</h2>}
            {valor && <div className="big">{valor}</div>}
            {children}
        </div>
    )
}

export default Card