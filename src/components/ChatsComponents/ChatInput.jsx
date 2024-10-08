import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import EmojiPicker, { Theme } from 'emoji-picker-react';
import useThemeStore from "./../../store/useThemeStore.js";
import useUsersMessagesStore from "../../store/useUsersMessagesStore.js";
import { useShallow } from 'zustand/react/shallow'

const ChatInput = ({ chatbot }) => {
    const { isDarkTheme } = useThemeStore();

    const { addMessage, sendMessage } = useUsersMessagesStore(
        useShallow((state) =>
        ({
            addMessage: state.addMessage,
            sendMessage: state.sendMessage
        })),
    )

    const [message, setMessage] = useState('')

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (message.trim() === '') return;
        sendMessage(message, chatbot);
        addMessage(message)
        setMessage('');
    };

    const onEmojiClick = (emojiObject) => {
        setMessage(prevInput => prevInput + emojiObject.emoji);
    };

    return (
        <div className="position-relative">
            <div className="chat-input-section p-3 p-lg-4">
                <form onSubmit={handleSendMessage} >
                    <div className="row g-0 align-items-center">
                        <div className="col-auto">
                            <div className="chat-input-links me-md-2">
                                <div className="links-list-item">

                                    <Dropdown>
                                        <Dropdown.Toggle className="dropdown-toggle bg-transparent border-0 btn btn-link text-decoration-none btn-lg waves-effect emoji-btn">
                                            <i className="bx bx-smile align-middle"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <EmojiPicker
                                                onEmojiClick={onEmojiClick}
                                                theme={isDarkTheme ? Theme.DARK : Theme.LIGHT}
                                                searchDisabled={true}
                                            />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="position-relative">
                                <div className="chat-input-feedback">
                                    Please Enter a Message
                                </div>
                                <input
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    autoComplete="off"
                                    type="text"
                                    className="form-control form-control-lg chat-input"
                                    autoFocus
                                    placeholder="Type your message..."
                                />
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="chat-input-links ms-2 gap-md-1">
                                <div className="links-list-item">
                                    <button type="submit" className="btn btn-primary btn-lg chat-send waves-effect waves-light" data-bs-toggle="collapse" data-bs-target=".chat-input-collapse1.show">
                                        <i className="bx bxs-send align-middle"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="replyCard">
                <div className="card mb-0">
                    <div className="card-body py-3">
                        <div className="replymessage-block mb-0 d-flex align-items-start">
                            <div className="flex-grow-1">
                                <h5 className="conversation-name"></h5>
                                <p className="mb-0"></p>
                            </div>
                            <div className="flex-shrink-0">
                                <button type="button" className="btn btn-sm btn-link mt-n2 me-n3 font-size-18">
                                    <i className="bx bx-x align-middle"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatInput;