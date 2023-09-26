import React from "react";
import Pantalla from "./Pantalla";

class Calculadora extends React.Component{

    constructor(props){
        super(props)
        this.state = {num1: 0}
    }

    render(){
        return <div>
            <Pantalla>{this.state.num1}</Pantalla>
        </div>
    }

}

export default Calculadora