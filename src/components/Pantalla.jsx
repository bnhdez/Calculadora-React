import React from "react";

class Pantalla extends React.Component{

    /*constructor(props): Al igual que en el componente Boton, el constructor se encarga 
    de inicializar la instancia del componente. En este caso, no se realiza ninguna lógica especial 
    en el constructor, pero se llama al constructor de la clase padre (super(props)) como es necesario.*/
    constructor(props){
        super(props)
    }

    render(){
        return <div className="mb-2">
            <input type="text" className="form-control" value={this.props.children} readOnly disabled/>
        </div>
    }

}

export default Pantalla