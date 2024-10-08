import { useCallback } from 'react';
import avatar_2 from './../assets/images/users/multi-user.png'
import Dropdown from 'react-bootstrap/Dropdown';
import ChatInput from './../components/ChatsComponents/ChatInput'
import ChatConversation from './../components/ChatsComponents/ChatConversation'
import useUsersChatsStore from "./../store/useUsersChatsStore";
import useThemeStore from "./../store/useThemeStore";
import { useShallow } from 'zustand/react/shallow'

const ConversationUser = () => {
    const { userChatOpen, setUserChatOpen } = useThemeStore(useShallow((state) =>
    ({
        userChatOpen: state.userChatOpen,
        setUserChatOpen: state.setUserChatOpen
    })));
    const { activeUserId, activeUser } = useUsersChatsStore(useShallow((state) =>
    ({
        activeUserId: state.activeUserId,
        activeUser: state.activeUser
    })))

    const toggleUserChatOpen = useCallback(() => {
        setUserChatOpen(!userChatOpen);
    }, [setUserChatOpen, userChatOpen]);

    return (
        <>
            {activeUserId
                ?
                (
                    <div className={`user-chat w-100 overflow-hidden ${userChatOpen && 'user-chat-show'} `}>
                        <div className="chat-content d-lg-flex">
                            <div className="w-100 overflow-hidden position-relative">
                                <div className="position-relative">
                                    <div className="p-3 p-lg-4 user-chat-topbar">
                                        <div className="row align-items-center">
                                            <div className="col-sm-4 col-8">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 d-block d-lg-none me-3">
                                                        <a href="#" onClick={toggleUserChatOpen} className="user-chat-remove font-size-18 p-1"><i className="bx bx-chevron-left align-middle"></i></a>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                                                <img src={avatar_2} className="rounded-circle avatar-sm" alt="" />
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h6 className="text-truncate mb-0 font-size-18">
                                                                    <span className="user-profile-show text-reset">
                                                                        User ID: {activeUser?.id || ''}
                                                                    </span>                                    <span className="user-profile-show text-reset">
                                                                        / Last message: {activeUser?.last_message_at || ''}
                                                                    </span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-4">
                                                <ul className="list-inline user-chat-nav text-end mb-0">
                                                    <li className="list-inline-item">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="btn nav-btn dropdown-toggle bg-transparent border-0" type="button">
                                                                <i className='bx bx-search'></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <input type="text" className="form-control" placeholder="Search.." />
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Dropdown >
                                                            <Dropdown.Toggle className="btn nav-btn dropdown-toggle bg-transparent border-0" type="button">
                                                                <i className="bx bx-dots-vertical-rounded"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="cursor-pointer" role="button">
                                                                <div className="dropdown-item d-flex justify-content-between align-items-center" type="button">
                                                                    Delete
                                                                    <i className="bx bx-trash text-muted"></i>
                                                                </div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <ChatConversation chatId={activeUserId} />
                                </div>
                                <ChatInput chatbot={activeUser.chatbot.id} />
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <div className={`user-chat w-100 overflow-hidden d-flex justify-content-center align-items-center ${userChatOpen && 'user-chat-show'} `}>
                        <div className='text-wrap-content'>
                            <p className='mb-0 ctext-content'>
                                Select a chat
                            </p>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ConversationUser