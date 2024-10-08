import avatar_2 from './../../assets/images/users/multi-user.png'
import Dropdown from 'react-bootstrap/Dropdown';

const ChatItemUser = ({ item: { id, text } }) => {
    return (
        <li className="chat-list left">
            <div className="conversation-list">
                <div className="chat-avatar">
                    <img src={avatar_2} alt="" />
                </div>
                <div className="user-chat-content">
                    <div className="ctext-wrap">
                        <div className="ctext-wrap-content">
                            <p className="mb-0 ctext-content">{text}</p>
                        </div>
                        {/* <div className="dropdown message-box-drop">
                            <Dropdown>
                                <Dropdown.Toggle className="dropdown-toggle bg-transparent border-0" >
                                    <i className="ri-more-2-fill"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" className="dropdown-item d-flex align-items-center justify-content-between">Reply <i className="bx bx-share ms-2 text-muted"></i></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div> */}
                    </div>
                    <div className="conversation-name">
                        {/* <small className="text-muted time">{datetime}</small> */}
                        <span className="text-success check-message-icon">
                            <i className="bx bx-check-double"></i>
                        </span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ChatItemUser