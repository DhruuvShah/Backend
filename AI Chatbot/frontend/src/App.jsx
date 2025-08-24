
import React, { useEffect, useRef, useState, useMemo } from 'react';
import './App.css';
// remixicon package (fonts) - make sure it's installed: npm install remixicon
import 'remixicon/fonts/remixicon.css';

export default function App() {
	const [input, setInput] = useState('');
	const [chats, setChats] = useState(() => [{ id: Date.now(), title: 'New Chat', messages: [] }]);
	const [currentChatId, setCurrentChatId] = useState(chats[0].id);
	const endRef = useRef(null);
	const inputRef = useRef(null);

	const currentChat = chats.find(c => c.id === currentChatId) || chats[0];
	const currentMessages = useMemo(() => (currentChat ? currentChat.messages : []), [currentChat]);

	const sendMessage = () => {
		const text = input.trim();
		if (!text) return;
		const msg = { id: Date.now(), sender: 'user', text };

		setChats(prev => prev.map(c => c.id === currentChatId ? { ...c, messages: [...c.messages, msg] } : c));
		setInput('');
		if (inputRef.current) inputRef.current.style.height = 'auto';
	};

	const createNewChat = () => {
		const id = Date.now();
		const newChat = { id, title: 'New Chat', messages: [] };
		setChats(prev => [newChat, ...prev]);
		setCurrentChatId(id);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	};

	useEffect(() => {
		endRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [currentMessages]);

	return (
		<div className="app-shell">
			<aside className="sidebar">
				<div className="sidebar-top">
					<button className="new-chat" onClick={createNewChat}>+ New Chat</button>
				</div>

				<div className="chat-list">
					{chats.map(chat => (
						<button
							key={chat.id}
							className={`chat-list-item ${chat.id === currentChatId ? 'active' : ''}`}
							onClick={() => setCurrentChatId(chat.id)}
						>
							<div className="chat-title">{chat.title}</div>
							<div className="chat-preview">{chat.messages.length ? chat.messages[chat.messages.length-1].text.slice(0,40) : 'Empty'}</div>
						</button>
					))}
				</div>
			</aside>

			<main className="chat-container">
				<div className="chat-header">Chat</div>

				<div className="chat-window">
					<div className="messages">
						{currentMessages.length === 0 && (
							<div className="empty">No messages yet — say hello!</div>
						)}

						{currentMessages.map(m => (
							<div key={m.id} className={`message ${m.sender}`}>
								<div className="message-text">{m.text}</div>
							</div>
						))}

						<div ref={endRef} />
					</div>
				</div>

				<footer className="chat-footer">
					<form
						className="composer"
						onSubmit={(e) => {
							e.preventDefault();
							sendMessage();
						}}
					>
						<textarea
							ref={inputRef}
							className="composer-input"
							placeholder="Type a message..."
							value={input}
							onChange={(e) => {
								const el = e.target;
								setInput(el.value);
								el.style.height = 'auto';
								el.style.height = `${el.scrollHeight}px`;
							}}
							onKeyDown={handleKeyDown}
							rows={1}
						/>

						<button className="composer-send" type="submit" aria-label="Send message">
							<i className="ri-arrow-up-long-fill" aria-hidden="true"></i>
						</button>
					</form>
				</footer>
			</main>
		</div>
	);
}
