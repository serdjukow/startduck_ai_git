import React, { useMemo, useCallback } from 'react';
import useUsersChatsStore from "./../../store/useUsersChatsStore.js";
import { useShallow } from 'zustand/react/shallow'

const getInitials = (name) => {
    const nameParts = name.trim().split(' ').filter(Boolean);
    const firstNameInitial = nameParts[0]?.charAt(0).toUpperCase() || '';
    const lastNameInitial = nameParts[1]?.charAt(0).toUpperCase() || '';
    return firstNameInitial + lastNameInitial;
};

const Lead = ({ chat: { id, user_uuid, chatbot, total_messages, is_lead, in_process }, onClick, isActive }) => {
    const initials = useMemo(() => getInitials(name), [name]);
    const handleClick = useCallback(onClick, [onClick]);

    const { getStatusClass } = useUsersChatsStore(
        useShallow((state) =>
        ({
            getStatusClass: state.getStatusClass,
        })
        )
    );
    const statusClass = getStatusClass(is_lead, in_process);

    return (
        <li
            id={user_uuid}
            onClick={handleClick}
            className={isActive ? 'active' : ''}
        >
            <a href="#" className="unread-msg-user">
                <div className="d-flex align-items-center">
                    <div className={`${statusClass} chat-user-img align-self-center me-2 ms-0`}>
                        <div className="avatar-xs">
                            <span className="avatar-title rounded-circle bg-primary text-white">
                                <span className="username">{`${chatbot.id}`}</span>
                                <span className="user-status"></span>
                            </span>
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-truncate mb-0">{`Chatbot, User ID:${id}`}</p>
                    </div>
                    <div className="ms-auto">
                        <span className="badge bg-dark-subtle text-reset rounded p-1">{total_messages ? total_messages : '0'}</span>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default Lead