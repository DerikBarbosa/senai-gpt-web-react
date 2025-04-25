
import "./chat.css"
import btn from "../../assets/imgs/IconSet (1).svg";
import logo from "../../assets/imgs/Chat.png";
import exemplos from "../../assets/imgs/IconSet (3).svg";
import exempless from "../../assets/imgs/Star.svg";
import exemples from "../../assets/imgs/ShieldWarning (1).svg";
import aviao from "../../assets/imgs/Vector (3).png";
import microfone from "../../assets/imgs/IconSet.png";
import botaoimagem from "../../assets/imgs/Vector (2).png";
import { useEffect, useState } from "react";
function Chat() {

    const [chats, setChats] = useState([]);
    const [chatSelecionado, setChatSelecionado] = useState(null);
   

   useEffect (() => {

    getChats();

   }, []);

   const getChats = async() => {

    let response = await fetch ("https://senai-gpt-api.azurewebsites.net/chats", { 
        headers: {
                    "Authorization" : "Bearer " + localStorage.getItem("meuToken")
    } 

    });

    console.log(response); 

        if (response.ok == true ) {

            let json = await response.json();

            setChats(json);

    } else {

        if (response.status == 401) { 

            alert ("token invalido. Faça login novamente.");
            localStorage.clear();
            window.location.href = "/login";

        
            }

        }

   }

   const onLogOutClick = () => {

    localStorage.clear();
    window.location.href = "/login";

   }

   const clickChat = (chat) => {

    setChatSelecionado(chat);
    console.log(chat);

   }


   return (<div className="container">

            <header className="left-painel">

                <div className="top">

                
                    <button className="btn-new-chat"> + New Chat </button>

                    {chats.map (chat => (
                    <button className="btn-chat" onClick={() => clickChat (chat)}>
                        <img src={btn} alt="" /> 
                    {chat.chatTitle}
                    </button>
                    ))}

                </div>

                <div className="bottom">

                    <button className="btn-bx"> Clear Conversations </button>
                    <button className="btn-bx"> Light mode </button>
                    <button className="btn-bx"> My Account </button>
                    <button className="btn-bx"> Updates & FAQ </button>
                    <button className="btn-bx" onClick={() => onLogOutClick()}> Log out </button>

                </div>

            </header>

            <main className="painel-central">

                {chatSelecionado == null && (

                    <>
                    
                    
                <div className="dicas-container">
                    
                </div>
                    
                    
                    
                    </>

                )}

                <img className="logo" src={logo} alt="" />

                <div className="dicas-container">

                    <div className="dicas-item">

                        <h2>
                            <img src={exemplos} alt="Mensagem" />
                            Examples
                        </h2>

                        <p>Explique como um computador quantico funciona.</p>
                        <p>Explique como um computador quantico funciona.</p>
                        <p>Explique como um computador quantico funciona.</p>

                    </div>

                    <div className="dicas-item">

                        <h2>
                            <img src={exempless} alt="estrela" />
                            Examples
                        </h2>

                        <p>Explique como um computador quantico funciona.</p>
                        <p>Explique como um computador quantico funciona.</p>
                        <p>Explique como um computador quantico funciona.</p>

                    </div>

                    <div className="dicas-item">
                        <h2>
                            <img src={exemples} alt="" />
                            Examples
                        </h2>

                        <p>Explique como um computador quantico funciona.</p>
                        <p>Explique como um computador quantico funciona.</p>
                        <p>Explique como um computador quantico funciona.</p>

                    </div>

                </div>

                <div className="input-text-m">
                    <input className="input" type="text" placeholder="Type message" />

                    <img className="aviao" src={aviao} alt="Enviar" />
                    <img className="microfone" src={microfone} alt="Microfone" />
                    <img className="botaoimagem" src={botaoimagem} alt="Enviar Imagem" />

                </div>

            </main>

        </div>
    );
}
export default Chat;