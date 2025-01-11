'use client';

import React, { useState } from 'react';

// Define a type for the chat message
interface ChatMessage {
  sender: 'user' | 'ai';
  message: string;
}

const ChatBotPage = () => {
  const [userMessage, setUserMessage] = useState<string>(''); // Type for userMessage is string
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]); // Type for chatHistory is an array of ChatMessage objects

  // Simulated AI response function
  const getAIResponse = (message: string): string => {
    // For demonstration, we'll just simulate a response based on the user's message
    if (message.toLowerCase().includes('hello')) {
      return 'Hi! How can I assist you today?';
    } else if (message.toLowerCase().includes('workout')) {
      return 'Here are some workout suggestions: 3 days of cardio and 2 days of strength training.';
    } else if (message.toLowerCase().includes('diet')) {
      return 'For a healthy diet, try including more vegetables and lean proteins in your meals!';
    } else {
      return 'I am not sure how to respond to that. Can you ask something else?';
    }
  };

  // Handle sending a message
  const sendMessage = (): void => {
    if (userMessage.trim()) {
      // Update chat history with user message
      const newChatHistory: ChatMessage[] = [...chatHistory, { sender: 'user', message: userMessage }];
      
      // Get AI response and update chat history
      const aiResponse: string = getAIResponse(userMessage);
      newChatHistory.push({ sender: 'ai', message: aiResponse });

      setChatHistory(newChatHistory);
      setUserMessage(''); // Clear the input field
    }
  };

  return (
    
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">AI Chatbot</h1>
        <p className="text-gray-600">Talk to the AI chatbot for workout and diet recommendations.</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-6">
        {/* Chat history */}
        <div className="space-y-4 mb-6">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs p-4 rounded-lg ${chat.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                <p>{chat.message}</p>
              </div>
            </div>
          ))}
        </div>

        {/* User input */}
        <div className="flex">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            className="w-full border border-gray-300 p-2 rounded-l-lg"
            placeholder="Ask something..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBotPage;
