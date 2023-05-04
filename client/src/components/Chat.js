import React, { useState, useEffect } from "react";
import axios from "axios";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getWelcomeMessage = async () => {
      const response = await axios.post("/api/chat", {
        message: "Bem-vindo à plataforma de suporte a vendas!"
      });

      setMessages([response.data]);
    };

    getWelcomeMessage();
  }, []);

  const sendMessage = async () => {
    if (input.trim() !== "") {
      const response = await axios.post("/api/chat", { message: input });
      setMessages([...messages, response.data]);
      setInput("");
    }
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div>
      <h1>Chat com ChatGPT</h1>
      <div className="messages">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={event => setInput(event.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua pergunta aqui"
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default Chat;
