import React, { useEffect, useRef } from 'react';
import ChatItemAssistant from './ChatItemAssistant.jsx'
import ChatItemUser from './ChatItemUser.jsx'
import useUsersChatsStore from './../../store/useUsersChatsStore.js'
import useUsersMessagesStore from "./../../store/useUsersMessagesStore";
import Loader from './../Loader'
import { useShallow } from 'zustand/react/shallow'

const ChatConversation = ({ chatId }) => {
    const messagesEndRef = useRef(null);
    const { activeUserId } = useUsersChatsStore(useShallow((state) =>
    ({
        activeUserId: state.activeUserId,
    })
    ))

    const { getMessagesByChatId, messages, loading } = useUsersMessagesStore(useShallow((state) =>
    ({
        getMessagesByChatId: state.getMessagesByChatId,
        messages: state.messages,
        loading: state.loading
    })
    )
    )

    useEffect(() => {
        getMessagesByChatId(chatId)
    }, [activeUserId])

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView();
        }
    }, [messages]);

    return (
        <>
            <div className="chat-conversation p-3 p-lg-4 simplebar-scrollable-y">
                <div className="simplebar-wrapper" style={{ margin: "-24px" }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer">
                        </div>
                    </div>

                    {
                        loading
                            ?
                            <Loader />
                            :
                            (<div className="simplebar-mask">
                                <div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                                    <div className="simplebar-content-wrapper" tabIndex="0" role="region" aria-label="scrollable content" style={{ height: "100%", overflow: "hidden scroll" }}>
                                        <div className="simplebar-content" style={{ padding: "24px" }}>
                                            <ul className="list-unstyled chat-conversation-list">
                                                {
                                                    messages.map(
                                                        (msg, id) => msg.role === 'user'
                                                            ? <ChatItemUser key={msg.id} item={msg} />
                                                            : <ChatItemAssistant key={id} item={msg} activeUserId={activeUserId} />
                                                    )
                                                }
                                            </ul>
                                        </div>
                                        <div ref={messagesEndRef} />
                                    </div>

                                </div>
                            </div>)
                    }

                </div>
            </div>
        </>
    );
};

export default ChatConversation;