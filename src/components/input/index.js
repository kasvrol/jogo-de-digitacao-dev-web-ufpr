import React, { useState } from "react";
import { useEffect } from "react";
import "../../styles/input.css";

function Comp({ aTeclaQueFoiPressionada }) {
    const [keyPress, setKeyPress] = useState("");
    const [elements, setElements] = useState([]);

    const handlerKey = (event) => {
        setKeyPress(event.key);
        aTeclaQueFoiPressionada(event.key);
        setElements((prevState) => [...prevState, event.key]);
    };

    return (
        <div className="InputContainer">
            <textarea
                placeholder="Clique aqui para iniciar o jogo"
                onKeyPress={handlerKey}
                className="Input"
            />
        </div>
    );
}

export default Comp;
