import React from "react";

class Boton extends React.Component{

    /*constructor(props): Este es el constructor del componente, que toma props como argumento y 
    llama al constructor de la clase padre (super(props)) para inicializar la instancia del componente.*/
    constructor(props){
        super(props)

    }

    render(){
        return <button onClick={this.props.evento} className={`btn btn-${(this.props.color === undefined ? "secondary" : this.props.color)} col-${(this.props.col === undefined ? "3" : this.props.col) }`}>
            {this.props.children}
        </button>
    }

}

export default Boton