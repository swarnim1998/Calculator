import React from 'react';

export class Result extends React.Component{
    

    render(){
        let { result }= this.props;
        return(
            <div className="result">
                <p>{ result }</p>
            </div>
        )
    }
}