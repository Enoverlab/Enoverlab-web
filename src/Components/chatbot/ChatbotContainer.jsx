import { useState } from "react";
import { Chatbot } from "./Chatbot";
import { ChatbotWidget } from "./ChatbotWidget";

export function ChatbotContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatbotWidget 
        onClick={() => setIsOpen(true)} 
        isOpen={isOpen} 
      />
      <Chatbot 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}
