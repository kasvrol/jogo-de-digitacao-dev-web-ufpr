import "../../styles/modal.css";

function Modal({ texto, color, informacao, linkDoBotao }) {
    const fraseDeInformacao = (informacao) => {
        if (informacao && typeof informacao === "number") {
            return `Sua pontuação foi: ${informacao}`;
        }
    };

    return (
        <div style={{ background: `${color}` }} className="ModalContainer">
            <p className="ModalTexto">{texto}</p>
            <p className="ModalInformacao">{fraseDeInformacao(informacao)}</p>
            <button
                className="ModalBotao"
                style={{ color: `${color}` }}
                onClick={() => linkDoBotao}
            >
                Voltar ao Dashboard
            </button>
        </div>
    );
}

export default Modal;
