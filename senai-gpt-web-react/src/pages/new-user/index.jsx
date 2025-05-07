import "./new-user.css";
import logo from "../../assets/imgs/chat (3).png";

import { useState } from "react";

function NewUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onNewUserClick = async () => {
    if (!name.trim()) return alert("Preencha o nome do usuário.");
    if (!email.trim()) return alert("Preencha o e-mail.");
    if (!password) return alert("Preencha a senha.");
    if (!confirmPassword) return alert("Preencha a confirmação da senha.");
    if (password !== confirmPassword) return alert("As senhas não conferem.");

    try {
      const response = await fetch("https://senai-gpt-api.up.railway.app/users", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ name, email, password })
      });

      if (response.ok) {
        alert("Novo usuário cadastrado com sucesso!");
        window.location.href = "/login";
      } else {
        alert("Erro inesperado. Caso persista, contate os administradores.");
      }
    } catch (err) {
      alert("Erro na conexão com o servidor.");
      console.error(err);
    }
  };

  return (
    <>
      <main className="page-container">
        <div className="robo-image"></div>

        <div className="new-user-container">
          <img className="new-user-logo" src={logo} alt="Logo do SenaiGPT." />
          <h1 className="titulo">Novo Usuário</h1>

          <input
            className="inpt"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Insira o nome do usuário"
          />
          <input
            className="inpt"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Insira o e-mail"
          />
          <input
            className="inpt"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Insira a senha"
          />
          <input
            className="inpt"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirme a senha"
          />

          <button className="btn" onClick={onNewUserClick}>Cadastrar</button>

          <a className="form-hint" href="/login">Clique aqui para fazer o login</a>
        </div>
      </main>
    </>
  );
}

export default NewUser;