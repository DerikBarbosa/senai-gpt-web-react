import "./login.css"

import logo from "../../assets/imgs/Chat.png";
import { useState } from "react";

function login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLoginClick = async () => {

    let response = await fetch("https://senai-gpt-api.azurewebsites.net/login", {

      headers: {
        "content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password

      })
    });

    console.log(response);


    if (response.ok == true) {

      alert("login realizado com sucesso!");

      console.log(response);

      let json = await response.json();

      let token = json.accesToken;

      console.log("token "+token)

      localStorage.setItem("meuToken", token);

      function setCookie(name,value, days) {

      //   const date = new Date();
      //   date.setTime(date.getTime() + (days * 24 * 60 * 1000 ))
      //   const expires = "expires=" + date.toUTCString();
      //   document.cookie = '${name}=${value}; ${expires}; path=/';


     }


    } else {

      if (response.status == 401) {

        alert("As credenciais estão incorretas. Por favor, tente novamente");


      } else {

        alert("Erro inesperado ocorreu, caso esteja persistindo por favor envie um feedback");


      }

    }


  }


  return (
    <>

      <header></header>

      <main className="page-container">

        <div className="robo-image">



        </div>

        <div className="login-container">

          <img className="logo" src={logo} alt="Logo do SenaiGPT." />


          <h1

            id="meutitulo"
            className="titulo"
          >Login</h1>

          <input className="inpt" value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="Insira o e-mail" />
          <input className="inpt" value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="Insira a senha" />

          <button className="btn" onClick={onLoginClick}>Entrar</button>


        </div>



      </main>

      <footer></footer>

    </>
  )
}

export default login;