import { useState, useEffect } from "react";
import Lead from './Lead.jsx'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { UsersMeCard } from './UsersMeCard.jsx'
import img4 from './../../assets/images/small/img-4.jpg'
import ThemeManager from './ThemeManager.jsx'
import useUsersChatsStore from "../../store/useUsersChatsStore.js";
import useThemeStore from "../../store/useThemeStore.js";
import { useShallow } from 'zustand/react/shallow'

const ChatLeftSidebar = () => {
    const { activeUserId, setActiveUserId, chats, fetchUserChat } = useUsersChatsStore(
        useShallow((state) =>
        ({
            activeUserId: state.activeUserId,
            setActiveUserId: state.setActiveUserId,
            chats: state.chats,
            fetchUserChat: state.fetchUserChat,
        })
        )
    )
    const { chatTabPaneKey, setUserChatOpen } = useThemeStore(
        useShallow((state) =>
        ({
            chatTabPaneKey: state.chatTabPaneKey,
            setUserChatOpen: state.setUserChatOpen,
        })
        )
    );

    const [modalShow, setModalShow] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
   

    useEffect(() => {
        fetchUserChat();
    }, [activeUserId]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleClick = (UserId) => {
        setActiveUserId(UserId)
        setUserChatOpen(true)
    };

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <>
            <div className="chat-leftsidebar">
                <Tabs                   
                    activeKey={chatTabPaneKey}
                    className="d-none"
                >
                    <Tab eventKey="chat" title="Chat">
                        <div>
                            <div className="px-4 pt-4">
                                <div className="d-flex align-items-start">
                                    <div className="flex-grow-1">
                                        <h4 className="mb-4">Chats</h4>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        type="text"
                                        className="form-control bg-light border-0 pe-0"
                                        placeholder="Search here.."
                                        aria-label="Example text with button addon" aria-describedby="searchbtn-addon" autoComplete="off" />
                                    <span className="btn btn-light"><i className='bx bx-search align-middle'></i></span>
                                </div>
                            </div>
                            <div className="chat-room-list" data-simplebar>
                                <div className="d-flex align-items-center px-4 mt-5 mb-2">
                                    <div className="flex-grow-1">
                                        <h4 className="mb-0 font-size-11 text-muted text-uppercase">Users Chats</h4>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <OverlayTrigger
                                            key={'bottom'}
                                            placement={'bottom'}
                                            overlay={
                                                <Tooltip id='tooltip-bottom'>
                                                    {'Option 1'}
                                                </Tooltip>
                                            }
                                        >
                                            <Button className="btn btn-soft-primary btn-sm" onClick={() => setModalShow(true)}>
                                                <i className="bx bx-plus"></i>
                                            </Button>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                                <div className="chat-message-list">
                                    <ul className="list-unstyled chat-list chat-user-list">
                                        <ul className="list-unstyled chat-list chat-user-list">
                                            {chats?.length > 0 ? (
                                                chats.map((chat) =>
                                                    <Lead
                                                        key={chat.user_uuid}
                                                        chat={chat}
                                                        isActive={activeUserId === chat.id}
                                                        onClick={() => handleClick(chat.id)}
                                                    />)

                                            ) : (
                                                <li className="p-2 text-center">No chats found</li>
                                            )}
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <UsersMeCard />
                    </Tab>
                    <Tab eventKey="settings" title="Settings">
                        <div className="user-profile-img">
                            <img src={img4} className="profile-img profile-foreground-img" style={{ height: "160px" }} alt="" />
                            <div className="overlay-content">
                                <div>
                                    <div className="user-chat-nav p-3">
                                        <div className="d-flex w-100 align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="text-white mb-0">Settings</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ThemeManager />
                    </Tab>
                </Tabs>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};


export default ChatLeftSidebar