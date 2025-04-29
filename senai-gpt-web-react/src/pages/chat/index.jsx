import "./chat.css";
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
    const [userMessage, setUserMessage] = useState("");

    useEffect(() => {
        getChats();
    }, []);

    const getChats = async () => {
        let response = await fetch("https://senai-gpt-api.azurewebsites.net/chats", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken"),
            },
        });

        if (response.ok) {
            let json = await response.json();
            setChats(json);
        } else if (response.status === 401) {
            alert("Token inválido. Faça login novamente.");
            localStorage.clear();
            window.location.href = "/login";
        }
    };

    const onLogOutClick = () => {
        localStorage.clear();
        window.location.href = "/login";
    };

    const clickChat = (chat) => {
        setChatSelecionado(chat);
    };

    const chatGPT = async (message) => {
        const endpoint = "https://ai-testenp1826117277026.openai.azure.com/";
        const apikey = "DCYQ..."; // Remova isso em produção!
        const deploymentId = "gpt-4";
        const apiVersion = "2024-05-01-preview";

        const url = `${endpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`;

        const data = {
            messages: [{ role: "user", content: message }],
            max_tokens: 100,
        };

        const headers = {
            "Content-Type": "application/json",
            "api-key": apikey,
        };

        const response = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            return result.choices[0].message.content;
        }

        return "Erro ao se comunicar com o ChatGPT.";
    };

    const enviarMensagem = async () => {
        if (!message.trim()) return;

        const novaMensagemUsuario = {
            userId: "user",
            text: mensagem,
            id: Date.now(),
        };

        const resposta = await chatGPT(mensagem);

        const novaMensagemBot = {
            userId: "chatbot",
            text: resposta,
            id: Date.now() + 1,
        };

        if (chatSelecionado) {
            setChatSelecionado((prevChat) => ({
                ...prevChat,
                messages: [...prevChat.messages, novaMensagemUsuario, novaMensagemBot],
            }));
        }

        setUserMessage("");
    };

    return (
        <div className="container">
            <header className="left-painel">
                <div className="top">
                    <button className="btn-new-chat">+ New Chat</button>
                    {chats.map((chat) => (
                        <button className="btn-chat" onClick={() => clickChat(chat)} key={chat.id}>
                            <img src={btn} alt="Icon" />
                            {chat.chatTitle}
                        </button>
                    ))}
                </div>

                <div className="bottom">
                    <button className="btn-bx">Clear Conversations</button>
                    <button className="btn-bx">Light mode</button>
                    <button className="btn-bx">My Account</button>
                    <button className="btn-bx">Updates & FAQ</button>
                    <button className="btn-bx" onClick={onLogOutClick}>Log out</button>
                </div>
            </header>

            <main className="painel-central">
                {chatSelecionado === null ? (
                    <>
                        <img className="logo" src={logo} alt="Logo SenaiGPT" />
                        <div className="dicas-container">
                            <div className="dicas-item">
                                <h2><img src={exemplos} alt="" /> Examples</h2>
                                <p>"Explique como um computador quântico funciona."</p>
                                <p>"Ideias criativas para festa de 10 anos."</p>
                                <p>"Como faço uma requisição HTTP em JS?"</p>
                            </div>
                            <div className="dicas-item">
                                <h2><img src={exempless} alt="" /> Capabilities</h2>
                                <p>Lembra o que você disse antes.</p>
                                <p>Permite correções no meio da conversa.</p>
                                <p>Recusa pedidos inapropriados.</p>
                            </div>
                            <div className="dicas-item">
                                <h2><img src={exemples} alt="" /> Limitations</h2>
                                <p>Pode gerar informações erradas.</p>
                                <p>Pode produzir conteúdo enviesado.</p>
                                <p>Conhecimento limitado após 2021.</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="chat-container">
                        <h2>{chatSelecionado.chatTitle}</h2>
                        <div className="chat-messages">
                            {chatSelecionado.messages.map((msg) => (
                                <p
                                    key={msg.id}
                                    className={"menssage-item" + (msg.userId === "chatbot" ? " chatbot" : "")}
                                >
                                    {msg.text}
                                </p>
                            ))}
                        </div>
                    </div>
                )}

                <div className="input-text-m">
                    <input
                        className="input"
                        type="text"
                        placeholder="Type a message"
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
                    />
                    <img onClick={() => enviarMensagem(userMessage)} className="aviao" src={aviao} alt="Enviar" />
                    <img className="microfone" src={microfone} alt="Microfone" />
                    <img className="botaoimagem" src={botaoimagem} alt="Imagem" />
                </div>
            </main>
        </div>
    );
}

export default Chat;