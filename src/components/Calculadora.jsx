import React from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

class Calculadora extends React.Component{

    constructor(props){
        super(props)
        this.state = {resultado: "0", op: "", num1: 0}
    }

    agregarNumero(num){
        if(this.state.resultado === "0"){
            this.setState({resultado: num + ""})
        }else{
            this.setState({resultado: "" + this.state.resultado + num})
        }
    }

    agregarPunto(){
        if(this.state.resultado.indexOf(".") === -1){
            this.setState({resultado: this.state.resultado + "."})
        }
    }

    backspace(){
        let nuevoValor = this.state.resultado.substring(0, this.state.resultado.length - 1)

        this.setState({resultado: (nuevoValor === "" ? "0" : nuevoValor)})
    }

    presionoOperador(){

    }

    render(){
        return <div>
            <Pantalla>{this.state.resultado}</Pantalla>
            <div className="row">
                <Boton col={9}>CE</Boton>
                <Boton evento={() => this.backspace()}>{"<"}</Boton>
                <Boton evento={() => this.agregarNumero(7)}>7</Boton>
                <Boton evento={() => this.agregarNumero(8)}>8</Boton>
                <Boton evento={() => this.agregarNumero(9)}>9</Boton>
                <Boton evento={() => this.presionoOperador("/")}>/</Boton>
                <Boton evento={() => this.agregarNumero(4)}>4</Boton>
                <Boton evento={() => this.agregarNumero(5)}>5</Boton>
                <Boton evento={() => this.agregarNumero(6)}>6</Boton>
                <Boton evento={() => this.presionoOperador("*")}>*</Boton>
                <Boton evento={() => this.agregarNumero(1)}>1</Boton>
                <Boton evento={() => this.agregarNumero(2)}>2</Boton>
                <Boton evento={() => this.agregarNumero(3)}>3</Boton>
                <Boton evento={() => this.presionoOperador("-")}>-</Boton>
                <Boton evento={() => this.agregarNumero(0)}>0</Boton>
                <Boton evento={() => this.agregarPunto()}>.</Boton>
                <Boton>=</Boton>
                <Boton evento={() => this.presionoOperador("+")}>+</Boton>
            </div>
        </div>
    }

}

export default Calculadora