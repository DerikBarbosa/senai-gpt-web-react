function chat() {

return (

    <>

    <div className="container" />
        
        <header className="left-panel">
    
            <div className="top">
    
                <button className="btn-new-chat">+ New chat</button>
    
                <button className="btn-chat">
                    <img src="../assets/img/IconSet.svg" alt="ícone de chat." />
                    AI Chat Tool Ethics
                </button>
                
                <button className="btn-chat">
                    <img src="../assets/img/IconSet.svg" alt="ícone de chat." />
                    AI Chat Tool Impact Writing
                </button>
                
                <button className="btn-chat">
                    <img src="../assets/img/IconSet.svg" alt="ícone de chat." />
                    New chat
                </button>

            </div>
    
            <div className="bottom">
    
                <button className="btn-chat">Clear conversations</button>
                <button className="btn-chat">Light mode</button>
                <button className="btn-chat">My account</button>
                <button className="btn-chat">Updates & FAQ</button>
                <button className="btn-chat">Log out</button>
                
            </div>
    
        </header>
        
        <main className="central-panel" >
    
            <div className="logo">
                <img src="../assets/img/Chat.png" alt="Logo do SenaiGPT." />
            </div>
    
            <div className="dicas-container">

                <div className="dicas-item">

                    <h2>
                        <img src="../assets/img/Chats.png" alt="Example icon." />
                        Examples
                    </h2>

                    <p>"Explain quantum computing insimple terms"</p>
                    <p>"Got any creative ideas for a 10year old's birthday?"</p>
                    <p>"How do I make an HTTP requestin Javascript?"</p>

                </div>

                <div className="dicas-item">

                    <h2>
                        <img src="../assets/img/star.png" alt="Example icon." />
                        Capabilities
                    </h2>

                    <p>Remembers what user saidearlier in the conversation.</p>
                    <p>Allows user to provide follow-up corrections.</p>
                    <p>Trained to decline inappropriate requests.</p>

                </div>

                <div className="dicas-item">

                    <h2>
                        <img src="../assets/img/Vector.png" alt="Example icon." />
                        Limitations
                    </h2>
                    
                    <p>May occasionally generate incorrect information.</p>
                    <p>May occasionally produce harmful instructions or biased content.</p>
                    <p>Limited knowledge of world andevents after 2021.</p>

                </div>

            </div>

        
            <div className="input-container-1" />

                <img src="../assets/img/Vector (1).png" alt="Microfone." />
                <img src="../assets/img/Vector (2).png" alt="Image." />
                
                <input placeholder="Type a message." type="text" />
                
                <img src="../assets/img/send.png" alt="Send." />

            <div />

        </main>

    <footer></footer>

 </>


)

};

export default chat;


