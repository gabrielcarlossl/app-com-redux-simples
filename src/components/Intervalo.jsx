/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import "./Intervalo.css";
import Card from "./Card";
import { connect } from "react-redux";
import { alterarNumeroMinimo } from "../store/actions/numeros";


const Intervalo = (props) => {
  const { min, max } = props;
  

  return (
    <Card title="Intervalo de Números" Blue>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} />
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

function mapActionCreatorsToProps(dispatch){
    return{
        alterarMinimo(novoNumero){
            // action creator vai retornar uma action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect( mapStateToProps, mapActionCreatorsToProps )(Intervalo);
