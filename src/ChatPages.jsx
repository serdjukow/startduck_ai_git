import { Outlet } from 'react-router-dom'
import SideMenu from './components/SideMenu.jsx'

const ChatPages = () => {
    return (
        <main>
            <div className="layout-wrapper d-lg-flex">
                {/* Start left sidebar-menu */}
                <SideMenu />
                {/* end left sidebar-menu */}
                <Outlet />
                {/* Start Add contact Modal */}
                <div className="modal fade" id="addContact-exampleModal" tabIndex="-1" role="dialog" aria-labelledby="addContact-exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content modal-header-colored shadow-lg border-0">
                            <div className="modal-header">
                                <h5 className="modal-title text-white font-size-16" id="addContact-exampleModalLabel">Create Contact</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close">
                                </button>
                            </div>
                            <div className="modal-body p-4">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="addcontactemail-input" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="addcontactemail-input" placeholder="Enter Email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="addcontactname-input" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="addcontactname-input" placeholder="Enter Name" />
                                    </div>
                                    <div className="mb-0">
                                        <label htmlFor="addcontact-invitemessage-input" className="form-label">Invatation Message</label>
                                        <textarea className="form-control" id="addcontact-invitemessage-input" rows="3" placeholder="Enter Message"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-link" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Invite</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Add contact Modal */}

                {/* Start Add pinned tab Modal */}
                <div className="modal fade pinnedtabModal" tabIndex="-1" role="dialog" aria-labelledby="pinnedtabModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content modal-header-colored shadow-lg border-0">
                            <div className="modal-header">
                                <h5 className="modal-title text-white font-size-16" id="pinnedtabModalLabel">Bookmark</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close">
                                </button>
                            </div>
                            <div className="modal-body p-4">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-grow-1">
                                        <div>
                                            <h5 className="font-size-16 mb-0">10 Pinned tabs</h5>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div>
                                            <button type="button" className="btn btn-sm btn-soft-primary"><i className="bx bx-plus"></i> Pin</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-bookmark-list mx-n4" data-simplebar style={{ maxHeight: "299px" }}>
                                    <ul className="list-unstyled chat-list">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 avatar-xs me-3">
                                                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        <i className="bx bx-file"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-14 text-truncate mb-1"><a href="#" className="p-0">design-phase-1-approved.pdf</a></h5>
                                                    <p className="text-muted font-size-13 mb-0">12.5 MB</p>
                                                </div>

                                                <div className="flex-shrink-0 ms-3">
                                                    <div className="dropdown">
                                                        <a className="dropdown-toggle font-size-18 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="bx bx-dots-horizontal-rounded"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i className="bx bx-folder-open ms-2 text-muted"></i></a>
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i className="bx bx-pencil ms-2 text-muted"></i></a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i className="bx bx-trash ms-2 text-muted"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 avatar-xs me-3">
                                                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        <i className="bx bx-pin"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-14 text-truncate mb-1"><a href="#" className="p-0">Bg Pattern</a></h5>
                                                    <p className="text-muted font-size-13 mb-0">https://bgpattern.com/</p>
                                                </div>

                                                <div className="flex-shrink-0 ms-3">
                                                    <div className="dropdown">
                                                        <a className="dropdown-toggle font-size-18 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="bx bx-dots-horizontal-rounded"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i className="bx bx-folder-open ms-2 text-muted"></i></a>
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i className="bx bx-pencil ms-2 text-muted"></i></a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i className="bx bx-trash ms-2 text-muted"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 avatar-xs me-3">
                                                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        <i className="bx bx-image"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-14 text-truncate mb-1"><a href="#" className="p-0">Image-001.jpg</a></h5>
                                                    <p className="text-muted font-size-13 mb-0">4.2 MB</p>
                                                </div>

                                                <div className="flex-shrink-0 ms-3">
                                                    <div className="dropdown">
                                                        <a className="dropdown-toggle font-size-18 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="bx bx-dots-horizontal-rounded"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i className="bx bx-folder-open ms-2 text-muted"></i></a>
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i className="bx bx-pencil ms-2 text-muted"></i></a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i className="bx bx-trash ms-2 text-muted"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 avatar-xs me-3">
                                                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        <i className="bx bx-pin"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-14 text-truncate mb-1"><a href="#" className="p-0">Images</a></h5>
                                                    <p className="text-muted font-size-13 mb-0">https://images123.com/</p>
                                                </div>

                                                <div className="flex-shrink-0 ms-3">
                                                    <div className="dropdown">
                                                        <a className="dropdown-toggle font-size-18 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="bx bx-dots-horizontal-rounded"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i className="bx bx-folder-open ms-2 text-muted"></i></a>
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i className="bx bx-pencil ms-2 text-muted"></i></a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i className="bx bx-trash ms-2 text-muted"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 avatar-xs me-3">
                                                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        <i className="bx bx-pin"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-14 text-truncate mb-1"><a href="#" className="p-0">Bg Gradient</a></h5>
                                                    <p className="text-muted font-size-13 mb-0">https://bggradient.com/</p>
                                                </div>

                                                <div className="flex-shrink-0 ms-3">
                                                    <div className="dropdown">
                                                        <a className="dropdown-toggle font-size-18 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="bx bx-dots-horizontal-rounded"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i className="bx bx-folder-open ms-2 text-muted"></i></a>
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i className="bx bx-pencil ms-2 text-muted"></i></a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i className="bx bx-trash ms-2 text-muted"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 avatar-xs me-3">
                                                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        <i className="bx bx-image"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-14 text-truncate mb-1"><a href="#" className="p-0">Image-012.jpg</a></h5>
                                                    <p className="text-muted font-size-13 mb-0">3.1 MB</p>
                                                </div>

                                                <div className="flex-shrink-0 ms-3">
                                                    <div className="dropdown">
                                                        <a className="dropdown-toggle font-size-18 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="bx bx-dots-horizontal-rounded"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i className="bx bx-folder-open ms-2 text-muted"></i></a>
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i className="bx bx-pencil ms-2 text-muted"></i></a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i className="bx bx-trash ms-2 text-muted"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 avatar-xs me-3">
                                                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        <i className="bx bx-file"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-14 text-truncate mb-1"><a href="#" className="p-0">analytics dashboard.zip</a></h5>
                                                    <p className="text-muted font-size-13 mb-0">6.7 MB</p>
                                                </div>

                                                <div className="flex-shrink-0 ms-3">
                                                    <div className="dropdown">
                                                        <a className="dropdown-toggle font-size-18 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="bx bx-dots-horizontal-rounded"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i className="bx bx-folder-open ms-2 text-muted"></i></a>
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i className="bx bx-pencil ms-2 text-muted"></i></a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i className="bx bx-trash ms-2 text-muted"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Add pinned tab Modal */}

                {/* forward Modal */}
                <div className="modal fade forwardModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content modal-header-colored shadow-lg border-top-0">
                            <div className="modal-header">
                                <h5 className="modal-title text-white font-size-16">Share this Message</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-4">
                                <div>
                                    <div className="replymessage-block mb-2">
                                        <h5 className="conversation-name">Jean Berwick</h5>
                                        <p className="mb-0">Yeah everything is fine. Our next meeting tomorrow at 10.00 AM</p>
                                    </div>
                                    <textarea className="form-control" placeholder="Type your message..." rows="2"></textarea>
                                </div>
                                <hr className="my-4" />
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control bg-light border-0 pe-0" placeholder="Search here.."
                                        aria-label="Example text with button addon" aria-describedby="forwardSearchbtn-addon" />
                                    <button className="btn btn-light" type="button" id="forwardSearchbtn-addon"><i className='bx bx-search align-middle'></i></button>
                                </div>

                                <div className="d-flex align-items-center px-1">
                                    <div className="flex-grow-1">
                                        <h4 className="mb-0 font-size-11 text-muted text-uppercase">Contacts</h4>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <button type="button" className="btn btn-sm btn-primary">Share All</button>
                                    </div>
                                </div>
                                <div data-simplebar style={{ maxHeight: "150px" }} className="mx-n4 px-1" >
                                    <div>
                                        <div className="contact-list-title">
                                            A
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Albert Rodarte</h5>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Allison Etter</h5>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end contact list A */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            C
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Craig Smiley</h5>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end contact list C */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            D
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Daniel Clay</h5>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Doris Brown</h5>
                                                    </div>

                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* end contact list D */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            I
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Iris Wells</h5>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end contact list I */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            J
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Juan Flakes</h5>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">John Hall</h5>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Joy Southern</h5>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end contact list J */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            M
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Mary Farmer</h5>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Mark Messer</h5>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Michael Hinton</h5>
                                                    </div>

                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* end contact list M */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            O
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Ossie Wilson</h5>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* end contact list O */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            P
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Phillis Griffin</h5>
                                                    </div>

                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Paul Haynes</h5>
                                                    </div>

                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* end contact list P */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            R
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Rocky Jackson</h5>
                                                    </div>

                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* end contact list R */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            S
                                        </div>

                                        <ul className="list-unstyled contact-list mb-0">
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Sara Muller</h5>
                                                    </div>

                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Simon Velez</h5>
                                                    </div>

                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-14 m-0">Steve Walker</h5>
                                                    </div>

                                                    <div className="flex-shrink-0">
                                                        <button type="button" className="btn btn-sm btn-primary">Send</button>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* end contact list S */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* forward Modal */}

                {/* contactModal */}
                <div className="modal fade contactModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content modal-header-colored shadow-lg border-0">
                            <div className="modal-header">
                                <h5 className="modal-title text-white font-size-16">Contacts</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-4">

                                <div className="input-group mb-4">
                                    <input type="text" className="form-control bg-light border-0 pe-0" placeholder="Search here.." id="searchContactModal"
                                        // onKeyUp="searchContactOnModal()"
                                        aria-label="Example text with button addon" aria-describedby="contactSearchbtn-addon" />
                                    <button className="btn btn-light" type="button" id="contactSearchbtn-addon"><i className='bx bx-search align-middle'></i></button>
                                </div>

                                <div className="d-flex align-items-center px-1">
                                    <div className="flex-grow-1">
                                        <h4 className=" font-size-11 text-muted text-uppercase">Contacts</h4>
                                    </div>
                                </div>
                                <div className="contact-modal-list mx-n4 px-1" data-simplebar style={{ maxHeight: "200px" }}>
                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            A
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Albert Rodarte</h5>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Allison Etter</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end contact list A */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            C
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Craig Smiley</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end contact list C */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            D
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Daniel Clay</h5>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Doris Brown</h5>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* end contact list D */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            I
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li >
                                                <div>
                                                    <h5 className="font-size-14 m-0">Iris Wells</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end contact list I */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            J
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Juan Flakes</h5>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">John Hall</h5>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Joy Southern</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end contact list J */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            M
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Mary Farmer</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Mark Messer</h5>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Michael Hinton</h5>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* end contact list M */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            O
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Ossie Wilson</h5>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* end contact list O */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            P
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Phillis Griffin</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Paul Haynes</h5>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* end contact list P */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            R
                                        </div>

                                        <ul className="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Rocky Jackson</h5>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* end contact list R */}

                                    <div className="mt-3">
                                        <div className="contact-list-title">
                                            S
                                        </div>

                                        <ul className="list-unstyled contact-list mb-0">
                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Sara Muller</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Simon Velez</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h5 className="font-size-14 m-0">Steve Walker</h5>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* end contact list S */}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-link" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary"><i className="bx bxs-send align-middle"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contactModal */}
            </div >
            {/* end  layout wrapper */}
        </main >
    )
}

export default ChatPages;