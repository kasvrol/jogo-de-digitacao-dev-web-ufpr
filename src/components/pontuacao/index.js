import "../../styles/pontuacao.css";
import React, { useEffect, useState } from "react";
function Pontuacao({ tipoDePontuacao, dataDaPontuacao }) {
    useEffect(() => {
        if (tipoDePontuacao === 1) {
            //requisicao da pontuacao liga em tal data
        } else {
            //requisicao da pontuacao geral em tal data
        }
    }, []);

    return <div className="PontuacaoContainer"></div>;
}

export default Pontuacao;
