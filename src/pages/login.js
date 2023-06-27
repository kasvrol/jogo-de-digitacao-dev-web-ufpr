import React, { useState } from "react";
import "../styles/login.css";

function Login() {
    const [usarLogin, setUsarLogin] = useState(true);
    const formularioDeLogin = () => {
        return (
            <div className="FormularioContainer">
                <form>
                    <section className="InputFormularioDeLoginContainer">
                        <label>Login</label>
                        <input
                            type="text"
                            placeholder="nick@email.com"
                            className="InputFormularioDeLogin"
                        />
                    </section>
                    <section className="InputFormularioDeLoginContainer">
                        <label>Senha</label>
                        <input
                            type="text"
                            placeholder="* * * * * * * "
                            className="InputFormularioDeLogin"
                        />
                    </section>
                </form>
                <button
                    onClick={() => setUsarLogin(!usarLogin)}
                    className="BotaoFormularioDeLogin"
                >
                    Não é cadastrado? Registre-se!
                </button>
            </div>
        );
    };

    const formularioDeCadastro = () => {
        return (
            <div className="FormularioContainer">
                <form>
                    <section className="InputFormularioDeLoginContainer">
                        <label>Nome</label>
                        <input
                            type="text"
                            placeholder="João da Silva"
                            className="InputFormularioDeLogin"
                        />
                    </section>
                    <section className="InputFormularioDeLoginContainer">
                        <label>Login</label>
                        <input
                            type="text"
                            placeholder="nick@email.com"
                            className="InputFormularioDeLogin"
                        />
                    </section>
                    <section className="InputFormularioDeLoginContainer">
                        <label>Senha</label>
                        <input
                            type="text"
                            placeholder="* * * * * * * "
                            className="InputFormularioDeLogin"
                        />
                    </section>
                </form>
                <button
                    onClick={() => setUsarLogin(!usarLogin)}
                    className="BotaoFormularioDeLogin"
                >
                    Já é cadastrado? Faça Login!
                </button>
            </div>
        );
    };
    return (
        <div className="LoginContainer">
            {usarLogin ? formularioDeLogin() : formularioDeCadastro()}
        </div>
    );
}

export default Login;
