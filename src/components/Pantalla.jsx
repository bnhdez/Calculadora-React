import React from "react";

class Pantalla extends React.Component{

    constructor(props){
        super(props);{
            console.log(props)
        }
    }

    render(){
        return <div>
            <input type="text" className="form-control" value={this.props.children}/>
        </div>
    }

}

export default Pantalla