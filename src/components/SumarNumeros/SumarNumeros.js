import batman from "./../../assets/batman.png";
import "./SumarNumeros.css"
function SumarNumeros(props) {
    const realizarSuma = (num1, num2) => {
        //let suma = num1 + num2;
        let suma = parseInt(props.numero1) + 
        parseInt(props.numero2);
        console.log("La suma de " + props.numero1 
            + " + " + props.numero2 + " =" + suma);
    }
    return (<div>
        <h1>Sumar números {props.numero1} y  {props.numero2}</h1>
        <img src={batman} className="imagen"/>
        <button onClick={ () => realizarSuma(7, 8)}>
            Sumar 7 + 8
        </button>
        <button onClick={ () => realizarSuma(75, 68)}>
            Sumar 75 + 68
        </button>
        <button onClick={ () => realizarSuma(66, 66)}>
            Sumar 66 + 66
        </button>                
    </div>);
}

export default SumarNumeros;