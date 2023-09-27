import React from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

class Calculadora extends React.Component{

    constructor(props){
        super(props)
        this.state = {num1: 0}
    }

    agregarNumero(num){
        if(this.state.num1 === 0){
            this.setState({num1: num})
        }
    }

    render(){
        return <div>
            <Pantalla>{this.state.num1}</Pantalla>
            <div className="row">
                <Boton col={9}>CE</Boton>
                <Boton>{"<"}</Boton>
                <Boton>7</Boton>
                <Boton>8</Boton>
                <Boton>9</Boton>
                <Boton>/</Boton>
                <Boton>4</Boton>
                <Boton>5</Boton>
                <Boton>6</Boton>
                <Boton>*</Boton>
                <Boton>1</Boton>
                <Boton>2</Boton>
                <Boton>3</Boton>
                <Boton>-</Boton>
                <Boton>0</Boton>
                <Boton>.</Boton>
                <Boton>=</Boton>
                <Boton>+</Boton>
            </div>
        </div>
    }

}

export default Calculadora