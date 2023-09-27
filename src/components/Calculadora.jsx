import React from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

class Calculadora extends React.Component{

    //En el constructor, inicializas el estado de la Calculadora con un resultado inicial de "0" y otras variables para manejar los números y operadores.
    constructor(props){
        super(props)
        this.state = {resultado: "0", op: "", num1: 0, num2: undefined}
    }

    //limpiar() es un método que se llama cuando se presiona el botón "CE". Restablece todos los valores a sus estados iniciales.
    limpiar(){
        this.setState({resultado: "0", op: "", num1: 0, num2: undefined})
    }

    //agregarNumero(num) se llama cuando se presionan los botones numéricos (0-9) o el botón ".". Agrega números o el punto decimal al resultado actual.
    agregarNumero(num){
        if(this.state.resultado === "0"){
            this.setState({resultado: num + ""})
        }else{
            this.setState({resultado: "" + this.state.resultado + num})
        }
    }

    //agregarPunto() se llama cuando se presiona el botón "." y agrega un punto decimal al resultado si no hay ya uno presente.
    agregarPunto(){
        if(this.state.resultado.indexOf(".") === -1){
            this.setState({resultado: this.state.resultado + "."})
        }
    }

    //backspace() se llama cuando se presiona el botón "<". Elimina el último carácter del resultado actual.
    backspace(){
        let nuevoValor = this.state.resultado.substring(0, this.state.resultado.length - 1)

        this.setState({resultado: (nuevoValor === "" ? "0" : nuevoValor)})
    }

    /*presionoOperador(operador) se llama cuando se presionan los operadores (+, -, *, /).
    Almacena el operador y el primer número en el estado y restablece el resultado.*/
    presionoOperador(operador){
        this.setState({op: operador, num1: Number(this.state.resultado)})
        this.setState({resultado: "0"})
    }

    /*operar() se llama cuando se presiona el botón "=" para realizar la operación.
    Obtiene el segundo número (si se ha ingresado) y realiza la operación seleccionada con el primer número y el segundo número.
    Luego, actualiza el resultado en el estado.*/
    operar(){
        let num2
        /*Esta condición compara el valor actual del resultado en el estado con el valor del primer número en el estado (convertido a una cadena).
        La comparación se realiza para determinar si se ha ingresado un segundo número distinto al primero.*/
        if(this.state.resultado !== (this.state.num1 + "")){
            /*Si la condición es verdadera, significa que se ha ingresado un segundo número diferente del primero.
            En ese caso, se asigna el valor numérico de this.state.resultado a la variable num2*/
            num2 = Number(this.state.resultado)
            this.setState({num2: Number(this.state.resultado)})
        }

        /*Esto verifica si num2 sigue siendo undefined. Esto puede suceder si no se ha ingresado 
        un segundo número y la condición anterior es falsa.*/
        if(num2 === undefined){
            num2 = this.state.num2
        }

        switch(this.state.op){
            case "+":
                this.state.num1 = this.state.num1 + num2
            break
            case "-":
                this.state.num1 = this.state.num1 - num2
            break
            case "*":
                this.state.num1 = this.state.num1 * num2
            break
            case "/":
                this.state.num1 = this.state.num1 / num2
            break
        }

        if(this.state.op !== ""){
            this.setState({resultado: this.state.num1 + ""})
        }
    }

    render(){
        return <div className="container">
            <div className="row justify-content-center pt-4">
                <div className="col-md-6">
                    <Pantalla>{this.state.resultado}</Pantalla>
                    <div className="row">
                        <Boton color="danger" col={9} evento={() => this.limpiar()}>CE</Boton>
                        <Boton color="primary" evento={() => this.backspace()}>{"<"}</Boton>
                        <Boton evento={() => this.agregarNumero(7)}>7</Boton>
                        <Boton evento={() => this.agregarNumero(8)}>8</Boton>
                        <Boton evento={() => this.agregarNumero(9)}>9</Boton>
                        <Boton color="success" evento={() => this.presionoOperador("/")}>/</Boton>
                        <Boton evento={() => this.agregarNumero(4)}>4</Boton>
                        <Boton evento={() => this.agregarNumero(5)}>5</Boton>
                        <Boton evento={() => this.agregarNumero(6)}>6</Boton>
                        <Boton color="success" evento={() => this.presionoOperador("*")}>*</Boton>
                        <Boton evento={() => this.agregarNumero(1)}>1</Boton>
                        <Boton evento={() => this.agregarNumero(2)}>2</Boton>
                        <Boton evento={() => this.agregarNumero(3)}>3</Boton>
                        <Boton color="success" evento={() => this.presionoOperador("-")}>-</Boton>
                        <Boton evento={() => this.agregarNumero(0)}>0</Boton>
                        <Boton evento={() => this.agregarPunto()}>.</Boton>
                        <Boton color="primary" evento={() => this.operar()}>=</Boton>
                        <Boton color="success" evento={() => this.presionoOperador("+")}>+</Boton>
                    </div>
                </div>
            </div>
        </div>
    }

}

export default Calculadora