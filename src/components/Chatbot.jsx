import React, { useState, useEffect, useRef } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your assistant. Type 'skills', 'projects', or 'resume' to learn more about me!", isBot: true }
  ]);
  
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleAsk = () => {
    if (!inputValue.trim()) return;

    const userText = inputValue.toLowerCase();
    let botResponse = "I'm not sure about that, but let's connect on LinkedIn to discuss more!";

    if (userText.includes("skill")) botResponse = "I am skilled in React, Java, DSA, and Frontend UI design.";
    if (userText.includes("project")) botResponse = "I've built several apps, including this portfolio and a task manager. Check my Projects section!";
    if (userText.includes("resume")) botResponse = "You can download my resume using the 'Download Resume' button at the top of the page!";
    if (userText.includes("hello") || userText.includes("hi")) botResponse = "Hello! How can I help you today?";

    setMessages([...messages, { text: inputValue, isBot: false }, { text: botResponse, isBot: true }]);
    setInputValue("");
  };

  return (
    <div className="chatbot-container">
      {/* The Button using a simple Unicode Character (💬) */}
      <button onClick={() => setIsOpen(!isOpen)} className="chat-button">
        {isOpen ? "✕" : "💬"}
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">Portfolio Assistant</div>
          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={m.isBot ? "bot-msg-container" : "user-msg-container"}>
                <span className={m.isBot ? "bot-msg" : "user-msg"}>{m.text}</span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="chat-input-area">
            <input 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
              placeholder="Ask me something..." 
            />
            <button onClick={handleAsk}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
}