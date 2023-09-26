import React from "react";

class Boton extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
        return <button className={"btn btn-secondary col-" + (this.props.col === undefined ? "3" : this.props.col)}>
            {this.props.children}
        </button>
    }

}

export default Boton