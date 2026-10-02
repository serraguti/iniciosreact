function SaludoHijo(props) {
    //NECESITAMOS CAPTURAR EN UNA VARIABLE EL 
    //METODO DE PROPS DEL METODO PADRE
    let ejecutarPadre = props.metodoPadre;

    return (<div>
        <h2>Saludo hijo</h2>
        <button onClick={ () => ejecutarPadre("Luke " + props.idhijo) }>
            Llamar al parent
        </button>
    </div>)
}

export default SaludoHijo;