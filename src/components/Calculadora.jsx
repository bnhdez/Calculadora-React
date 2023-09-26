import React from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

class Calculadora extends React.Component{

    constructor(props){
        super(props)
        this.state = {num1: 0}
    }

    render(){
        return <div>
            <Pantalla>{this.state.num1}</Pantalla>
            <div className="row">
                <Boton>0</Boton>
            </div>
        </div>
    }

}

export default Calculadora