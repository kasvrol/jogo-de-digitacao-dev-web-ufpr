import React, { useEffect, useState } from "react";
import Header from "../components//header";
import Footer from "../components/footer";
import Input from "../components/input";
import Text from "../components/text";
import Modal from "../components/modal";
import "../styles/jogo.css";

function Jogo() {
    const [teclaPressionada, setTeclaPressionada] = useState("");
    const [contagem, setContagem] = useState(0);
    const [indice, setIndice] = useState(-1);
    const [aprovaFimDaPartida, setAprovaFimDaPartida] = useState(false);

    const aTeclaQueFoiPressionada = (key) => {
        setTeclaPressionada(key);
        setIndice(indice + 1);
    };
    const aprovaVerificacao = (acerto) => {
        setContagem(contagem + acerto);
    };
    console.log(contagem);

    const texto = "Lorem ipsum dolor sit amet.";

    const textoSeparado = texto.toLowerCase().split("");

    return (
        <div className="JogoContainer">
            <Header />
            <main className="Jogo">
                <Text
                    textoSeparadoEmCaracter={textoSeparado}
                    teclaPressionada={teclaPressionada}
                    indice={indice}
                    aprovaVerificacao={aprovaVerificacao}
                    aprovaFimDaPartida={setAprovaFimDaPartida}
                />
                {aprovaFimDaPartida ? (
                    <Modal
                        texto={"Fim da partida"}
                        color={"red"}
                        informacao={contagem}
                        linkDoBotao={"./"}
                    />
                ) : (
                    <></>
                )}
                <section className="VerLetraPressionada">
                    <p className="LetraPressionada"> {teclaPressionada}</p>
                </section>
                <Input aTeclaQueFoiPressionada={aTeclaQueFoiPressionada} />
            </main>
            <Footer />
        </div>
    );
}

export default Jogo;
