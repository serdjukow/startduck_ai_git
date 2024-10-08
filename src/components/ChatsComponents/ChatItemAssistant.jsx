import Dropdown from 'react-bootstrap/Dropdown';
import useUsersMessagesStore from './../../store/useUsersMessagesStore'
import { useShallow } from 'zustand/react/shallow'

const ChatItemAssistant = ({ item: { id, text }, activeUserId }) => {
    const { chatTransfer } = useUsersMessagesStore(useShallow((state) =>
    ({
        chatTransfer: state.chatTransfer,
    })
    ))
    const onClick = () => {
        chatTransfer(activeUserId)
    }

    return (
        <li className="chat-list right">
            <div className="conversation-list">
                <div className="user-chat-content">
                    <div className="ctext-wrap">
                        <div className="ctext-wrap-content">
                            <p className="mb-0 ctext-content">{text}</p>
                        </div>
                        <div className="dropdown align-self-start message-box-drop">
                            <Dropdown>
                                <Dropdown.Toggle className="dropdown-toggle bg-transparent border-0" >
                                    <i className="ri-more-2-fill"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {/* <Dropdown.Item href="#/action-1" className="dropdown-item d-flex align-items-center justify-content-between">Reply <i className="bx bx-share ms-2 text-muted"></i></Dropdown.Item> */}
                                    <Dropdown.Item onClick={onClick} href="#/action-1" className="dropdown-item d-flex align-items-center justify-content-between">Transfer<i className="bx bx-share-alt ms-2 text-muted"></i></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="conversation-name">
                        {/* <small className="text-muted time">{datetime}</small>    */}
                    </div>
                </div>
            </div>
        </li>
    );
};


export default ChatItemAssistant