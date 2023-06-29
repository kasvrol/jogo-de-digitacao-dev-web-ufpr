import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Pontuacao from "../components/pontuacao";
import Footer from "../components/footer";
import "../styles/jogo.css";

function Jogo() {
    return (
        <div className="DashboardContainer">
            <Header />
            <Pontuacao tipoDePontuacao={1} />
            <Pontuacao tipoDePontuacao={2} />
            <div>Escala de pontuação global</div>
            <div>Escala de pontuação em ligas</div>
            <button>Jogar em modo global</button>
            <button>Jogar em liga</button>
            <Footer />
        </div>
    );
}

export default Jogo;
