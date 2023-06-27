import React, { useState } from "react";
import { useEffect } from "react";
import "../../styles/texto.css";

function Texto({
    textoSeparadoEmCaracter,
    indice,
    teclaPressionada,
    aprovaVerificacao,
    aprovaFimDaPartida,
}) {
    useEffect(() => {
        if (teclaPressionada && !textoSeparadoEmCaracter[indice]) {
            aprovaFimDaPartida(true);
        }
        if (teclaPressionada === textoSeparadoEmCaracter[indice]) {
            aprovaVerificacao(1);
        } else {
            aprovaVerificacao(0);
        }
    }, [teclaPressionada]);

    return (
        <div className="TextoContainer">
            <article>{textoSeparadoEmCaracter.join("")}</article>
        </div>
    );
}

export default Texto;
