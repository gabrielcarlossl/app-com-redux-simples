import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

// function Media(props){...}  ou
const Media = (props) => {
  const { min, max } = props;

  return (
    <Card title="Média dos Números" Green>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

//deve ser passado uma função dentro do connect, geralmente é chamada de  mapStateToProps
export default connect(mapStateToProps)(Media);
