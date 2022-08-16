import React from "react";

import Card from "./Card";

export default props =>{

    // const min = props.min

    // const max = props.max

    // fazendo a mesma const anterior mas com o destructuring

    const {min, max} = props
    return (
        
        <Card title='Média dos Números' Green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}