import SaludoHijo from "./SaludoHijo";

function SaludoPadre() {
    //NECESITAMOS UN METODO PARA QUE EL HIJO
    //SE COMUNIQUEN CON NOSOTROS
    const metodoPadre = (nombre) => {
        console.log("Yo soy tu padre, " + nombre);
    }

    return (<div>
        <h1>Saludo padre</h1>
        {/* ENVIAMOS A LOS HIJOS EL METODO PARA QUE 
        PUEDA UTILIZAR EL PARENT */}
        <SaludoHijo idhijo="1" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo="2" metodoPadre={metodoPadre}/>
    </div>)
}

export default SaludoPadre;