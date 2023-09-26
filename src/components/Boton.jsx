import React from "react";

class Boton extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return <button className="btn btn-secondary">
            {this.props.children}
        </button>
    }

}

export default Boton